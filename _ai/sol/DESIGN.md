# Project Luminous — design language

## Position: a solar field note from the future

This page should not look like a technology company, a spiritual retreat, or a consultancy. It
should feel like an unusually lucid page found in a field notebook: warm paper, exact annotations,
large ideas given silence, and one impossible source of light moving through it.

The visual thesis is **the horizon as an aperture**. A horizon is both an edge and an opening. It
is the line where the known world ends, but also where light first arrives. The page uses one
fine horizontal rule with a small solar disc, repeated at changes of thought. In the hero the
disc becomes architectural: enormous, cropped, and visibly glowing behind the text. Elsewhere it
shrinks into a quiet punctuation mark, a numbered coordinate, a button edge, or the circular crop
of Harlan's portrait.

This is a conscious risk. The hero is asymmetrical, the project work refuses the familiar card
grid, and the philosophical section becomes more visually important than the services section.
That will feel less conventionally “consultant-like.” It should. Harlan's advantage is not that he
resembles other senior AI consultants; it is that engineering discipline, imagination, and human
depth are integrated in one person.

The design must remain editorial rather than mystical. There are no sacred symbols, synthetic
network diagrams, glass panels, robot pictures, or decorative gradients masquerading as ideas.
The spirituality is expressed as attention: generous measure, warm light, honest language, and
room for a sentence to land.

## The material

The ground is warm paper lit from behind. Sections do not alternate through a stack of colored
rectangles. Instead, they occupy one continuous atmosphere, with very slow changes in temperature
and a few deliberate areas of denser ink. The page should feel emitted rather than laminated.

The hero's sun is made in CSS from restrained radial gradients. It is not an illustration and
must never pulse, spin, or become a novelty. A crisp horizon rule cuts through the glow. As the
page descends, the sun becomes a small dot on that same line. The visual story moves from dawn to
clarity, then into a warm nocturne in dark mode.

Portrait choice: use the square 399 × 399 headshot embedded in the current résumé. Its white
background and open expression belong to this light-first system, and its 55 KB source is already
appropriate for mobile. The conference photograph is warm and charming but the industrial wall
and neon “AI REVOLUTION” sign would reintroduce the exact visual cliché the commission rejects.

## Palette and semantic tokens

Light mode:

| Token | Value | Use |
| --- | --- | --- |
| `--ground` | `#F7F1E6` | Continuous warm-paper page ground |
| `--ground-soft` | `#EFE4D1` | Quiet bands and image backing |
| `--paper` | `#FFFDF8` | Small lifted details; never a field of cards |
| `--ink` | `#183B3A` | Primary type, deep mineral teal |
| `--ink-soft` | `#4C5954` | Secondary prose and metadata |
| `--accent` | `#8A4A14` | Burnished amber for links and actions |
| `--rose` | `#8D4351` | Sparse dawn-rose counterpoint |
| `--sun` | `#F4B95F` | Decorative light only, never small text |
| `--line` | `rgba(24, 59, 58, .22)` | Rules, structure, and the horizon |

Dark mode is a room at night, not a terminal:

| Token | Value | Use |
| --- | --- | --- |
| `--ground` | `#111B26` | Indigo-black ground |
| `--ground-soft` | `#172737` | Quiet bands |
| `--paper` | `#1C2E3B` | Lifted details |
| `--ink` | `#F7EDDC` | Warm primary type |
| `--ink-soft` | `#C9C4B7` | Secondary type |
| `--accent` | `#F3B65D` | Amber links and actions |
| `--rose` | `#F09AA0` | Sparse dusk rose |
| `--sun` | `#E79A3B` | Decorative light |
| `--line` | `rgba(247, 237, 220, .24)` | Rules and horizon |

Measured contrast ratios for every text token exceed WCAG AA. On the light ground: ink 10.83:1,
soft ink 6.52:1, accent 6.08:1, rose 6.12:1. On white paper: ink 11.97:1, soft ink 7.21:1,
accent 6.73:1. On the dark ground: ink 14.98:1, soft ink 9.98:1, accent 9.65:1, rose 8.14:1.
On the dark paper token: ink 12.04:1, soft ink 8.02:1, accent 7.76:1.

The sun and translucent atmospheres are decoration only. Text never depends on them for contrast.

## Typography

Use no downloaded font. The display and reading face is a transitional system serif:
`Iowan Old Style`, `Baskerville`, `Times New Roman`, serif. The structural voice is a quiet
system grotesque: `Avenir Next`, `Avenir`, `Segoe UI`, `Helvetica Neue`, sans-serif. The serif
carries thought; the sans carries coordinates, navigation, labels, prices, and controls.

The type scale is fluid and compact:

- Display: `clamp(3.25rem, 11vw, 8.75rem)`, line-height `.84`, tracking `-.055em`
- Section statement: `clamp(2.35rem, 7vw, 5.9rem)`, line-height `.94`, tracking `-.04em`
- Major heading: `clamp(1.9rem, 4vw, 3.6rem)`, line-height `1.02`
- Lead: `clamp(1.22rem, 2.1vw, 1.72rem)`, line-height `1.48`
- Body: `clamp(1.05rem, 1.3vw, 1.18rem)`, line-height `1.67`
- Label: `.72rem`, uppercase, tracking `.16em`

Prose measures 60–70 characters. Display lines may be much shorter. The page should create
rhythm by changing measure and alignment, not by changing fonts or wrapping everything in boxes.
Curly punctuation is used in prose. Numerals remain old-fashioned and direct: “1984” and
“$5,000 / day” are allowed to stand alone as visual facts.

## Composition

Mobile is the source layout. At 320–767 px, every section is one column, with a 20 px outer
gutter, large but controlled type, and the solar disc cropped beyond the right edge. Navigation
collapses to name plus the consultation link; section jump links are omitted rather than hidden
behind a menu. Projects form a ruled vertical score with the project name before the explanatory
sentence. The portrait is nearly full width, but never taller than the viewport.

From 768 px, a 12-column grid appears inside a maximum 1440 px canvas. A narrow left rail holds
section coordinates and occasional annotations. Main text usually occupies columns 3–9, leaving
the right edge open for the horizon and small proof notes. Deliberate overlaps are allowed only
between decoration and empty space, never between readable content.

The page should not reveal its whole navigation chrome in the first second. A slim sticky header
is present but porous: name on the left, three quiet anchor links on wide screens, one consultation
action on the right. It gains a slightly denser backing only after the page has scrolled.

Sections spend space unevenly:

1. **Aperture:** name, “Build what matters. Make AI yours.”, concrete AI work, consultation.
2. **Recognition:** a short, oversized statement for leaders who want AI without losing the soul
   of their work.
3. **What has survived contact with reality:** current AI systems and the compressed depth
   argument, supported by precise evidence rather than a résumé timeline.
4. **Work as a constellation:** Union plus Mirror, CoreNexus, TrustGraph, HoloFractal, and
   Superluminal Systems in a rhythmic ruled list; each item answers what, hard part, and why.
5. **Independent witness:** one full-measure testimonial, never a testimonial card.
6. **How I see it:** the philosophical center and typographic climax.
7. **Working together:** three verbs—see, build, teach—arranged as steps without pretending every
   engagement follows a rigid process.
8. **Terms:** one public rate, one short explanation, one invitation.
9. **The human:** light portrait, first-person bio, one intentionally strange line after the
   technical trust has been earned.
10. **Invitation:** the quietest and clearest consultation action.

## Components without component theatre

- **Solar rule:** a one-pixel horizontal line with one 10–16 px disc. It may widen on hover when
  attached to a link, but never animates continuously.
- **Project score:** full-width ruled rows, sharp edges, large name, short note, arrow that shifts
  4 px on hover. No cards and no logo parade.
- **Proof annotation:** small sans text connected to the main claim by a rule, like a marginal
  note in an atlas.
- **Testimonial:** serif quotation with a narrow vertical amber rule and compact sans attribution.
- **Action:** an elongated capsule only because it echoes the aperture. Most other containers
  stay square. Fill is deep teal in light mode and warm amber in dark mode.
- **Focus:** a 3 px rose outline with 4 px offset; never the browser default hidden by resets.

## Motion and interaction

Motion is breath-paced: 800 ms with `cubic-bezier(.2,.75,.2,1)`. Reveals move at most 16 px and
fade from .01 to 1 when a section enters the viewport. They run once through
`IntersectionObserver`; there are no scroll listeners. Hover movement is 300–500 ms because it is
feedback, not atmosphere. The hero glow drifts once over 18 seconds and then rests rather than
looping forever.

With `prefers-reduced-motion: reduce`, scrolling is immediate, every reveal is rendered in its
final state, the glow does not move, and all transitions become effectively instant. The page's
meaning and visual hierarchy must remain intact with JavaScript disabled.

The light/dark control is a real button with a textual state and designed focus. It follows the
OS preference until the visitor chooses. The choice is stored locally on that device; nothing is
sent anywhere.

## Accessibility and performance

The document has one `h1`; every major section has an `h2`; project titles use `h3`. Landmarks
are `header`, `main`, and `footer`, with labelled sections and a visible-on-focus skip link.
External links announce themselves through visible wording or accessible labels and open in a new
tab with `rel="noopener noreferrer"`. The portrait has concrete alt text. Decorative atmosphere
is generated with CSS pseudo-elements and is absent from the accessibility tree.

Targets are at least 44 px tall on touch screens. Underlines are preserved on body links. The
sticky header never traps focus or covers an anchored heading (`scroll-margin-top`). Keyboard
order follows reading order exactly.

No request leaves the page at runtime. Fonts are system faces; CSS and JavaScript are inline; the
portrait is the only page image and remains roughly 55 KB. The root-absolute production image
path has a same-directory fallback so the page also remains intact when opened directly from the
filesystem.
