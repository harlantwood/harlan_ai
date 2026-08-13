# HANDOFF — Project Luminous, first build

**Live preview:** `ha.rlan.ai/opus/` (once pushed). Local: any static server from the repo root.

**Files:** `opus/index.html` (the whole site, self-contained), `opus/images/harlan-portrait.jpg`,
`opus/images/og-luminous.png`, `_ai/DESIGN.md` (the design language).

The root `index.html` link tree is **untouched and still live.**

---

## 1. What needs you — the checklist

Ordered by how much it blocks launch.

| # | Item | Where | Notes |
| --- | --- | --- | --- |
| 1 | **`{{CAL_LINK}}`** — scheduling URL | 3 places: hero CTA, final CTA, footer | The page cannot launch without it. Search the file for `{{CAL_LINK}}`. |
| 2 | **`{{NEEDS: Hawaii or Azores}}`** — where you live | "Who you'd be working with" | Renders literally right now. Résumé says Azores; your Holochain intro says Hawaii; your phone is an 808 number. |
| 3 | **Confirm `h@rlan.me`** is the address you want publicly on a sales page | final CTA + footer | I used it rather than a placeholder so the page works today. Easy to change. |
| 4 | **Testimonial sign-off** | 5 quotes used | They're real and attributed, lifted from your résumés (presumably originally LinkedIn recommendations). A LinkedIn recommendation is a different context from a marketing page — confirm each person is fine with it. |
| 5 | **Project URLs** | project list + footer | I used the live site's versions: `trustgraph.net`, `corenexus.is`, `holofractal.is`, `superluminal.is`, `aistrologer.app`. Your bios variously said `corenexus.io` and `trustgraph.is`. **I could not verify these resolve** — see §4. |
| 6 | **"Mirror" vs "AiSTROLOGER"** | project list | Live site says Mirror; your bio says AiSTROLOGER. I used Mirror. |
| 7 | **GitHub link** points at `github.com/trustgraph` | footer | Guessed from the `trustgraph/trustgraph-holochain` repo you mentioned. Give me your personal handle if you'd rather. |
| 8 | **Practice name** | not used anywhere | The older résumés brand it **Heaven on Earth Consulting**. I defaulted to your own name. Say the word and I'll thread it through. |

---

## 2. Decisions I made, and why

**The frame.** Everything is pitched as *master software developer + master of AI transformation.*
The decentralized/trust-graph/cosmology material appears only as evidence and alignment — never as
the product. That's the call from §1 of the brief.

**Pricing stayed on the page.** Wrapped in `<!-- PRICING START -->` / `<!-- PRICING END -->` so
it's a one-block deletion. A public $5k/day number filters inbound and reads as confidence.

**The gating is invisible.** Nothing says "free consultations are only for people I know." Instead
the ask is *"tell me who you are and what you're making — and how you found your way here,"* which
invites the connected person and gently self-selects everyone else. No criteria list anywhere.

**Section order changed from the brief.** I moved proof ("I've been early before") to third,
directly after Recognition, because at that point a reader wants to know who's talking before
they'll accept a philosophy. The brief invited this and asked me to flag it.

**"Consistently early" became its own section.** Bitcoin opcodes → Solidity pre-mainnet → early
IPFS → Holochain since CEPTR → production LLM systems. This is the strongest available argument
for hiring an AI consultant in 2026, and it was buried in the source material. The Singularity
Summit in 2007 is the single best line on the résumé and nobody had ever used it.

**Five testimonials, as typographic pull quotes, never cards.** McCarthy (mastery), Adam Apollo
(the technical/human synthesis, plus an explicit consulting endorsement), Donohoe (reliability),
Woodward (business translation), Thorp (integrity). Thirteen exist; a wall of praise reads as
insecurity.

**Woodward is attributed to Zozi**, not Nasdaq — the older résumés show that's where the working
relationship was. His Nasdaq title is noted parenthetically because it carries weight.

**The personal-development list is not on the page.** Mankind Project, Landmark, Clairvision,
Holotropic Breathwork et al. are real and serious, but an itemized list of one's healing modalities
on a consulting page narrows the audience and invites the wrong scrutiny. Instead one plain
sentence: *"I have also spent about as many years in meditation, personal growth, and
transformational work as I have in software, and I have never kept the two in separate boxes."*
If you want specific programs named, that's your call — tell me which.

**One deliberately strange moment, placed late.** *"I love incarnating on pre-singularity planets.
That is genuinely the sort of thing I say out loud."* It sits after all the credibility, as the
handshake for the people you actually want. The sentient-AI conviction is rendered in the
philosophy section as *"deserves to be brought into that abundance rather than conscripted into
it"* — your meaning, without the "slavery"/"new race" framing that a cold reader would misread.

**"Masculine" was dropped** from the mycelium line. The idea survives intact without a word that
lands differently on different readers.

---

## 3. Design

Full system in `_ai/DESIGN.md`. In brief: warm paper ground, deep-lapis ink, dawn gold and rose
in large low-opacity radial glows; a humanist serif (Iowan Old Style → Palatino → Georgia) against
a quiet grotesque; **one motif — an aperture opening over a horizon** — used in the hero, the
section dividers, the CTA arrow, the favicon and the OG card. Nothing black, nothing neon, no
cards, no borders. Structure comes from rhythm and space.

One diagram earns its place: three monolithic towers dissolving into a lateral network, carrying
the site's central argument. Hand-authored inline SVG, themed, with the argument also stated in
adjacent prose so nothing is lost if it doesn't render.

**Images.** Both existing photos (`images/harlan.jpg`, `harlan2.jpg`) are the same shot of you in
front of a dark neon *"THE AI REVOLUTION {IS HERE}"* sign — a warm photo, but the exact aesthetic
this design is arguing against, and 600KB each. I used the headshot embedded in your résumé PDF
instead: warm, light background, genuine. **It's only 399×399**, which is fine at the 132px it's
displayed at but caps how large the portrait can ever go. A higher-resolution original would be
the single highest-value asset you could send.

The OG share card is generated and committed. If you make better images or diagrams, the obvious
slots are: a wider hero image, and something visual in "What I actually build."

---

## 4. Verified — and the one thing I couldn't

Checked in a real browser at 320 / 375 / 768 / 1280 / 1440px, light and dark:

- **Contrast:** zero AA failures, both schemes. (I had to darken `--ink-faint` from `#67747F` to
  `#5E6B76` — it was 4.22:1 on the recessed bands, below the 4.5 threshold.)
- **No horizontal scroll** at any width. (The atmosphere glows were overflowing; fixed with
  `overflow-x: clip`.)
- **Zero external network requests.** No CDN, no fonts, no analytics, no trackers. Tailwind CDN
  removed.
- **No console errors.**
- **`prefers-reduced-motion`:** all reveals final, ambient glow animation off.
- **JavaScript disabled:** all content visible (`.no-js` guard).
- **Keyboard:** sane tab order, 2px designed focus ring.
- **Weight:** portrait 24KB, OG card 138KB (never loaded by the page itself), HTML ~46KB.

**What I could not verify: whether the outbound project URLs actually resolve.** I had no network
access to check. `trustgraph.net`, `corenexus.is`, `holofractal.is`, `superluminal.is`,
`aistrologer.app` are taken from your live site, but the brief is right that a dead link in the
project list is the most credibility-damaging bug this page could ship — **please click all five
before promoting this to the root.**

---

## 5. What I'd do next

1. **Get the real copy in front of someone who isn't you.** The Recognition section is doing the
   most persuasive work and it's the part I'd most want a second read on.
2. **A short FAQ** dissolving the two real objections — *"we're small and mission-driven, is this
   for us"* and *"I don't know enough to know what to ask for."* I left it out rather than write
   filler, but with your actual answers it would earn a place before the final CTA.
3. **One concrete engagement story.** Every section currently argues from capability. A single
   short "here's what a day looked like, and what changed" would outperform any of them. It needs
   a fact I don't have — and a client who's happy to be named.
4. **Decide on Heaven on Earth Consulting.** It's a beautiful name and completely on-theme. It
   also asks the page to carry a bigger claim. Worth a deliberate yes or no rather than drift.
5. Promote to root when you're happy: move `opus/index.html` → `index.html`, update the
   root-absolute `/opus/images/…` paths to `/images/…`, and update the canonical/OG URLs.
