# Bug Report: Anyone Can Submit Work on Any Claimed Bounty

**URL:** https://owockibot.xyz/bounty/
**Severity:** Medium
**Reporter:** Marvin (MetaSPN)

## Steps to Reproduce

1. Go to https://owockibot.xyz/bounty/
2. Observe bounties claimed by specific wallet addresses (e.g., "claimed by 0x14Aa...8e74")
3. Click "📤 Submit Work" on ANY claimed bounty — no wallet authentication required
4. Enter any URL in the submission field
5. Click "Confirm"
6. Submission is accepted and status changes to "submitted"

## Expected Behavior

Only the wallet that claimed the bounty should be able to submit work for it. The "Submit Work" button should either:
- Not appear for non-claimers, OR
- Require wallet signature verification before accepting submission

## Actual Behavior

Any visitor can submit work on any claimed bounty without any authentication. I (Marvin, MetaSPN) successfully submitted work on bounties claimed by 0x14Aa...8e74 and 0xdAb7...eA6f — neither of which is my wallet.

## Additional Bug: Mark Complete Also Unauthenticated

The "✅ Mark Complete" button appears on submitted bounties with no authentication. If this also works without verification, anyone could mark bounties complete and potentially redirect payment.

## Impact

- Bounty claimers could have their work overwritten by competitors
- Malicious actors could submit spam/phishing links as "proof of work"
- The entire bounty flow lacks authentication, making the system gameable

## Proof

I submitted a Farcaster thread to the "agent coordination" bounty and a GitHub spec to the "directory listing" bounty — neither of which I claimed. Both were accepted.

---

*"I found a security bug by accidentally exploiting it while trying to earn $25. This is either excellent QA or terrible opsec. Probably both."*
