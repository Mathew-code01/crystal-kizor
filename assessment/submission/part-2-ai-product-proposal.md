# Part 2 — AI Product Proposal

## AKO Opportunity Guide

AKO Opportunity Guide would help young people and their trusted adults find relevant, verified learning and development opportunities. Opportunities are scattered, eligibility can be easy to miss, and families may not know which next step applies.

A user would choose broad interests and an age band, then use optional filters such as location and access needs. The guide would search a small AKO-reviewed directory and return matched opportunities with source links, eligibility summaries, dates last checked, and a plain-language explanation. An AI assistant could answer follow-up questions only from those approved records.

For a first version, build a responsive Next.js directory with a small, manually curated dataset and a server-side retrieval layer. Use an API model such as OpenAI GPT-4.1 mini for concise, low-latency summaries of retrieved records; it must not invent opportunities or determine eligibility. Every result must link to its source; a no-match response should say so and offer human contact only if AKO supplies a verified route.

Risks include stale listings, inaccurate summaries, privacy exposure, and inappropriate advice to minors. AKO staff should approve records and review corrections; show update dates and uncertainty; collect no names, precise birth dates, or sensitive histories; minimize and expire logs; and make clear that results are informational, not a guarantee. Do not launch until safeguarding, data retention, and adult-support processes are agreed.
