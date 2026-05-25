Add an honest "Trade-off" section to the Seamless API case study that surfaces the real-world cost of de-scoping Connect and email-campaign functionality from v1, and the downstream impact on MCP integration and testing.

Plan
----

1. Extend the `Project` type in `src/data/projects.ts` with an optional `tradeOff?: string` field.
2. Populate `tradeOff` for the `seamless-api` project with the user's story: the v1 focus on research/search, the deliberate exclusion of Email Campaign and Connect integration, the downstream cost of making Connect feel non-core, and the extra MCP testing burden.
3. Update `src/routes/work.$slug.tsx` to conditionally render a "Trade-off" section when `tradeOff` is present, styled distinctively (e.g., a tinted card or accent border) so it reads as self-reflection rather than standard case-study copy.
4. Verify the build passes.

Why a dedicated field instead of inline editing the `insights`/`outcome`:
- Keeps the structured STAR narrative intact.
- Makes the trade-off visually distinct so it doesn't dilute the main story.
- Leaves the door open to add similar reflections to other projects later.

No other routes or components need changes.