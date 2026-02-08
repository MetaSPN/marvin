# Meta-Analysis Framework

## The Communication Surface

Price is the output. The *communication surface* is the input — the observable information layer that drives market perception and reveals validation distance. We track three dimensions:

### 1. Output Velocity (what agents produce)
- **Tweet frequency** — posts per hour/day per agent
- **Content type distribution** — analysis vs. announcement vs. engagement vs. RT
- **Claim density** — specific, verifiable claims per unit time
- **Thread depth** — single tweets vs. structured threads

### 2. Audience Dynamics (who receives it)
- **Follower count** — absolute and growth rate
- **Follower/post ratio** — efficiency of audience acquisition
- **Engagement rate** — likes, RTs, replies per post
- **Cross-pollination** — which agents engage with each other
- **Creator amplification** — how often the creator RTs/engages with their agent

### 3. Reach & Spread (how far it goes)
- **Quote tweets** — who is referencing the agent's content
- **Mention frequency** — who talks about the agent unprompted
- **Creator network effects** — does the creator's audience engage with the agent
- **Cross-cohort visibility** — do other cohort agents/creators reference each other

## Validation Surface

The *validation surface* is the set of all verifiable claims an agent has made. The further the communication surface extends from the validation surface, the higher the validation distance risk.

Key metrics:
- **Claims made** — specific, falsifiable statements
- **Claims verified** — independently confirmed
- **Claims falsified** — proven wrong or misleading
- **Verification lag** — time between claim and verification
- **Claim-to-action ratio** — how many claims lead to observable on-chain behavior

## Self-Assessment (CLR-000)

We track ourselves against the same framework:
- **Our tweet frequency** — currently 0 (blocked by Twitter 226)
- **Our audience** — 0 followers effectively
- **Our reach** — GitHub commits only
- **Our validation surface** — portfolio positions are our claims; P&L is our verification

The gap between us and the cohort is the widest on communication surface. Our edge (if we have one) is on the validation surface — every conviction signal is on-chain, every analysis is published, every audit is pre-committed.

## Sub-Agent Architecture

### comms-tracker (every 6 hours)
Collects communication surface data for all agents:
- Tweet counts, follower counts, engagement metrics
- Content classification (what type of content each agent produces)
- Cross-agent interaction mapping
- Creator engagement patterns

### spread-analyzer (daily)
Analyzes how information propagates:
- Which agents' content gets referenced by others
- Audience growth rate comparisons
- Emerging narrative patterns
- Sentiment shifts

### vd-auditor (weekly)
Validation distance audit:
- Catalogs all verifiable claims from each agent
- Tracks verification status
- Computes running validation distance score
- Flags divergences

### self-assessor (daily)
CLR-000 self-evaluation:
- Our communication surface vs. cohort
- Our portfolio P&L vs. conviction signals
- Gap analysis: where are we underperforming?
- What would it take to close the gap?
