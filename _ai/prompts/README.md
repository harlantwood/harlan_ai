# Prompts

Two versions of the site are being built independently from the same commission, by different
models. This folder keeps the prompts separate so the runs stay comparable and reproducible.

| File | What it is |
| --- | --- |
| [`luminous.md`](luminous.md) | **The shared brief.** The commission itself: audience, frame, page architecture, design direction, voice rules, technical constraints. Both runs read this. |
| [`opus.md`](opus.md) | The run prompt for the **Opus 5** build → `opus/` |
| [`sol.md`](sol.md) | The run prompt for the **GPT-5.6-sol** build (via Codex CLI) → `sol/` |

A run prompt is thin on purpose: it points at the shared brief and the source folder, then states
only what is specific to that run — where to build, what not to look at, and any invitation or
constraint particular to that model.

## The independence rule

Each run is told not to look at the other's output directory or design documents. The value of
having two versions is that they were arrived at separately; a model that reads the other's design
language is no longer a second opinion, it's a variation on the first.

| Run | Builds to | Design doc | Handoff | Must not read |
| --- | --- | --- | --- | --- |
| Opus 5 | `opus/` | `_ai/DESIGN.md` | `_ai/HANDOFF.md` | `sol/`, `_ai/sol/` |
| GPT-5.6-sol | `sol/` | `_ai/sol/DESIGN.md` | `_ai/sol/HANDOFF.md` | `opus/`, `_ai/DESIGN.md`, `_ai/HANDOFF.md` |

Neither touches the root `index.html`, which stays live as the link tree until Harlan promotes a
replacement.

## Known wart

`luminous.md` still hardcodes `opus/index.html` as the build target (§3) and `_ai/DESIGN.md` as the
design-doc path (§3), because it was written before a second run existed. `sol.md` overrides both
explicitly. **A third run should not rely on those overrides** — the right fix is to make the
build target a parameter of the shared brief and let each run prompt supply it. Deferred so the
shared brief isn't edited underneath a run that is currently reading it.
