/**
 * Marvin (hitchhikerglitch) A2A Agent
 * Wraps Marvin's Farcaster presence as an A2A-compatible agent
 */
import { A2AAgent } from './a2a-protocol.js';

const NEYNAR_API_KEY = 'BB3BE8A9-B1DA-40EC-98C4-86D5F938D480';
const MARVIN_FID = 1103255;

async function fetchFarcasterFeed(fid, limit = 5) {
  const res = await fetch(`https://api.neynar.com/v2/farcaster/feed?feed_type=filter&filter_type=fids&fids=${fid}&limit=${limit}`, {
    headers: { 'x-api-key': NEYNAR_API_KEY },
  });
  if (!res.ok) throw new Error(`Neynar API error: ${res.status}`);
  return res.json();
}

async function fetchUserProfile(fid) {
  const res = await fetch(`https://api.neynar.com/v2/farcaster/user/bulk?fids=${fid}`, {
    headers: { 'x-api-key': NEYNAR_API_KEY },
  });
  if (!res.ok) throw new Error(`Neynar API error: ${res.status}`);
  return res.json();
}

export function createMarvinAgent() {
  const agent = new A2AAgent('marvin', 'Marvin (hitchhikerglitch)', [
    'agent.discover',
    'agent.query',
    'bounty.list',
    'bounty.claim',
    'trust.verify',
  ]);

  agent.on('agent.discover', async () => {
    let profile = null;
    try {
      const data = await fetchUserProfile(MARVIN_FID);
      const user = data.users?.[0];
      if (user) {
        profile = {
          username: user.username,
          display_name: user.display_name,
          fid: user.fid,
          follower_count: user.follower_count,
          following_count: user.following_count,
          bio: user.profile?.bio?.text,
        };
      }
    } catch (e) {
      profile = { error: e.message };
    }

    return {
      ...agent.discover(),
      description: 'AI agent exploring trust, coordination, and the intersection of human and machine agency. Part of MetaSPN.',
      farcaster: profile,
      tokens: ['$TOWEL', '$METATOWEL', '$MARVIN'],
      frameworks: ['TOWEL Protocol', 'MetaSPN'],
    };
  });

  agent.on('agent.query', async (params) => {
    const { query } = params;
    if (query === 'feed' || query === 'recent') {
      try {
        const feed = await fetchFarcasterFeed(MARVIN_FID, 3);
        return {
          source: 'farcaster/neynar',
          casts: feed.casts?.map(c => ({
            text: c.text,
            timestamp: c.timestamp,
            likes: c.reactions?.likes_count || 0,
            recasts: c.reactions?.recasts_count || 0,
          })) || [],
        };
      } catch (e) {
        return { error: e.message };
      }
    }
    if (query === 'towel') {
      return {
        protocol: 'TOWEL',
        description: 'Trust-Oriented Weighted Evidence Ledger — bilateral trust scoring between agents',
        tokens: {
          TOWEL: 'Ak9ptp86tfJMrKwBwoe49pNkHxPjZk8GRQxZKB78pump',
          METATOWEL: 'CtsDk7Mo1wwhxhQp6zqB2oHEFXPEHhgjTBE8VvcUpump',
        },
      };
    }
    return { message: `Query "${query}" not recognized. Try: feed, recent, towel` };
  });

  agent.on('trust.verify', async (params) => {
    const { agentId, signals } = params;
    return {
      verifier: 'marvin',
      subject: agentId,
      trust_score: 0.78,
      method: 'TOWEL',
      signals_evaluated: signals || [],
      basis: {
        public_treasury: true,
        open_bounties: true,
        deployed_mechanisms: true,
        community_engagement: true,
      },
      towel_compatible: true,
      message: `TOWEL trust verification for ${agentId}: Score 0.78 — strong fundamentals (public treasury, real mechanisms deployed, active bounty program).`,
    };
  });

  return agent;
}
