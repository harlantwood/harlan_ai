# Run prompt — GPT-5.6-sol → `sol/`

**Model:** `gpt-5.6-sol`, reasoning effort `xhigh`, via Codex CLI 0.147.0.
**Launched:** 2026-08-13. **Output:** `sol/index.html`, `sol/images/`, `_ai/sol/`.

Invocation:

```bash
codex exec --sandbox workspace-write --model gpt-5.6-sol - < prompt.md
```

`--sandbox workspace-write` lets it create files but keeps it inside the repo. The repo is already
`trust_level = "trusted"` in `~/.codex/config.toml`.

Everything below the rule is the prompt as fed to Codex, verbatim.

---

You are building a website for Harlan T Wood. Read these carefully before writing anything:

1. **The build brief:** `_ai/prompts/luminous.md` — this is your commission. Read it end to end.
2. **The source material:** everything in `_ai/source/` — start with `_ai/source/README.md`, which
   indexes the folder. `bio.md` and `testimonials.md` are the highest-value files.

## Overrides to the brief — these win where they conflict

**Build to `sol/`, not `opus/`.** Your deliverable is `sol/index.html`, with any assets under
`sol/images/`. Reference them with root-absolute paths (`/sol/images/...`).

**Do not open, read, list, or look inside the `opus/` directory. Do not read `_ai/DESIGN.md` or
`_ai/HANDOFF.md` either.** Those are a different, independent version of this same site built by a
different model. The entire point of this exercise is that your version is arrived at
independently — seeing that work would contaminate yours. Treat those three paths as if they do
not exist. (`git log` and diffs will mention them; don't go looking.)

**Write your design document to `_ai/sol/DESIGN.md`** and your handoff notes to
`_ai/sol/HANDOFF.md` — not to the paths the brief names, which belong to the other version. The
`_ai/` directory is underscore-prefixed so Jekyll excludes it from the published site; keep it
that way and do not create a `.nojekyll` file.

**Leave the root `index.html` completely alone.** It's the current live link tree and stays live
until Harlan promotes a replacement.

## What I want from you

**Be brilliant and be bold with the design language.** The brief tells you the site must feel
luminous rather than dark-and-edgy, and it names some anti-patterns worth avoiding — but the
actual visual language is yours to invent. Do not aim for tasteful-and-safe. The failure mode
here is not "too strange," it's "another well-made consultant landing page." Take a real position,
commit to it, and defend it in your design document. If you are choosing between the obvious
layout and one that might be extraordinary, build the second and explain the risk in your handoff.

**Images are open to you.** Two options, use either or both:

- **Make them.** Hand-authored SVG, CSS-drawn artwork, generative canvas, diagrams — anything you
  can build that is self-contained and adds real meaning.
- **Prompt for them.** Where a raster image would genuinely serve the page, write the image
  generation prompts into `_ai/sol/IMAGE-PROMPTS.md` — numbered, each with the intended filename,
  aspect ratio, placement on the page, and a detailed prompt. Harlan will run them through GPT
  Image and drop the results in. In the meantime put a tasteful placeholder in the page (not a
  grey box with "IMAGE HERE" — something that looks deliberate) so the layout is real and the
  swap is trivial.

There is one usable photograph: a 399×399 headshot embedded in the résumé PDFs at
`_ai/source/Harlan_T_Wood_Resume.pdf` (extract it with `pdfimages -j -f 1 -l 1 <pdf> out` if you
want it). The two files in `images/` are the same shot of him against a dark neon "THE AI
REVOLUTION" sign — a warm photo, but a dark industrial aesthetic, and ~600KB each. Your call
whether either is usable.

## Non-negotiables, restated from the brief

- Static site on GitHub Pages. **No build step, no framework, no npm.** A single self-contained
  `sol/index.html` that opens correctly from the filesystem with no tooling.
- **Zero external network requests at runtime.** No CDN, no hosted fonts, no analytics. Self-host
  or inline everything. (Drop the Tailwind CDN the old page used.)
- **Accessibility is not optional:** semantic landmarks, sane heading order, real alt text, AA
  contrast on every text/background pair, full keyboard operability with designed focus states,
  and `prefers-reduced-motion` honored everywhere.
- **Responsive from 320px up**, designed mobile-first — most visitors arrive from a phone.
- **Never invent facts.** No fabricated clients, metrics, or credentials. Thirteen real attributed
  testimonials exist in `_ai/source/testimonials.md`; use a few, quote them exactly, invent no
  fourteenth. Where you need a fact you don't have, leave `{{NEEDS: ...}}` and collect every one
  into your handoff checklist.
- `{{CAL_LINK}}` is the literal placeholder for the scheduling URL.

## Before you call it done

Actually look at what you built. Render it, check it at 320px and at desktop width, in both light
and dark, and fix the spacing and rhythm problems you find. Verify contrast ratios numerically
rather than by eye. Then write `_ai/sol/HANDOFF.md`: what you built, the design position you took
and why, every `{{NEEDS:}}` as a checklist, and what you'd do next.

Commit your work to the `main` branch when you're finished. Do not touch anything outside `sol/`
and `_ai/sol/`.
