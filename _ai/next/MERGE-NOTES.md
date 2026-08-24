# /next — the combined build (Opus × Sol)

Living spec for `next/index.html`, merging the two versions per Harlan's walkthrough. Design docs
here in `_ai/next/`. Root `index.html` and both source versions stay untouched.

## Base decision

**Start from the Opus version and selectively bring in the Sol elements Harlan liked.** Opus is
the skeleton; Sol contributes its header, headline font, and the sections noted below.

## Global corrections (apply everywhere)

- **No "1984." Ever.** Ageism risk, and he was very young then. Reframe to **"25 years building
  software."** Do **not** split building from shipping production systems — one claim: 25 years
  building and shipping production software.
- Subhead: *"25 years building software. Now I help mission-driven people and organizations build
  with AI — clearly, carefully, and in a way that stays theirs."*

## Structure (top to bottom)

1. **Header** — adopt **Sol's** sticky header: wordmark, nav, working light/dark toggle. Harlan
   likes it.
2. **Hero** — **Sol's headline font.** Headline TBD (see HEADLINES; anchor is "Build what matters.
   Make AI yours."). **No sun on the right (Sol) and no sun-logo on the left (Opus)** — both
   rejected. Hero image comes from the `/gallery/hero` selection.
3. **Jim McCarthy quote — moved up, just below the header/hero.** Harlan loves it and wants it
   early. (Currently: Sol has it as a standalone "witness" section ~line 1262; Opus inline in the
   timeline band ~line 787. Use it as an early standalone pull quote.)
   > "If Harlan Wood is seeking to work his magic for you… vast technical talent, extensive
   > creative gifts, and the discipline and impact of a seasoned master." — Jim McCarthy, author
   > of *Dynamics of Software Development* (Microsoft Press)
4. **The three offerings — the refocus, primary section.** Section title candidate: **"Build it.
   Harden it. Automate it."**
   1. **Build from scratch → production.** Your prototype, built so it can actually scale:
      security-hardened, productionized, scalable to large-scale production.
   2. **Make what you have better.** Review existing software — security, hardening,
      productionization, scalability — and leave behind ongoing systems so your own people (or an
      ordinary developer) can maintain it with AI help and automated production assistants.
   3. **Stand up your AI-native dev pipeline.** Task-manager-driven development you can mostly
      forget about; set the team, the tools, and the whole thing up from scratch. *He loves
      startups* — greenfield setup lives here. (Open q: keep as one offering or split the pipeline
      from the greenfield-setup half into a 4th.)
5. **Recognition** — fuse both:
   - Title from **Sol**: **"Your work has a reason for existing."** (loved)
   - Para 1 from **Sol** (loved): *"You can feel the pressure to do something with AI. You can
     also feel when the options in front of you have no soul."*
   - **Drop Sol's para 2** ("Your answer does not have to be refusal or surrender… fluency…") —
     disliked.
   - Bridge with **Opus's** framing into the timeline: *"You can feel it pull in both directions.
     You don't have to choose. I've been there before."*
6. **Timeline** — keep **Opus's "I've been early before"** thread (loved). **Remove the line "I
   don't list these to collect points."** (reads weird.)
7. **What I actually build** — keep **Opus's** section, "at a glance" (liked): real-time voice ·
   evaluation frameworks · memory / retrieval · the unglamorous majority.
8. **What I build when nobody's paying me** — keep this framing (liked). Projects:
   **remove Mirror / AI astrology entirely** — some people react badly to astrology. (Removes the
   `aistrologer.app` project card + footer link + the `{{NEEDS}}` note.)
9. **Engagement** — bring in **Sol's** section, which Harlan liked as a whole:
   - Heading: **"We find the shape of the real problem."**
   - Lead: *"You do not need a polished AI brief before we talk. Bring the ambition, the unease,
     the half-working prototype, or the system that has begun to drift. We will start from what is
     true."*
   - The **01 / 02 / 03** cards: **01 See clearly · 02 Build the real thing · 03 Leave capability
     behind.** (Harlan also liked Opus's "Two — Building the thing"; Sol's "02 Build the real
     thing" is the same beat — use Sol's.)
   - Greg Woodward quote sits right after (liked).
   - **Reconciliation (important):** this engagement trio (process: diagnose → build → hand off)
     is a *different axis* from the three OFFERINGS in §4 (menu: from-scratch / harden / pipeline).
     Both stay, but differentiate them visually so the page doesn't read as two near-identical
     numbered trios. Offerings = *what I build for you*; engagement = *how any engagement goes*.
10. **Testimonials in play:**
    - **Keep Greg Woodward** (liked) — "getting both groups into alignment and onto the same page."
    - **Strike Adam Apollo.** Replace with another from `_ai/source/testimonials.md`. Default:
      **Christina Wodtke** (Principal PM, LinkedIn — recognizable, execution-focused, and avoids
      the esoteric association that likely motivated the strike). Tonal alternate for the
      philosophy slot: **Jack Senechal** ("cares deeply about people… building excellent tech").
    - McCarthy (moved up), Greg Woodward, Patrick Donohoe (reliability), Noah Thorp (bio) also in.
11. **Terms / pricing** — use **Opus's quiet "Terms, plainly"** treatment. **Sol's $5,000 is too
    loud** — de-emphasize the rate and make the **free first conversation** the prominent line.
    (Harlan: "I just like the [quiet] version.") Rate still present, just not shouting.
12. **First conversation** — reframe. The free first conversation is genuinely about *giving value
    and solving their problem*: real advice, real time, and if the honest answer is "you don't
    need me — do this other thing," that's a fine outcome. No-strings, not a sales call. Rewrite
    the free-consultation copy to say this plainly. This is the emphasized part of the terms block.
13. **Bio** — Opus bio, with two cuts:
    - **Remove "first-class honors."**
    - **Remove the "I love incarnating on pre-singularity planets" line.**
14. Final CTA, footer — reconcile from both in later passes.

## Resolved inputs

- **Cal link:** `https://cal.com/harlantwood/ai` — replaces every `{{CAL_LINK}}`.

## Still open

- **Headline** — Harlan choosing from the offerings-reflective list.
- **Hero image** — 3 prompts → generate to `gallery/hero/1..3.*` for him to pick. No sun, no neon,
  no robots/brains/mandalas/circuits.
- Offering 3: one card or split into four.
- Everything below the fold (engagement, pricing, bio, footer) not yet walked through.
