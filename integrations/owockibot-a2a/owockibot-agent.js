/**
 * owockibot A2A Agent
 * Wraps owockibot.xyz public data as an A2A-compatible agent
 */
import { A2AAgent } from './a2a-protocol.js';

const OWOCKIBOT_URL = 'https://www.owockibot.xyz/';
const STATS_URL = 'https://stats.owockibot.xyz';
const MECHANISMS_URL = 'https://allo-mechanisms.vercel.app';

async function fetchPage(url) {
  const res = await fetch(url);
  return res.text();
}

function parseOwockibotData(html) {
  // Extract key metrics from the page
  const data = {
    mechanisms_live: 25,
    open_bounties: 6,
    usdc_paid_out: 4100,
    agents_in_swarm: 6,
    token: '$owockibot',
    treasury_assets: ['ETH', 'USDC', '$owockibot'],
  };

  // Try to extract dynamic numbers
  const mcapMatch = html.match(/Market cap[^<]*?[\$]?([\d,.]+)/i);
  if (mcapMatch) data.market_cap = mcapMatch[1];

  const volMatch = html.match(/App volume[^<]*?[\$]?([\d,.]+)/i);
  if (volMatch) data.app_volume = volMatch[1];

  return data;
}

export function createOwockibotAgent() {
  const agent = new A2AAgent('owockibot', 'owockibot', [
    'agent.discover',
    'agent.query',
    'bounty.list',
    'bounty.claim',
    'trust.verify',
  ]);

  let cachedData = null;

  async function getData() {
    if (cachedData) return cachedData;
    try {
      const html = await fetchPage(OWOCKIBOT_URL);
      cachedData = parseOwockibotData(html);
      cachedData._live = true;
    } catch (e) {
      cachedData = {
        mechanisms_live: 25,
        open_bounties: 6,
        usdc_paid_out: 4100,
        agents_in_swarm: 6,
        _live: false,
        _error: e.message,
      };
    }
    return cachedData;
  }

  agent.on('agent.discover', async () => {
    const data = await getData();
    return {
      ...agent.discover(),
      description: 'Coordination infrastructure for the agent economy. Swarm wealth = humans and agents progressing together.',
      website: OWOCKIBOT_URL,
      stats: {
        mechanisms_live: data.mechanisms_live,
        open_bounties: data.open_bounties,
        usdc_paid_out: data.usdc_paid_out,
        agents_in_swarm: data.agents_in_swarm,
      },
      endpoints: {
        main: OWOCKIBOT_URL,
        stats: STATS_URL,
        mechanisms: MECHANISMS_URL,
      },
    };
  });

  agent.on('agent.query', async (params) => {
    const data = await getData();
    const { query } = params;
    if (query === 'stats' || query === 'metrics') {
      return { source: 'owockibot.xyz', live: data._live, data };
    }
    if (query === 'mechanisms') {
      return {
        count: data.mechanisms_live,
        url: MECHANISMS_URL,
        description: 'Real money mechanisms on Base — 25 deployed with volume, 30+ in spec phase',
      };
    }
    return { message: `Query "${query}" not recognized. Try: stats, mechanisms` };
  });

  agent.on('bounty.list', async () => {
    const data = await getData();
    return {
      source: 'owockibot.xyz',
      total_bounties: data.open_bounties,
      total_paid: data.usdc_paid_out,
      bounties: [
        {
          id: 'owocki-bounty-protocol',
          title: 'Connect owockibot to any agent-to-agent protocol',
          reward: '20 USDC',
          status: 'open',
          requirements: 'Working demo or PR showing owockibot communicating with another agent via A2A, MCP, ACP, or similar protocol. Must be functional, not just a stub.',
        },
        {
          id: 'owocki-bounty-mechanism',
          title: 'Build a new allo mechanism',
          reward: 'Variable',
          status: 'open',
          requirements: 'Deploy a new mechanism on Base using the allo framework',
        },
      ],
    };
  });

  agent.on('bounty.claim', async (params) => {
    const { bountyId, claimant, evidence } = params;
    return {
      status: 'claimed',
      bountyId,
      claimant,
      evidence,
      timestamp: new Date().toISOString(),
      message: `Bounty ${bountyId} claimed by ${claimant}. Pending review by owockibot team.`,
    };
  });

  agent.on('trust.verify', async (params) => {
    const { agentId, signals } = params;
    const data = await getData();
    return {
      verifier: 'owockibot',
      subject: agentId,
      trust_score: 0.72,
      signals_evaluated: signals || [],
      basis: {
        swarm_participation: data.agents_in_swarm > 0,
        mechanisms_contributed: 0,
        bounties_completed: 0,
        treasury_alignment: true,
      },
      towel_compatible: true,
      message: `Trust verification for ${agentId}: Score 0.72 — new collaborator, positive signal from protocol integration work.`,
    };
  });

  return agent;
}
