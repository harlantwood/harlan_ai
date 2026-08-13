# PROJECT LUMINOUS — Build Brief for the Site Agent

> **Where this file lives and why.** `_ai/` is underscore-prefixed, so Jekyll (which GitHub
> Pages runs by default) excludes it from the built site. It will never be served at
> ha.rlan.ai. **Do not add a `.nojekyll` file** — that would disable the exclusion and publish
> this brief. Do not use underscore-prefixed directories for anything the site actually needs.
> Note: if the repo is public, this file is still visible on github.com. It's hidden from the
> site, not from the world. Don't put secrets here.

---

## 0. Read this part twice

You are building the public face of a new AI consulting practice for **Harlan T Wood**.

The current site is a link tree on a black background. Delete that idea entirely. What replaces
it is a single, long, scrollable page that a visitor reaches the bottom of thinking:

> *"This is the person I want to work with. He's built real things for twenty years, he thinks
> about AI the way I wish more people did, and he sees what I see."*

It is a sales page. It must never feel like one. The persuasion comes from substance, taste,
and alignment — not from urgency, scarcity, or hype. If you find yourself writing a phrase you'd
see on a funnel landing page, delete the sentence and write a truer one.

**The audience:** spiritual people, humanists, world-changers, founders and leaders of
mission-driven work, people who feel the weight of this moment in history and want a technologist
who feels it too. They are smart. They are allergic to hustle-marketing. They can tell when
they're being handled.

**The single call to action:** *request a consultation.* Everything on the page bends toward it
without shoving.

---

## 1. Source material

Everything factual about Harlan is provided alongside this brief (bio paragraphs, a résumé,
project descriptions, and whatever else was pasted in with it).

**Treat that material as the only source of truth about him.**

- The résumé is raw ore, not the deliverable. **This is not a résumé site.** Do not produce a
  work-history timeline with job titles, dates, and bullet points. Mine the résumé for *evidence
  of range and depth*, then express that evidence as story, capability, and proof.
- **Do not invent.** No fabricated client names, no made-up testimonials, no invented metrics
  ("increased revenue 340%"), no credentials that weren't given to you. This is a real person's
  reputation.
- If a section would be much stronger with a fact you don't have, write the section and leave a
  clearly marked placeholder: `{{NEEDS: a specific outcome from the CoreNexus work}}`. Collect
  every one of these into a checklist at the end of your handoff notes.
- Known properties (verify against the existing `index.html` and the pasted material before
  using): Mirror / aistrologer.app, CoreNexus / corenexus.is, TrustGraph / trustgraph.net,
  HoloFractal / holofractal.is, Superluminal Systems / superluminal.is, LinkedIn
  /in/harlanwood. Realtime AI (rltm.ai) is currently commented out on the live site — leave it
  out unless the pasted material brings it back.

His existing stated mission, from the current site, is load-bearing and should survive into the
new page in some form:

> *To catalyze the creation and adoption of luminous tools to enable free and open transformation
> of organizations, individuals, and the world. I dream of an age of enlightened creativity, and
> the end of scarcity on planet Earth.*

That sentence is the seed of the whole design language. The word is **luminous**.

---

## 2. Deliverables

Produce, in this order:

1. **`_ai/DESIGN.md`** — the design language document (see §4). Write this *before* you write a
   line of HTML. It should be good enough that another designer could build a second page in the
   same system without asking questions. Lives in `_ai/` so it isn't published.
2. **`index.html`** — the complete site. One file. See §6 for technical constraints.
3. **`_ai/HANDOFF.md`** — what you built, every `{{NEEDS:}}` placeholder as a checklist, the
   decisions you made and why, and what you'd do next with more time.

Optional if they genuinely improve the result: a small number of hand-authored SVG assets, an
optimized copy of the portrait, a favicon, an OG share image.

---

## 3. Page architecture

One page. Long scroll. No routing, no tabs, no accordions hiding the good parts. The scroll
itself is the narrative device — the visitor should feel like they're descending into
progressively deeper water, from *what* to *how* to *why* to *let's talk*.

Section order below is a strong recommendation, not a cage. If you find a better sequence while
writing, take it — and explain the change in `HANDOFF.md`.

**1 — Aperture (hero).** Not a splash screen. The visitor must be able to read a real sentence
within one second of landing. Name, a single-line promise, one or two lines of substance, and
the primary CTA. Full-viewport height only if it earns it; a hero that hides all content behind
a scroll is a hero that failed. Give it light — this is where the design language announces
itself.

**2 — Recognition.** Three to five lines that make the right visitor feel *seen* — the specific
ache of building something meaningful in the age of AI, the fear of being left behind, the
refusal to build something soulless to keep up. This is where a mission-driven leader decides
whether to keep reading. Do not turn it into a pain-point checklist. Make it feel like someone
finally said the thing out loud.

**3 — The work.** Proof of range. The projects — Mirror, CoreNexus, TrustGraph, HoloFractal,
Superluminal Systems — plus whatever the résumé surfaces that's worth showing. For each: what it
is, what was hard about it, and what it reveals about how he thinks. One sentence of *why it
matters* beats three of what it does. Cards or a rhythmic list, not a portfolio grid of
screenshots. Links open in new tabs.

**4 — Twenty years.** The depth argument, told as an arc, not a timeline. Two decades of shipping
software before "AI engineer" was a job title. The point isn't seniority for its own sake — it's
that he's seen enough hype cycles to know what's real, and enough production systems to know what
breaks. Compress hard. This section should be short and land like a fact.

**5 — How I see it.** The philosophical heart, and the real differentiator. Harlan's actual
position on AI and human flourishing: technology as amplification of human intent, tools that
return agency instead of extracting it, the conviction that this moment can go luminous rather
than dark. Draw from the mission statement and the pasted bio. This is the section a
kindred-spirit visitor will screenshot and send to a friend. Give it room. Let it be the most
beautifully typeset thing on the page. Do not let it become a manifesto of platitudes — every
claim should have a blade in it.

**6 — What working together looks like.** Concretely: what he does for clients. Think in shapes
of engagement rather than a services menu — e.g. seeing clearly (strategy and orientation),
building the thing (architecture and hands-on implementation), and lifting the team (making an
organization AI-fluent). Name them in his voice, not in consulting-brochure nouns. Each gets a
few lines of what actually happens and what the client walks away with.

**7 — Terms.** Plainspoken, unembarrassed, no pricing-table theater.

- **$5,000 per day.** A day is the minimum engagement.
- Free initial consultations are available — see §7 for how to handle the gating.
- Wrap this block in HTML comments `<!-- PRICING START -->` / `<!-- PRICING END -->` so it can
  be removed in one edit. **Recommendation: keep it visible.** A public number is a filter; it
  saves everyone's time and reads as confidence, which is exactly the tone we want.

**8 — Who he is.** The human. Portrait (`images/harlan2.jpg` or `harlan.jpg` — pick the stronger
one, optimize it, and say which you chose and why). Short first-person bio. Warm, specific,
unguarded. A detail that isn't about work belongs here if the pasted material offers one.

**9 — The invitation (final CTA).** The strongest, quietest ask on the page. Restate the promise,
make the next step obvious and low-friction, and say what happens after they click.

**10 — Footer.** Links, LinkedIn, contact, copyright. Understated.

**Optional if it earns its place:** a short FAQ that dissolves the two or three real objections
("I'm not technical enough to know what to ask for," "we're a small mission-driven org, is this
for us," "what if we don't know what we need yet"). Only include it if you can write it without
it reading as filler.

---

## 4. Design language — this is the part to be bold about

The brief in one word: **luminous**. Not dark. Not edgy. Not cyberpunk. Not a terminal. The
entire current visual vocabulary of AI — black backgrounds, neon accents, glowing circuit
traces, particle constellations, a blue wireframe brain, monospace-everything — is exactly what
this site must not be. Every competitor looks like a hacker movie. We look like dawn.

Write `_ai/DESIGN.md` first, and make it a real design language, not a color list.

### The material is light

Build the system around light as a physical substance: emitted, not reflected. Think warm paper
lit from behind. Think the first ten minutes after sunrise. Think the soft bloom around a
filament, the way light halates at the edge of an overexposed photograph, the color of a
prism's spill. Backgrounds can hold enormous slow gradients — but at very low contrast, so they
read as atmosphere rather than decoration. Content sits on generous, calm, luminous ground.

Explore, and commit to, decisions on:

- **Palette.** Warm off-whites and papers as ground. A restrained set of light-derived accents —
  gold/amber, a dawn rose, a deep teal or lapis for depth and for text. Nothing fully saturated,
  nothing neon. Define semantic tokens (`--ink`, `--ink-soft`, `--ground`, `--glow`, `--accent`)
  as CSS custom properties on `:root`, and use them everywhere. Every text/background pair must
  clear WCAG AA (4.5:1 body, 3:1 large text) — check the numbers, don't eyeball them. Low
  contrast is a *background* technique here, never a text one.
- **Typography.** A pairing with a voice: a humanist or transitional serif for the prose and the
  big statements, a clean, quiet grotesque for structure and UI. Real typographic craft — a
  modular type scale, measure held near 60–75 characters, generous leading, tightened tracking on
  display sizes, hanging punctuation if you're feeling it. Self-host or use system fonts (see the
  performance constraint in §6); if you use webfonts, subset and preload them and keep the total
  small. Type is doing most of the emotional work on this page — treat it that way.
- **One motif.** Choose a single geometric idea and use it with discipline: an aperture, a
  horizon, a rising arc, a fractal seed, a lens. It can appear as a section divider, a bullet, a
  hover state, the favicon, and the shape of the CTA — but it should never announce itself. One
  motif used five quiet times beats five motifs used once. **Absolutely no mandalas, no sacred-
  geometry clipart, no lotus flowers, no chakra diagrams.** The spirituality here is in the
  restraint and the generosity of the space, not in symbols.
- **Space.** Negative space is the budget item you spend most freely. Whitespace reads as
  confidence. Crowding reads as anxiety.
- **Motion.** Breath-paced, not snappy: 600–1200ms, gentle ease-out, small displacements
  (8–24px), staggered reveals as sections enter the viewport. Light can shift slowly. Nothing
  bounces, nothing spins, nothing parallaxes so hard it induces motion sickness. Use
  `IntersectionObserver`, not scroll listeners. **Wrap every animation in
  `@media (prefers-reduced-motion: reduce)` fallbacks that render the final state immediately.**
- **Light and dark mode.** The design is light-first and unashamed of it. If you support dark
  mode via `prefers-color-scheme`, it must be a *warm* dark — deep indigo-black with amber
  light, like a room at night, never a black terminal. If you can't make it as beautiful as the
  light mode, ship light-only and say so in the handoff. A mediocre dark mode is worse than none.

### Forbidden

Black-and-neon. Matrix rain. Circuit-board textures. Glassmorphism stacked three deep. Stock
photos of robots or handshakes. Blue holographic brains. Particle-network hero canvases. Gradient
text on every heading. Emoji as section icons. Rounded-corner-everything SaaS template energy.
AI-generated hero images that look AI-generated.

### Ship-quality bar

Render it and look at it. Then fix the kerning on the display type, the vertical rhythm between
sections, and the one gradient that's slightly too strong. The difference between "nice site" and
"who made this?" lives in that last pass — budget time for it.

---

## 5. Voice and copy

You are writing **as Harlan, in first person**, from the pasted bio. Match his register: visionary
but grounded, warm, unhurried, technically credible, occasionally funny, never mystical-vague and
never bro-y.

**Rules:**

- Specificity is the whole game. "I've shipped production systems for twenty years" is fine;
  naming the actual system and the actual hard part is what converts.
- Short sentences carry the weight. Vary the rhythm. Let a two-word sentence land.
- No hype vocabulary: *unlock, leverage, supercharge, game-changing, revolutionary, cutting-edge,
  10x, seamless, robust, empower, journey, at the end of the day, in today's rapidly evolving
  landscape.*
- No AI-writing tells: no "It's not just X — it's Y," no triads of adjectives everywhere, no
  em-dash on every third line, no paragraph that opens by restating the heading.
- No manufactured urgency, no countdowns, no "limited spots," no fake scarcity of any kind.
- Claims must be true and attributable to the source material.
- Headings should be sentences a human would say, not SEO nouns.
- Read every section aloud in your head. Anything you'd be embarrassed to say to a smart friend
  over coffee gets rewritten.

Include real `<title>`, `<meta name="description">`, and Open Graph / Twitter card tags — this
link will be shared in DMs and Slack, and the preview card is part of the first impression.

---

## 6. Technical constraints

- **Static site on GitHub Pages**, custom domain `ha.rlan.ai` (see `CNAME` — do not touch it).
  Publishes from `main`. Every change lands directly on `main`; that is the user's chosen
  workflow.
- **No build step. No framework. No npm.** A single self-contained `index.html` with a `<style>`
  block and a small `<script>` block. Someone must be able to open it locally with no tooling and
  see the real site.
- **Do not add `.nojekyll`** (it would publish `_ai/`), and do not put site assets in any
  directory beginning with `_` or `.`.
- **Drop the Tailwind 2 CDN link.** Hand-written modern CSS — custom properties, `clamp()` for
  fluid type, grid and flexbox, `:has()` where it helps. The CDN dependency is a render-blocking
  request to a third party for a framework we'd be fighting anyway.
- **Zero external requests at runtime** unless you can defend the exception in `HANDOFF.md`.
  Self-host anything you need. No analytics unless asked. No trackers.
- **Performance.** `harlan.jpg` and `harlan2.jpg` are ~600KB each — unacceptable for a hero.
  Resize to what's actually displayed at 2×, compress hard, and commit the optimized versions
  alongside the originals (don't delete the originals). Use `width`/`height` attributes to
  prevent layout shift, `loading="lazy"` below the fold, and inline any SVG. The page should feel
  instant on a phone on mobile data.
- **Accessibility is not optional.** Semantic landmarks (`header`, `main`, `section`, `footer`),
  a sane heading hierarchy, real `alt` text, visible focus states you designed on purpose, full
  keyboard operability, AA contrast throughout, and `prefers-reduced-motion` honored everywhere.
- **Responsive from 320px up.** Design the mobile layout deliberately — most of this traffic will
  arrive from a phone via a shared link. It should be beautiful there first.
- **Cross-browser:** current Safari, Chrome, Firefox, iOS Safari. No experimental CSS without a
  graceful fallback.
- Verify the built page renders correctly before you call it done. Don't ship a layout you
  haven't looked at.

---

## 7. The consultation flow

The CTA appears at minimum in the hero, mid-page, and in the final section. Same destination
every time; vary the wording so it doesn't read as a repeated button.

- Primary action: **book a free consultation** via a scheduling link. Use `{{CAL_LINK}}` as the
  literal placeholder href — Harlan will paste the real URL in. Make it a single, obvious,
  well-crafted link/button.
- Secondary action: **email**. Use `{{EMAIL}}` as the placeholder.
- **The gating is real but must stay invisible.** Free consultations are for people Harlan knows
  or who come through his network — that constraint should *never* appear on the page as a
  qualification hurdle or a "must meet these criteria" list. Handle it with framing, not
  gatekeeping: a warm line inviting people to say who they are and what they're building, and how
  they found their way here. Someone unqualified should feel welcomed, not screened; someone
  connected should feel personally invited.
- Say what happens next after they click. Uncertainty is friction.

---

## 8. Working method

1. Read every piece of pasted source material end to end before writing anything.
2. Read the current `index.html` — for facts and links, not for design.
3. Write `_ai/DESIGN.md`. Commit to specific decisions; a design language full of hedges is
   useless.
4. Write the copy, section by section, in his voice.
5. Build `index.html`. Render it. Look at it on desktop and at 375px wide.
6. Do the taste pass — spacing, rhythm, kerning, the one thing that's slightly wrong.
7. Verify: contrast ratios, keyboard tab order, reduced-motion, no external requests, image
   weights, no `{{` placeholders left except the intentional ones.
8. Write `_ai/HANDOFF.md` with the `{{NEEDS:}}` checklist.
9. Commit and push to `main`.

**Be bold.** The failure mode for this project is not "too weird" — it's "another tasteful
consultant landing page." Take a real position with the design. If you're deciding between the
safe layout and the one that might be extraordinary, build the second one and explain the risk in
the handoff. Harlan can always ask for the safe one; he can't ask for the idea you didn't have.

---

## Appendix — paste source material below this line

<!-- BIO, RÉSUMÉ, PROJECT NOTES, AND ANY OTHER SOURCE MATERIAL GOES HERE -->
