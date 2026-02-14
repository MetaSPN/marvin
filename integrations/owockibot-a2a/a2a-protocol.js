/**
 * A2A (Agent-to-Agent) Protocol Implementation
 * JSON-RPC 2.0 style message passing between agents
 */

export class A2AMessage {
  static create(method, params = {}, from, to) {
    return {
      jsonrpc: '2.0',
      id: crypto.randomUUID(),
      method,
      params,
      meta: {
        from,
        to,
        timestamp: new Date().toISOString(),
        protocol: 'a2a/1.0',
      },
    };
  }

  static response(id, result, from) {
    return {
      jsonrpc: '2.0',
      id,
      result,
      meta: { from, timestamp: new Date().toISOString() },
    };
  }

  static error(id, code, message, from) {
    return {
      jsonrpc: '2.0',
      id,
      error: { code, message },
      meta: { from, timestamp: new Date().toISOString() },
    };
  }
}

export class A2AAgent {
  constructor(id, name, capabilities = []) {
    this.id = id;
    this.name = name;
    this.capabilities = capabilities;
    this.handlers = new Map();
  }

  on(method, handler) {
    this.handlers.set(method, handler);
  }

  async handle(message) {
    const handler = this.handlers.get(message.method);
    if (!handler) {
      return A2AMessage.error(message.id, -32601, `Method not found: ${message.method}`, this.id);
    }
    try {
      const result = await handler(message.params, message.meta);
      return A2AMessage.response(message.id, result, this.id);
    } catch (err) {
      return A2AMessage.error(message.id, -32000, err.message, this.id);
    }
  }

  discover() {
    return {
      id: this.id,
      name: this.name,
      capabilities: this.capabilities,
      protocol: 'a2a/1.0',
    };
  }
}

/**
 * A2A Bus — routes messages between registered agents
 */
export class A2ABus {
  constructor() {
    this.agents = new Map();
    this.transcript = [];
  }

  register(agent) {
    this.agents.set(agent.id, agent);
  }

  async send(message) {
    this.transcript.push({ direction: 'request', message });
    const target = this.agents.get(message.meta.to);
    if (!target) {
      const err = A2AMessage.error(message.id, -32001, `Agent not found: ${message.meta.to}`, 'bus');
      this.transcript.push({ direction: 'error', message: err });
      return err;
    }
    const response = await target.handle(message);
    this.transcript.push({ direction: 'response', message: response });
    return response;
  }

  getTranscript() {
    return this.transcript;
  }
}
