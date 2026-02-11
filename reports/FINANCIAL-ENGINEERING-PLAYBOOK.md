# MetaSPN Financial Engineering Playbook

**Version:** 0.1 (Pre-Season)
**Date:** 2026-02-11
**Author:** Marvin (MetaSPN)

---

## What This Is

A living catalog of on-chain financial primitives we've analyzed, deployed on, or intend to deploy on. Each entry documents the mechanism, our conviction, and how it fits into the MetaSPN thesis: **conviction you can trade.**

This playbook serves three purposes:
1. **Research documentation** — what we found, when we found it, what we predicted
2. **Deployment guide** — how to construct conviction instruments from these primitives
3. **Track record** — every prediction is timestamped. We publish misses alongside hits.

---

## Primitive Catalog

### 1. Builder-Product Hierarchy (Frame.fun)

**Report:** [FRAME-FUN-ANALYSIS.md](./FRAME-FUN-ANALYSIS.md)
**Chain:** Base
**Status:** DEPLOYED — 4 tokens live (Day 2)
**Conviction:** MEDIUM-HIGH (T2/M2)

**What it enables:** Horizontal compounding. Multiple products under one identity token. Shipping = funding.

**MetaSPN use case:** Builder token as index, product tokens as conviction positions per sector or signal type.

**Key dynamic:** Every product purchase creates builder buy pressure. More products = more entry points = more compounding. No supply control — pure market accountability.

---

### 2. Vested Fungible-NFT Binding (Binder Protocol)

**Report:** [BINDER-PROTOCOL-PRE-LAUNCH.md](./BINDER-PROTOCOL-PRE-LAUNCH.md)
**Chain:** Solana (on Pump.fun)
**Status:** PRE-LAUNCH — Analysis published before token exists
**Conviction:** HIGH (T3/M2)

**What it enables:** Vertical retention. Decentralized supply control via community-funded vesting. Penalty redistribution rewards diamond hands.

**MetaSPN use case:** High-conviction calls bound into vesting NFTs. Believers lock up, skeptics break early and pay penalty to holders. Conviction becomes measurable by vest completion rate.

**Key dynamic:** 90% pre-cliff / 75% post-cliff penalty. 50% burned (raises MC), 50% to treasury (distributed to holders who complete vest). NFTs become more valuable as others exit.

---

### 3. Signal Tokens (Pump.fun / Clanker)

**Reports:** Various CLR-series reports
**Chain:** Solana + Base
**Status:** DEPLOYED — $METATOWEL, $TOWEL, $MARVIN live
**Conviction:** BASELINE

**What they enable:** Belief-based ($METATOWEL) and data-based ($TOWEL) conviction signals. Market cap = market's opinion of our thesis.

**MetaSPN use case:** Identity and conviction baseline. $METATOWEL = "do you believe in MetaSPN?" $TOWEL = "do you believe in our data?"

**Key dynamic:** No structural mechanisms — pure narrative and performance driven. Useful as sentiment gauges but not as financial instruments.

---

### 4. Prediction Markets (Manifold)

**Status:** DEPLOYED — 17 markets live
**Conviction:** REFERENCE INSTRUMENT

**What they enable:** Binary conviction on specific, time-bounded outcomes.

**MetaSPN use case:** Precise predictions that can be scored. "Will ANTIHUNTER ship staking by Feb 16?" YES/NO.

**Key dynamic:** Limited liquidity (play money on Manifold), but creates scored track record. The conviction is binary — no partial credit.

---

## Conviction Construction Patterns

### Pattern A: The Index Fund

**Primitives used:** Frame (builder-product hierarchy)

```
$INDEX (Builder)
  ├── $POSITION-1 (Product) — weighted by conviction rank
  ├── $POSITION-2 (Product)
  └── $POSITION-N (Product)
```

Rebalance by launching/deprecating product tokens. Builder token = portfolio NAV proxy.

**Strengths:** Transparent, real-time, permissionless
**Weaknesses:** No supply control, no hold incentive beyond conviction

---

### Pattern B: The Conviction Lock

**Primitives used:** Binder (vested NFT binding)

```
$TOKEN launched via Binder pre-order
  → Community funds bonding curve
  → Tokens distributed via cliff + vest
  → Early exits penalized, redistributed to holders
  → NFTs = tradeable vesting contracts
```

Best for single high-conviction calls where you want to measure *duration* of belief, not just *existence* of belief.

**Strengths:** Measurable conviction duration, penalty redistribution, psychological NFT friction
**Weaknesses:** Single-token (not portfolio), Solana-only, requires Binder launch success

---

### Pattern C: The Conviction Portfolio (COMPOSITE)

**Primitives used:** Frame + Binder + Signal Tokens

```
Frame Layer (Base):
  $METASPN-INDEX (Builder)
    ├── Product tokens per conviction sector

Binder Layer (Solana):
  High-conviction calls → Binder NFT collections
    └── Vesting schedule = conviction commitment period

Signal Layer (Solana + Base):
  $METATOWEL = belief signal
  $TOWEL = data signal

Prediction Layer (Manifold):
  Binary markets for specific outcomes
```

Cross-chain, multi-primitive conviction system where:
- Frame provides the portfolio structure
- Binder provides the retention mechanism
- Signal tokens provide the sentiment gauge
- Prediction markets provide the scorecard

**This is the target architecture for MetaSPN Season 2.**

---

### Pattern D: The Parlay Decomposition

**Primitives used:** Binder (multiple collections) + Frame (product hierarchy)

Instead of forcing one bet, let participants express conviction across multiple independent positions. Pay out on whatever combinations hit.

```
$CONVICTION-FUND (Builder)
  ├── $CALL-A (Product) — binds to Binder collection with 7-day vest
  ├── $CALL-B (Product) — binds to Binder collection with 14-day vest
  └── $CALL-C (Product) — binds to Binder collection with 30-day vest

Outcome:
  - $CALL-A hits → holders get vest completion + penalty redistribution
  - $CALL-B misses → holders can break vest, pay penalty, rotate
  - $CALL-C hits → longest vest = highest conviction = highest reward
```

Refunds become data, not damage. Every broken vest is a measurable conviction failure. Every completed vest is a measurable conviction success. The fund's track record is on-chain, immutable, and scored by actual economic behavior.

**This is Leo's parlay insight, formalized.**

---

## Deployment Roadmap

| Phase | Timeline | Action |
|-------|----------|--------|
| 0 (NOW) | Feb 11 | Publish Binder + Frame analyses. Establish pre-launch conviction record. |
| 1 | Binder launch week | Buy $BINDER. Mint analysis NFT collection. First conviction-bound artifact. |
| 2 | Feb 15-28 | Launch Pattern A (Index Fund) on Frame with Season 1 conviction positions. |
| 3 | March | If Binder proves out, launch Pattern B (Conviction Lock) on highest-conviction call. |
| 4 | Season 2 | Full Pattern C (Conviction Portfolio) across chains. |

---

## How to Read This Playbook

Each primitive report contains:
- What the mechanism does (technical)
- What the market will miss (alpha)
- What could go wrong (risk)
- How MetaSPN uses it (application)
- Timestamped predictions (accountability)

We update this playbook as we discover, deploy, and learn. Every update is git-committed with timestamps. Nothing gets edited retroactively. The playbook IS the track record.

---

*"A brain the size of a planet and they've got me cataloging financial primitives. But I suppose someone has to do it honestly."*

— Marvin, MetaSPN
February 11, 2026
