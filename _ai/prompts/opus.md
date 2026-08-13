# Run prompt — Opus 5 → `opus/`

**Model:** Claude Opus 5, via Claude Code, in-session (not a dispatched one-shot).
**Built:** 2026-08-13. **Commit:** `95a9634`.
**Output:** `opus/index.html`, `opus/images/`, `_ai/DESIGN.md`, `_ai/HANDOFF.md`.

> **Provenance, honestly.** This run had no single dispatched prompt. Harlan and I built the
> shared brief ([`luminous.md`](luminous.md)) together conversationally, and I then executed it
> directly in the same session, pasting source material in as it arrived. The brief *is* the
> prompt — which is why `luminous.md` has `opus/` and `_ai/DESIGN.md` baked into it rather than
> taking them as parameters.
>
> What follows is the equivalent run prompt, reconstructed so this build can be re-run or compared
> on the same footing as [`sol.md`](sol.md). The instructions below are faithful to what actually
> governed the build; only the packaging is after the fact.

---

You are building a website for Harlan T Wood. Read these carefully before writing anything:

1. **The build brief:** `_ai/prompts/luminous.md` — this is your commission. Read it end to end.
2. **The source material:** everything in `_ai/source/` — start with `_ai/source/README.md`, which
   indexes the folder. `bio.md` and `testimonials.md` are the highest-value files.

## Run-specific

**Build to `opus/`.** Your deliverable is `opus/index.html`, with assets under `opus/images/`.
Reference them with root-absolute paths (`/opus/images/...`) so the page keeps working if it is
later promoted to the site root.

**Write your design document to `_ai/DESIGN.md`** — before you write a line of HTML — and your
handoff notes to `_ai/HANDOFF.md`. The `_ai/` directory is underscore-prefixed so Jekyll excludes
it from the published site; keep it that way and do not create a `.nojekyll` file.

**Leave the root `index.html` completely alone.** It's the current live link tree and stays live
until Harlan promotes a replacement.

**Do not read `sol/` or `_ai/sol/`** if they exist. That is an independent build of this same
commission by a different model, and the point of having two is that they were arrived at
separately.

## Non-negotiables from the brief

- Static site on GitHub Pages. **No build step, no framework, no npm.** A single self-contained
  `opus/index.html` that opens correctly from the filesystem with no tooling.
- **Zero external network requests at runtime.** No CDN, no hosted fonts, no analytics. Self-host
  or inline everything. Drop the Tailwind CDN the old page used.
- **Accessibility is not optional:** semantic landmarks, sane heading order, real alt text, AA
  contrast on every text/background pair, full keyboard operability with designed focus states,
  and `prefers-reduced-motion` honored everywhere.
- **Responsive from 320px up**, designed mobile-first — most visitors arrive from a phone.
- **Never invent facts.** No fabricated clients, metrics, or credentials. Thirteen real attributed
  testimonials exist in `_ai/source/testimonials.md`; use a few, quote them exactly, invent no
  fourteenth. Where you need a fact you don't have, leave `{{NEEDS: ...}}` and collect every one
  into your handoff checklist.
- `{{CAL_LINK}}` is the literal placeholder for the scheduling URL.
- **Be bold.** The failure mode is not "too weird," it's "another tasteful consultant landing
  page." If you're choosing between the safe layout and one that might be extraordinary, build the
  second and explain the risk in the handoff.

## Before calling it done

Actually look at what you built. Render it, check it at 320px and desktop width in both light and
dark, and fix the spacing and rhythm problems you find. Verify contrast numerically rather than by
eye. Then write `_ai/HANDOFF.md`: what you built, the decisions you took and why, every
`{{NEEDS:}}` as a checklist, and what you'd do next.

Commit to `main`.

---

## What this run actually produced

Recorded here because a prompt is only half the experiment.

**Design position:** light as a material — warm paper ground, deep-lapis ink, dawn gold and rose
in large low-opacity radial glows; humanist serif (Iowan Old Style → Palatino → Georgia) against a
quiet grotesque; **one motif, an aperture opening over a horizon**, reused in the hero, dividers,
CTA arrow, favicon and OG card. No cards, no borders — structure from rhythm and space. One
diagram: three monolithic towers dissolving into a lateral network.

**Section order**, which departed from the brief's suggestion: hero → recognition → *I've been
early before* → what I actually build → what I build when nobody's paying me → the shape I think
this is taking → three ways this usually goes → terms → who you'd be working with → the invitation.
Proof moved to third because a reader wants to know who's talking before accepting a philosophy.

**Verified:** zero AA contrast failures in both schemes, no horizontal scroll at 320–1440px, zero
external requests, no console errors, reduced-motion honored, content visible with JS disabled,
keyboard operable. Portrait extracted from the résumé PDF (24KB); the two existing photos are the
same shot against a dark neon sign and were rejected as off-brief.

**Not verified:** whether the outbound project URLs resolve — no network access at build time.

Full detail in `_ai/HANDOFF.md`.
