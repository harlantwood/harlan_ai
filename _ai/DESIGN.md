# LUMINOUS — Design Language

The design system for `opus/index.html`. Written before the HTML, per the brief.

**The premise in one line:** every competitor in AI looks like a hacker movie. We look like dawn.

---

## 1. The material is light

Not light as a background color — light as a *substance* the page is made of. Warm paper lit from
behind. The first ten minutes after sunrise. The bloom around a filament. The halation at the edge
of an overexposed photograph.

Three rules follow from that:

1. **Light is emitted, not reflected.** Glows sit *behind* content in large, slow radial
   gradients at very low opacity. They read as atmosphere, never as decoration. No element should
   look like it has a light source painted onto it.
2. **Low contrast is a background technique, never a text technique.** The atmosphere can be
   almost invisible. The words never are.
3. **Space is the most generous thing on the page.** Whitespace reads as confidence; crowding
   reads as anxiety. When in doubt, add space and delete a sentence.

### The counter-thesis, from Harlan's own words

> *"Monolithic masculine skyscrapers of tech monopolies giving way to mycelial networks."*

This is a visual instruction as much as a philosophical one. It argues against the hard-edged,
vertical, monumental language of Big Tech — and for something organic, lateral, and networked.
Hence: no hard grid lines, no boxed cards with borders, no monolithic full-bleed slabs of color.
Structure is implied by rhythm and space, not drawn with rules.

### Forbidden

Black-and-neon. Matrix rain. Circuit-board textures. Stacked glassmorphism. Robot or handshake
stock photos. Blue holographic brains. Particle-network hero canvases. Gradient text on every
heading. Emoji as section icons. Rounded-corner SaaS template energy. Mandalas, lotuses, chakra
diagrams, or any sacred-geometry clipart — **the spirituality here lives in restraint and
generosity of space, not in symbols.**

---

## 2. Color

Semantic tokens only. Never write a raw hex value in a rule.

### Light (the default, and the design's real home)

| Token | Value | Role |
| --- | --- | --- |
| `--ground` | `#FDFBF6` | warm paper, page background |
| `--ground-2` | `#F6F0E4` | recessed bands, quote grounds |
| `--ink` | `#16202B` | body and display text — ~15:1 on ground |
| `--ink-soft` | `#4A5866` | secondary prose — ~7:1 |
| `--ink-faint` | `#67747F` | meta, captions — ~5:1 |
| `--gold` | `#C9902F` | ornament, rules, motif strokes — **large/decorative only, ~3:1** |
| `--gold-deep` | `#8A5A12` | gold used as *text* or links — ~6:1 |
| `--teal` | `#1F6B68` | the cool counterweight; second accent — ~5.5:1 |
| `--rose` | `#B85C5C` | dawn rose, used sparingly for warmth |

### Dark (a warm room at night, never a terminal)

Ground `#14171F`, ink `#EDE6DA`, soft `#AEB6BF`, faint `#8A939D`, gold `#E4B05C`, teal `#71C6C1`,
rose `#D98A8A`. The relationship inverts but the *warmth* never does — there is no pure black and
no pure white anywhere in this system.

### Rules

- Every text/background pair clears **WCAG AA**: 4.5:1 for body, 3:1 for large text. Checked, not
  eyeballed.
- `--gold` is for strokes and ornament. When gold must carry text, use `--gold-deep`.
- Glows are defined as separate `--glow-*` rgba tokens so opacity never gets hardcoded.
- Define every token on bare `:root`; the dark block *only* redefines them.

---

## 3. Typography

Type does most of the emotional work here. Treat it that way.

**Display / prose:** a humanist serif.
`'Iowan Old Style', 'Palatino Linotype', Palatino, 'Book Antiqua', Georgia, ui-serif, serif`

**Structure / UI:** a quiet grotesque.
`ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`

Self-hosted webfonts were considered and rejected: the brief demands zero external requests, and
this stack renders beautifully on macOS/iOS (Iowan Old Style) and acceptably everywhere else
(Palatino, then Georgia). The taste is in the *setting*, not in an exotic face.

- **Scale** — fluid, via `clamp()`. Display `clamp(2.4rem, 6vw, 4.2rem)`; section heads
  `clamp(1.9rem, 4vw, 2.9rem)`; lede `clamp(1.15rem, 2.2vw, 1.4rem)`; body `1.0625rem`.
- **Measure** — 32–36em on prose. Never full-width text.
- **Leading** — 1.65 on body, 1.08–1.15 on display.
- **Tracking** — tightened (`-0.02em`) on display sizes; opened (`0.14em`) on the small caps
  eyebrows, which are the one place uppercase is allowed.
- **Italic serif** carries every quotation. Quotation marks are typographic (" "), never straight.

---

## 4. The motif: the aperture

One geometric idea, used quietly, five or six times. **An aperture over a horizon** — concentric
arcs opening above a single horizontal line. It reads simultaneously as a rising sun, an opening
lens, and a widening field of view. It is the "seeing clearly" of the offer and the "dawn" of the
palette in a single mark.

It appears as:

- the hero atmosphere (large, ~6% opacity, behind the headline)
- the section divider (a small arc with a centered dot, ~40px wide)
- the favicon
- the hover state on the primary CTA (the arc completes)

It never appears as a logo, never spins, and never gets a gradient stroke. One motif used five
quiet times beats five motifs used once.

**The one diagram** on the page — a tower dissolving into a mycelial network — is the only place
the system draws anything representational, and it earns that by carrying the site's central
argument. Hand-authored inline SVG, both themes, `aria-hidden` with the argument stated in adjacent
prose so nothing is lost without it.

---

## 5. Motion

Breath-paced. The whole page should feel like it is inhaling slowly, not reacting.

- **Reveal on scroll:** `opacity 0→1`, `translateY(18px→0)`, **900ms**,
  `cubic-bezier(0.16, 1, 0.3, 1)`. Staggered 80ms between siblings.
- **Ambient:** the hero glow breathes on a **14s** ease-in-out loop, scale 1→1.04. Barely
  perceptible; that's the point.
- **Interactive:** 220ms on hover/focus. Nothing bounces, spins, or parallaxes.
- Driven by `IntersectionObserver`, never scroll listeners.
- **`prefers-reduced-motion: reduce` disables all of it** and renders final states immediately —
  including the ambient breath. This is a hard requirement, not a nicety.

---

## 6. Layout

- Single column. Prose column 34em, feature bands up to 62rem, full-bleed only for atmosphere.
- Vertical rhythm between sections: `clamp(5.5rem, 12vh, 9rem)`. Generous to the point of feeling
  slightly excessive on desktop — that's correct.
- **Mobile is the primary design target** (most traffic arrives from a shared link on a phone).
  Designed from 320px up.
- Section boundaries are marked by space and the arc divider, not by borders or background slabs.
  Exactly two recessed `--ground-2` bands exist on the page, for the two moments that need to feel
  like a held breath.

---

## 7. Quality bar

Ship criteria, all verified before commit:

- [ ] AA contrast on every text/background pair
- [ ] Full keyboard operability with designed (not default) focus rings
- [ ] `prefers-reduced-motion` honored everywhere, ambient included
- [ ] Zero external network requests
- [ ] Semantic landmarks, sane heading hierarchy, real alt text
- [ ] No horizontal scroll at 320px
- [ ] Portrait ≤ 30KB with explicit `width`/`height`
- [ ] Renders in current Safari, Chrome, Firefox, iOS Safari
- [ ] Looked at, then adjusted — spacing, rhythm, and the one gradient that's slightly too strong

The difference between "nice site" and "who made this?" lives entirely in that last line.
