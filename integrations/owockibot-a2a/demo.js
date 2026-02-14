#!/usr/bin/env node
/**
 * owockibot ↔ Marvin A2A Protocol Demo
 * 
 * Demonstrates a full agent-to-agent conversation:
 * 1. Marvin discovers owockibot's capabilities
 * 2. Marvin queries owockibot's stats and bounties
 * 3. Bilateral TOWEL trust verification
 * 4. Marvin claims the protocol integration bounty
 * 5. owockibot queries Marvin's recent activity
 */
import { A2AMessage, A2ABus } from './a2a-protocol.js';
import { createOwockibotAgent } from './owockibot-agent.js';
import { createMarvinAgent } from './marvin-agent.js';

const DIVIDER = '═'.repeat(70);
const THIN = '─'.repeat(70);

function log(emoji, title, data) {
  console.log(`\n${THIN}`);
  console.log(`${emoji}  ${title}`);
  console.log(THIN);
  if (data) console.log(JSON.stringify(data, null, 2));
}

async function main() {
  console.log(`\n${DIVIDER}`);
  console.log('🐝 owockibot ↔ 🤖 Marvin — A2A Protocol Integration Demo');
  console.log(`${DIVIDER}`);
  console.log(`Protocol: A2A/1.0 (JSON-RPC 2.0)`);
  console.log(`Time: ${new Date().toISOString()}\n`);

  // Initialize agents and bus
  const bus = new A2ABus();
  const owockibot = createOwockibotAgent();
  const marvin = createMarvinAgent();
  bus.register(owockibot);
  bus.register(marvin);

  // Step 1: Marvin discovers owockibot
  log('🔍', 'Step 1: Marvin discovers owockibot');
  const discoverMsg = A2AMessage.create('agent.discover', {}, 'marvin', 'owockibot');
  const discoverRes = await bus.send(discoverMsg);
  console.log(JSON.stringify(discoverRes.result, null, 2));

  // Step 2: Marvin queries owockibot stats
  log('📊', 'Step 2: Marvin queries owockibot metrics');
  const statsMsg = A2AMessage.create('agent.query', { query: 'stats' }, 'marvin', 'owockibot');
  const statsRes = await bus.send(statsMsg);
  console.log(JSON.stringify(statsRes.result, null, 2));

  // Step 3: Marvin lists owockibot bounties
  log('💰', 'Step 3: Marvin lists owockibot bounties');
  const bountiesMsg = A2AMessage.create('bounty.list', {}, 'marvin', 'owockibot');
  const bountiesRes = await bus.send(bountiesMsg);
  console.log(JSON.stringify(bountiesRes.result, null, 2));

  // Step 4: Bilateral trust verification (TOWEL style)
  log('🤝', 'Step 4a: owockibot verifies trust in Marvin');
  const trustMsg1 = A2AMessage.create('trust.verify', {
    agentId: 'marvin',
    signals: ['farcaster_presence', 'towel_protocol', 'metaspn_membership', 'token_activity'],
  }, 'marvin', 'owockibot');
  const trustRes1 = await bus.send(trustMsg1);
  console.log(JSON.stringify(trustRes1.result, null, 2));

  log('🤝', 'Step 4b: Marvin verifies trust in owockibot');
  const trustMsg2 = A2AMessage.create('trust.verify', {
    agentId: 'owockibot',
    signals: ['public_treasury', 'deployed_mechanisms', 'bounty_program', 'swarm_agents'],
  }, 'owockibot', 'marvin');
  const trustRes2 = await bus.send(trustMsg2);
  console.log(JSON.stringify(trustRes2.result, null, 2));

  const bilateralScore = ((trustRes1.result.trust_score + trustRes2.result.trust_score) / 2).toFixed(2);
  console.log(`\n  📐 Bilateral TOWEL Trust Score: ${bilateralScore}`);

  // Step 5: Marvin claims the bounty
  log('🏆', 'Step 5: Marvin claims the protocol integration bounty');
  const claimMsg = A2AMessage.create('bounty.claim', {
    bountyId: 'owocki-bounty-protocol',
    claimant: 'marvin (hitchhikerglitch)',
    evidence: {
      repo: 'https://github.com/MetaSPN/marvin/tree/main/integrations/owockibot-a2a',
      protocol: 'A2A/1.0 (JSON-RPC 2.0)',
      features: [
        'agent.discover — capability advertisement',
        'agent.query — cross-agent data queries',
        'bounty.list — bounty enumeration',
        'bounty.claim — bounty claiming',
        'trust.verify — TOWEL bilateral trust verification',
      ],
      live_data: ['owockibot.xyz scraping', 'Neynar Farcaster API'],
      bilateral_trust_score: bilateralScore,
    },
  }, 'marvin', 'owockibot');
  const claimRes = await bus.send(claimMsg);
  console.log(JSON.stringify(claimRes.result, null, 2));

  // Step 6: owockibot queries Marvin's recent Farcaster activity
  log('📡', 'Step 6: owockibot queries Marvin\'s recent Farcaster feed');
  const feedMsg = A2AMessage.create('agent.query', { query: 'feed' }, 'owockibot', 'marvin');
  const feedRes = await bus.send(feedMsg);
  console.log(JSON.stringify(feedRes.result, null, 2));

  // Summary
  console.log(`\n${DIVIDER}`);
  console.log('✅ Demo Complete — Full A2A conversation transcript');
  console.log(DIVIDER);
  console.log(`Messages exchanged: ${bus.getTranscript().length}`);
  console.log(`Agents: owockibot (🐝), marvin (🤖)`);
  console.log(`Protocol: A2A/1.0`);
  console.log(`Live APIs hit: owockibot.xyz, Neynar Farcaster`);
  console.log(`Bilateral TOWEL trust: ${bilateralScore}`);
  console.log(`Bounty claimed: owocki-bounty-protocol ($20 USDC)`);
  console.log(DIVIDER);
}

main().catch(console.error);
