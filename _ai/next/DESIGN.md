# /next — Design language (the combined build)

The synthesis of the Opus and Sol versions, chosen section by section with Harlan. Opus is the
base; Sol contributes its header, the "shape of the real problem" engagement, and the headline
treatment. Full merge decisions live in [`MERGE-NOTES.md`](MERGE-NOTES.md).

## The one new idea: a dawn that breaks into daylight

The single move that makes this version its own thing: **the hero is a deep, warm night that the
rest of the page rises out of into luminous daylight.**

- The hero is always a deep warm ground (`--hero-ground: #100d0b`) regardless of theme — the only
  ground on which a glowing graph reads well. A live **three.js node-graph** (the "sculpture"
  scene — a slowly rotating jewel-like node-sphere; Harlan's pick — shared from
  `/vendor/graph-scenes.js`) turns behind the headline in warm gold/teal/rose.
- A left-weighted scrim keeps the headline crisp over the graph; a bottom gradient **melts the
  deep hero into the page's ivory ground.** That transition is the whole concept: night → dawn →
  the calm, light, luminous system below.
- Everything below the hero is the Opus light-first luminous system: warm paper, deep-lapis ink,
  gold and teal accents, one aperture-arc divider motif, breath-paced reveals.

This resolves the light/dark tension the animation created: the graph gets the dark ground it
needs, without making the whole site dark.

## Tokens

Opus's palette, unchanged: `--ground #fdfbf6`, `--ink #16202b`, `--gold #c9902f` /
`--gold-deep #8a5a12` (gold-deep carries any gold that must meet text contrast), `--teal #1f6b68`,
`--rose #b85c5c`. Hero-scoped tokens (`--hero-ground/ink/ink-soft`) are defined once and don't
change with theme. Type: **Iowan Old Style** serif (both source versions used it) against a system
grotesque; fluid `clamp()` scale.

## Theme

Light-first, with a **real toggle** (from Sol) layered onto Opus's system-only scheme:

- `:root` holds light tokens; dark tokens are defined both under
  `@media (prefers-color-scheme: dark) :root:not([data-theme="light"])` and under
  `:root[data-theme="dark"]`, so the OS default and the explicit choice both win correctly.
- An inline head script applies the stored choice before first paint (no flash).
- The header rides over the dark hero with light text, then flips to a solid, blurred, dark-ink
  bar once the hero scrolls away — driven by an `IntersectionObserver` on the hero, no scroll
  listeners.

## The rotating headline

The hero `<h1>` cycles through five headlines (crossfade, ~4.6s). It reads as one confident line
that keeps restating the offer from different angles.

- The `<h1>` always contains real, valid text (SEO/accessibility); rotation is a visual
  enhancement with `aria-live` left off so it never spams a screen reader.
- **Click or tap the headline, or use the labelled pause button, to stop on one.** The button is
  a real `aria-pressed` control; the headline is a convenience target for mouse/touch.
- Container min-height is measured across all headlines at load so nothing reflows as it cycles.
- `prefers-reduced-motion` disables rotation entirely (shows the anchor) and hides the toggle.

## Two trios, kept distinct

The page has two three-part sections on different axes; they're deliberately styled so they never
read as the same list twice:

- **Offerings** ("Build it. Harden it. Automate it.") — a *worded* menu: Build / Harden / Automate
  as gold italic marks in a hairline-ruled list. This is the service menu.
- **Engagement** ("We find the shape of the real problem.") — *numbered* 01 / 02 / 03 process
  cards. This is how any engagement flows.

## Motion & performance

- three.js is **vendored locally** (`/vendor/three.min.js`) — the page still makes zero external
  requests. The scene caps DPR at 2, thins geometry on small screens, pauses when hidden or
  offscreen, and renders a single still frame under reduced motion.
- Reveals are `IntersectionObserver`-driven, breath-paced (900ms), and collapse to final state
  under reduced motion.

## Verified

Rendered in-browser at 320/375/768/1024/1440 in light and dark: AA contrast passes in both themes
(gold numerals use `--gold-deep` to clear 3:1 on the bands), no horizontal scroll, zero external
requests, no console errors, reduced-motion honored, keyboard-operable, rotation + pause + theme
toggle + header state all working.
