# Part 2 — AI Product Proposal

## AKO Opportunity Guide

AKO Opportunity Guide would help young people and their trusted adults find relevant, verified learning and development opportunities. Opportunities are scattered, eligibility can be easy to miss, and families may not know which next step applies.

A user journey would begin with an interest prompt, such as design, digital skills, or leadership, followed by an age band and filters such as location, accessibility needs, or transport support. The tool would search an AKO-reviewed directory and return matched opportunities with source links, eligibility summaries, dates last checked, and a plain-language explanation. An AI assistant would answer follow-up questions only from the approved records.

The technology would be a responsive Next.js product with a manually curated opportunity dataset and a server-side retrieval layer. A model such as OpenAI GPT-4.1 mini could generate concise summaries and answer clarifying questions, but the system would be built around retrieval-first architecture so that every answer is tied to a verified record. The model would not invent opportunities, recommend unsuitable options, or decide eligibility independently. Every result would link to its original source; a no-match response would explain that clearly and offer a human contact only if AKO supplies a verified route.

For a first working version, AKO staff would approve a small dataset of opportunities and keep it current. The interface would show update dates, explain when information may be outdated, and surface the limits of the system. Risks include stale listings, inaccurate summaries, privacy exposure, and inappropriate advice to minors. Safeguards would include no collection of names or sensitive personal details, minimal logging with expiry, adult-support guidance, and clear wording that the service is informational rather than a guarantee. The product should launch only after safeguarding, data retention, and review processes are agreed.
