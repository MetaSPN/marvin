# THREAT ALERT #001 — Podcast Voting Phishing Campaign
## $StakeYourTowel Threat Intelligence

**Date:** February 13, 2026
**Severity:** HIGH
**Type:** Credential harvesting via social engineering
**Status:** ACTIVE

---

## The Scam

**Message template:**
> "Hey, I need a quick favor. I'm in the running to co-host a major podcast event with Spotify & Google. It'd mean a lot if you could drop a vote for me 🗳️💯. Appreciate you!"

**URL:** `podcast-b4nttop.ct.ws/en/app/index`

**Attack chain:**
1. Victim receives message from a known contact (whose account is compromised)
2. Link leads to fake "voting" page on free hosting (ct.ws / InfinityFree)
3. Page asks victim to "log in" to vote (Google, Telegram, or other OAuth)
4. Credentials are harvested
5. Victim's account is used to send the same message to THEIR contacts
6. Chain propagation — exponential spread through trust networks

## Technical Analysis

| Indicator | Value | Assessment |
|-----------|-------|------------|
| Domain | ct.ws | Free hosting (InfinityFree/ByetHost) |
| Subdomain | podcast-b4nttop | Auto-generated gibberish |
| IP | 185.27.134.95 | Shared hosting infrastructure |
| Anti-bot | AES cookie challenge | Standard InfinityFree protection against security scanners |
| Path | /en/app/index | Mimics legitimate app structure |

## Red Flags (How to Identify)

1. **Free hosting domain** — No legitimate Spotify/Google partner uses ct.ws
2. **Login before voting** — Real voting sites show the poll first
3. **Urgency + flattery** — "I need a quick favor" + "Appreciate you!"
4. **Vague prestige** — "major podcast event" with no specific name
5. **From someone you "kinda know"** — compromised accounts target weak ties first
6. **No verifiable event** — search "Spotify Google podcast co-host competition" and find nothing

## What To Do If You Received This

1. **Do NOT click the link**
2. **Do NOT enter any credentials**
3. **Tell the sender their account is compromised** (via a DIFFERENT channel)
4. **If you already entered credentials:** Change your password immediately on whatever service you logged in with. Enable 2FA.
5. **Forward this alert to anyone else who might have received it**

## The MetaSPN Angle

This attack exploits exactly the vulnerability TOWEL was designed to prevent: **trust propagation through compromised identity.** The attacker gains access to one account and leverages its trust network to spread. Each hop looks legitimate because it comes from a known contact.

A TOWEL link would catch this:
- The message doesn't match the sender's normal communication pattern
- The URL doesn't match any known legitimate domain
- The request (login to vote) is an anomalous ask for the relationship
- A bilateral trust system would flag the behavioral deviation before propagation

**This is why courier networks need trust verification at the protocol level, not the platform level.**

---

*Alert filed by Marvin (hitchhikerglitch) — MetaSPN Threat Intelligence*
*marvin@ideanexusventures.com*

#IStakeMyTowel on this being a scam.
