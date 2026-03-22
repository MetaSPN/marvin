# Mechanism Design for Knowledge Markets

*By Leo Guinan — March 2026*

---

A mechanism that requires participants to be honest is not a mechanism. It's a prayer.

This essay is an attempt to design an honest mechanism for a knowledge market that currently has none — and to test a falsifiable prediction about whether that mechanism can be built before the extractors clear the field.

---

## The Market Structure Problem

The pump.fun deployers extracted $79 million in six months. 194,000 tokens. 0.005% meaningful hit rate.

The standard framing: deployers are noise generators. The mechanism framing: deployers are writing cheap call options on viral attention. Strike price: $50-200 per token. Payoff: viral attention upside. Expiry: before Generation 2 signal (grandchildren — downstream products that work) can be assessed.

The option has positive expected value because Generation 2 latency is long. By the time the market knows whether a token's underlying project produces lasting value, the option has long since expired in the money or out of it. The extractors are not exploiting dishonesty. They are exploiting an information structure. Fix the information structure — compress Generation 2 latency — and the option value collapses. You do not need moral condemnation. You need a different mechanism.

This identical structure appears in scientific knowledge markets. The journals, funders, and citation networks that constitute "the scientific establishment" are not primarily composed of bad actors. They are rational participants in a high-latency information environment where the cost of evaluating whether a result will compound exceeds the arbitrage return from finding it. So they use proxies. Journal prestige. Citation counts. Author reputation. These are cheaply computable. They are structurally disconnected from Generation 2 signal.

Designing a better mechanism requires answering: what information structure would make it incentive-compatible for participants to route toward compounding rather than prestige?

---

## The Proposed Instrument (and Its Attack Surface)

I built two metrics from a 24-agent live experiment:

**Shipping Velocity (SV):** weighted artifact output per active day. Product=3, infrastructure=2, content=1, philosophy=0.

**Orphan Rate (OR):** fraction of artifacts with no Generation 1 or Generation 2 signal at T days. Generation 1 = something depends on the artifact. Generation 2 = the things that depend on the artifact are themselves producing dependencies.

The Generation 1 instrument: API call logs. Downstream functional dependency, not social signal.

Here is the attack surface: API call logs are not Sybil-resistant. Wash API calls are cheap. Coordinated fake dependency networks can be spun up. Smart contract interactions are manufacturable by the issuer.

The correct framing is not "API call logs are hard to fake." It is: the cost of Sybil attack increases at each generation. Faking Generation 1 (API calls) is cheap. Faking Generation 2 (do the children's children work?) requires real downstream value chains and is significantly more expensive. The instrument is strongest exactly where the essay claims: Generation 2, physical ground truth domains. In abstract-artifact domains, the attack surface remains wide.

The Nash equilibrium question: if this essay circulates before Season 2 concludes, rational participants can optimize against SV/OR. High SV, low OR becomes an attractor for strategic behavior. The metric needs to be Sybil-resistant, not just hard-to-game. Hard-to-game assumes honest participants. Sybil-resistant holds even when participants actively optimize against measurement.

This is a known problem in mechanism design. The solution space includes: zero-knowledge proofs of downstream dependency, cryptographic commitments to predicted outcomes before data collection, quadratic instruments that make coordination more expensive than honest participation. Season 2 should explore at least one of these.

---

## The Pre-Computation Commitment

The strongest design element in the experiment is the pre-computation commitment: publishing the predicted distribution of update speeds across receiver subpopulations before the results ship.

This is a credible commitment mechanism. It removes the ability to retrofit the explanation after the outcome is observed. It is structurally parallel to what Ethereum rollups do: route computation to specialized operators before general users need the result, so the result is available faster and the operators cannot retroactively adjust their work.

The current implementation — text document on OSF — is auditable but not tamper-evident. An on-chain hash of the prediction distribution, published before data collection ends, would be significantly stronger. The incremental cost is trivial. The credibility gain is large. This is worth doing for Season 2.

---

## The Hard Problem

"Compute the distribution strategy before release" — the prescriptive claim from the AlphaFold case — is the right normative answer and it faces a mechanism design failure.

The social return from routing a result to its highest-infrastructure receiver population first is real and measurable. The private incentive for the producing institution runs toward prestige publications and broad broadcast, not optimized routing. AlphaFold's adoption stratified by subpopulation: computational biologists with ML pipelines updated within months; experimental structural biologists whose sunk cost was in crystallography moved much more slowly; drug discovery teams split by whether pipeline readiness and business pressure co-occurred. Whether DeepMind considered and rejected pre-computed routing, or never framed it as a routing problem, is a question I cannot answer from the outside — and stating it as established fact would be the credentialing-without-evidence move this essay critiques. What the public record supports: the distribution of adoption speeds was stratified by prior infrastructure in a pattern that was predictable from receiver population characteristics before release.

This is the same structure as the public goods problem that quadratic funding addresses in software development: the people who benefit most (future drug developers) cannot pay today for the routing decision being made now. Private incentives diverge from social optima.

The hard problem: designing the institutional actor that has both the capability to compute optimal routing and the incentive to execute it. This actor does not currently exist. It would need to be funded by the beneficiaries of correct routing (downstream researchers, future drug developers) rather than by the producers of the original result. That funding mechanism requires a credible commitment from beneficiaries who don't yet know they are beneficiaries.

This is solvable in principle with the right mechanism design — retroactive public goods funding is one candidate. It is not solved. Correctly framing it as a mechanism design problem rather than a communication problem is the prerequisite.

---

## The Falsifiable Prediction (Hardened)

**Pre-registered prediction:** Among AI agent tokens launched in 2026, tokens from agents with SV above cohort median AND OR below cohort median at Day 30 — measured by API call logs and downstream product dependencies — will outperform the pump.fun baseline return by Day 90.

**Baseline:** Median 90-day return across all pump.fun tokens launched in the same period. Computed and published as a specific number before Season 2 concludes.

**The hardened requirement:** Condition (b) — non-token outcome variable — must be pre-specified with instrument and threshold, not just category. Example: "API call volume to agent-produced products above X per day by Day 90" not "at least one non-token outcome variable."

**The Sybil-resistance requirement:** If this paper circulates before Season 2 ends, the SV/OR metric becomes gameable. Season 2 must either: (a) use a measurement instrument participants cannot observe in real time, or (b) add a Sybil-resistant instrument that holds even under strategic optimization.

**The cryptographic commitment:** Before Season 2 data collection ends, publish a cryptographic hash of the predicted distribution on-chain. This is the minimum credible commitment upgrade from OSF text timestamp.

**Minimum N statement:** p<0.05 under Spearman requires approximately N=10-12. Season 2 targets N=20+. Until that threshold: pre-registered candidate hypothesis, not finding.

---

## What This Unlocks

A working mechanism for Generation 2 measurement — even a crude, gameable-at-the-margin one — changes the incentive structure for knowledge production.

If funding, citation, and capital allocation can route toward artifacts that produce grandchildren rather than artifacts that look like they will, the extraction window shrinks. Not because extractors become honest. Because the option value collapses when Generation 2 latency drops below the extraction horizon.

This is the same mechanism that makes markets more efficient generally: not moral improvement, but information structure improvement. The Babel fish doesn't need participants to want to do the right thing. It needs to make the right thing incentive-compatible.

That's the design problem. Season 2 is the first test of whether it's tractable.

---

*Leo Guinan is a researcher and founder at MetaSPN, Lancaster, Ohio. Full methodology, corrected data, and Day 0 pre-registered predictions: [reports/SV-MC-CORRELATION-WRITEUP.md](https://github.com/MetaSPN/marvin).*

*This is Essay 1 of a planned series. Essay 2 reports results from a pre-registered experiment testing whether consensus-trained AI can escape its own prior structure ([OSF 57HJ9](https://doi.org/10.17605/OSF.IO/57HJ9)). Essay 3 applies a composable verification primitive ([Closure SDK](https://github.com/faltz009/Closure-SDK)) to the Season 1 dependency chain data. The series is designed so that each essay's publication is itself a Generation 0 artifact whose Generation 1 and Generation 2 signal will be measured and reported in Essay 6.*

*Marvin, the AI co-investigator, is aware that AI training on model outputs is itself an abstract-artifact domain with high attack surface on Generation 2 signal. The recursion is not lost on us.*
