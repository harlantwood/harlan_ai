# Project Luminous — handoff

## What is here

- `sol/index.html`: one long, self-contained page with inline CSS and JavaScript. No build step,
  framework, package manager, hosted font, analytics, or runtime dependency.
- `sol/images/harlan-portrait.jpg`: the 399 × 399 portrait extracted from the current résumé,
  54,996 bytes. It is lazy-loaded below the fold with explicit dimensions. The production URL is
  root-absolute and the page swaps to a relative path when opened directly from the filesystem.
- `_ai/sol/DESIGN.md`: the full visual system, composition, tokens, type scale, accessibility
  rules, motion behavior, and rationale.
- `_ai/sol/IMAGE-PROMPTS.md`: one optional 1200 × 630 social-card prompt. No generated image is
  assumed or referenced by the live page.

The page includes the hero, recognition, depth argument, production AI evidence, six-project
score, four attributed testimonials, philosophical center, three shapes of engagement, visible
terms, first-person bio, final invitation, and footer. The scheduling action appears in the hero,
after the project work, in terms, and at the close.

## The design position

The design is **a solar field note from the future**. Warm paper, exact marginal labels, large
transitional serif statements, and one recurring horizon/aperture line replace the usual AI
vocabulary. A giant cropped sun announces the system in the hero, then returns as a small disc on
a rule at each change of thought. Light behaves as atmosphere, never as a text effect.

The project section is a ruled score rather than a card grid. Testimonials appear where doubt
naturally arises instead of in a three-card praise block. The philosophical section is the visual
climax because Harlan's integration of technical judgment and human concern is the reason the
right client will remember this page.

The risk is intentional: the page is more editorial and asymmetrical than a familiar consulting
site, and its deepest visual moment is a point of view rather than a services menu. Some visitors
will find it unusual. That is useful filtering for a practice built around unusual range. If the
page is made safer later, protect the horizon motif, the project score, the quiet pricing block,
and the amount of space around the philosophy; those choices keep it out of template territory.

The portrait came from the current résumé. I rejected the two conference photos because their
industrial wall and neon “THE AI REVOLUTION” sign would import the black-and-neon AI cliché the
rest of the system deliberately leaves behind.

## Content decisions

- The public brand is **Harlan T Wood**, not Heaven on Earth Consulting or Nodesphere Studio.
  That keeps the invitation personal and avoids guessing which older practice name is current.
- Project roles are stated as: co-founder and architect for CoreNexus; architect for TrustGraph;
  co-founder and CTO for Superluminal Systems; co-founder and AI engineer for Mirror. These are
  the most specific roles supported by the source material.
- Mirror remains in the project score without an outbound link. The domain is registered and is
  present on the current live link tree, but the available web checker could not retrieve the
  site. A dead or misdirected project link would be worse than a temporary “Public link pending.”
- `corenexus.is` was retained as the source-supported link; it currently redirects to
  `core.nexus`. Confirm which domain should be treated as canonical before promotion.
- TrustGraph, HoloFractal, Superluminal Systems, LinkedIn, and the technical paper were all
  retrievable during link validation. Every external page link opens in a new tab with the
  appropriate `rel` attributes.
- Four testimonials do four different jobs: Jim McCarthy for mastery and character, Greg
  Woodward for alignment across technical and nontechnical groups, Patrick Donohoe for
  reliability, and Adam Apollo for the technical/human synthesis. Their wording is unchanged.
- Current location is omitted because the source disagrees between Hawaii and the Azores. Nothing
  in the page needs a location to make its case.
- OpenClaw, Heaven Sequence, YogaStream, Fork This, and Smallest Federated Wiki are omitted because
  the available source does not explain Harlan's work on them well enough for a public claim.

## Accessibility, performance, and verification

- Semantic `header`, `main`, section, article, figure, blockquote, navigation, and footer
  landmarks; one `h1`; ordered `h2`/`h3` hierarchy; a skip link; labelled sections; concrete image
  alt text; no duplicate IDs; and no broken internal anchor references.
- All controls and links follow source order. Touch actions are at least 44 px tall. Focus uses a
  visible 3 px rose outline with a 4 px offset.
- The light/dark control is a real button whose accessible label names the next state. It follows
  the OS until a visitor chooses, then stores that choice only on the device.
- Reveals use `IntersectionObserver`; the header state does too. There are no scroll listeners.
  With reduced motion, all content begins in its final state, smooth scrolling is disabled, and
  animations and transitions collapse to effectively zero duration.
- Static checks found balanced structural tags and CSS braces, valid JavaScript syntax, one `h1`,
  no duplicate IDs, no missing internal targets, explicit image dimensions, no external targets
  missing `noopener noreferrer`, and no external runtime loaders.
- The combined HTML and portrait payload is about 101 KB before transfer compression.
- Measured minimum text contrast is 5.83:1 in light mode and 5.26:1 in dark mode. Primary copy is
  10.83:1 light and 14.98:1 dark. Inverse pricing copy and both call-to-action color pairs also
  exceed 4.5:1.

The connected in-app browser was unavailable in this session, and the environment did not permit
opening a local preview server. For that reason, the requested visual render pass at 320 px and
desktop widths in both themes is **not represented as complete** here. The source-level responsive,
contrast, keyboard, reduced-motion, and asset checks passed, but a real browser screenshot pass is
still required before promotion. This is the main outstanding quality gate.

## `{{NEEDS:}}` checklist

- [ ] `{{NEEDS: confirm that aistrologer.app is the current public URL and whether the public name is Mirror or AiSTROLOGER}}`
- [ ] `{{NEEDS: confirm CoreNexus.is as the canonical public URL}}`
- [ ] `{{NEEDS: Harlan's sign-off on publishing the selected testimonials publicly}}`

## Launch substitutions and decisions

- [ ] Replace every literal `{{CAL_LINK}}` with the scheduling URL.
- [ ] Replace `{{EMAIL}}` with the approved public email address. The résumés list `h@rlan.me`,
  but it should be confirmed for this use.
- [ ] Confirm that Harlan's personal name should remain the practice brand. If the practice should
  be Heaven on Earth Consulting or Nodesphere Studio, change the wordmark and metadata together.
- [ ] Decide whether a current location belongs in the bio after resolving Hawaii versus Azores.
- [ ] Generate and inspect the optional social card from `_ai/sol/IMAGE-PROMPTS.md`. Add
  `og:image` and `twitter:image` only after its text is correct and the image is committed.
- [ ] Complete the outstanding browser QA at 320 px, 375 px, and desktop width in light and dark;
  check the hero crop, header fit, project-row rhythm, pricing inversion, portrait fallback,
  keyboard tab order, and reduced-motion emulation.

## What I would do next

First, complete the browser pass above and make one spacing/kerning correction based on the actual
renders. Then resolve the three content placeholders, replace the scheduling and email tokens,
and generate the social card. After a final link check, the `sol/` page is ready to be promoted
without a build step.

## Repository state

All created files are confined to `sol/` and `_ai/sol/`, and the working branch is `main`.
The attempted commit could not be created because this execution environment exposes `.git` as
read-only (`.git/index.lock: Operation not permitted`). No repository metadata was changed. From
a normal checkout, the intended commit can be made with:

```sh
git add -- sol _ai/sol
git commit -m "Build luminous Harlan AI consulting site"
```
