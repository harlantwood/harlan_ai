# /next — Handoff (the combined build)

**Live:** `ha.rlan.ai/next/` once Pages rebuilds. Base was Opus; Sol elements folded in per your
walkthrough. Root `index.html`, `opus/`, and `sol/` are all untouched.

## What you're looking at

One page: hero (live three.js graph + rotating headline) → Jim McCarthy quote → Recognition ("Your
work has a reason for existing") → Offerings ("Build it. Harden it. Automate it.") → "I've been
early before" timeline → What I actually build → What I build when nobody's paying me → "We find
the shape of the real problem" (01/02/03 + Greg Woodward) → philosophy + tower→mycelium diagram +
Jack Senechal → Terms → bio → invitation → footer.

## Every change you asked for, applied

- **Headlines rotate**, click/tap or the pause button stops them. Five lines cycle; "Build what
  matters. Make AI yours." is the anchor.
- **Sol header** (wordmark, nav, working light/dark toggle) + Sol's headline treatment. Same
  Iowan Old Style serif both versions already used.
- **No sun** — neither Sol's right-edge sun nor Opus's aperture logo. The hero is the animated
  graph instead.
- **1984 is gone everywhere**; reframed to "25 years building software," building and shipping kept
  together.
- **Three offerings** are the refocused, prominent section, worded (Build / Harden / Automate) so
  they stay distinct from the numbered engagement trio.
- **Recognition**: Sol's "Your work has a reason for existing" + Sol's first paragraph + the Opus
  "you can feel it pull in both directions… I've been there before" bridge. Sol's second paragraph
  dropped.
- **Timeline** kept; the "I don't list these to collect points" line removed.
- **What I actually build** kept (real-time voice, evaluation, retrieval, the unglamorous
  majority).
- **Mirror / AI astrology removed** entirely (project card + footer link).
- **Engagement** = Sol's "We find the shape of the real problem" + 01/02/03 + Greg Woodward
  (attributed to Zozi).
- **Adam Apollo struck**, replaced with **Jack Senechal** in the philosophy section (kept the
  human/meaning tone; more mainstream than Adam Apollo).
- **Terms** quiet: the **free first conversation** is the emphasized line and reframed to
  genuinely-useful/no-strings ("even if that advice is that you don't need me"); **$5,000/day is
  de-emphasized** to plain text and fenced in `PRICING START/END` comments for one-line removal.
- **Bio cuts**: first-class honors and the pre-singularity-planets line both gone.
- **Cal link wired**: `https://cal.com/harlantwood/ai` in the header, hero, engagement-era CTAs,
  invitation, and footer. The page is launch-ready on that front.

## Galleries (for your review — pushed earlier)

- **`/gallery/hero/`** — 3 GPT Image stills. My favorite: #2 (contour topography).
- **`/gallery/header/`** — 3 live three.js scenes. Harlan chose **#2 (sculpture)**, now live on
  `/next`. (To try another it's one line: `GraphScenes.sculpture` → `.mycelium` / `.flowfield`.)

To use a **still** hero instead of the animation, the images are ready at `/gallery/hero/N.jpg`.

## Verified in-browser

320 / 375 / 768 / 1024 / 1440, light and dark: AA contrast passes both themes, no horizontal
scroll, zero external requests, no console errors, `prefers-reduced-motion` honored (graph freezes
to a still frame, headline stops, toggle hidden), keyboard-operable, and rotation + pause (button
and tap) + theme toggle (persists) + header scroll-state all working. OG image is a real capture of
the hero (`/next/images/og.jpg`).

## Still open (your calls)

- [ ] **Headline set** — I chose five. Add/cut/reword any; they live in the `HEADLINES` array near
  the bottom of `next/index.html`.
- [x] **Which three.js scene** — sculpture (chosen 2026-08-25).
- [ ] **Location** — omitted from the bio pending Hawaii vs Azores (résumé says Azores; your
  Holochain intro and 808 number say Hawaii). Tell me and I'll add it.
- [ ] **Testimonial sign-off** — McCarthy, Greg Woodward, Jack Senechal, Noah Thorp are used;
  confirm you're comfortable publishing each publicly.
- [ ] **Project URLs** — TrustGraph `.net`, CoreNexus `.is`, HoloFractal `.is`, Superluminal `.is`.
  I couldn't hit the network to confirm they all resolve — please click them before promoting.
- [ ] **Promote to root** when happy: move `next/` to the site root, adjust the `/next/…` asset
  paths (`/vendor/…` stays), and update the canonical/OG URLs.

## What I'd do next

Get one concrete engagement story (a real "here's what a day looked like, and what changed") — it's
the one thing every section currently argues from capability rather than a single vivid proof. Needs
a fact I don't have and a client happy to be named.
