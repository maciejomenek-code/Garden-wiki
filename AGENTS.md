# AGENTS.md

## Purpose

This repository is the source of truth for a balcony-garden plan and its MkDocs documentation. Agents working here should preserve a clear distinction between:

- the **physical balcony geometry**,
- **physical containers**,
- the **current position** of those containers,
- the **current planting** inside them,
- and historical/planning information.

The site should remain understandable to a human browsing it and predictable for automated agents editing it.

## Repository conventions

- Documentation lives under `docs/`.
- MkDocs configuration lives in `mkdocs.yml`.
- Keep navigation in `mkdocs.yml` synchronized with added or renamed pages.
- Prefer Markdown and small amounts of HTML/SVG/CSS.
- Do not add JavaScript unless the requested interaction cannot reasonably be implemented with links, SVG and CSS.
- Run `mkdocs build --strict` after structural changes when possible.

## Container identity

A container ID identifies the **physical container**, not its location and not the crop currently growing in it.

Container IDs must remain stable when a container is:

- moved,
- replanted,
- repurposed,
- temporarily stored elsewhere.

Do not rename a container merely because its position or contents changed.

### Naming

Use semantic identifiers based on stable physical characteristics:

```text
<type>_<size>[_<ordinal>]
```

Examples:

```text
planter_85x15_01
planter_85x15_02
trellis_planter_60x40
pot_24_01
pot_19_03
```

Rules:

- Use `snake_case` for IDs in metadata/code.
- Use `kebab-case` for page filenames and URLs.
- Use a two-digit ordinal only when multiple substantially identical containers exist.
- Do not encode crop names in container IDs.
- Do not encode balcony position or compass direction in container IDs.
- Do not use opaque container IDs such as `A1`, `B2` or `C3`.
- Module labels such as **A–J** are allowed for logical planting subplots. They are not physical container IDs and must not be treated as such.

## Confirmed physical model

Measurements are in centimetres unless explicitly stated otherwise.

### Balcony

- Overall floor plan: **470 × 230 cm**.
- House façade is on the **east** side.
- Outer balcony edge is on the **west** side.
- On the plan, south is left and north is right.
- Along the house façade from south to north:
  - 150 cm section,
  - 80 cm balcony door,
  - 240 cm section.
- South window width: **130 cm**.
- North window width: **140 cm**.
- Both window sills project **23 cm into the balcony**.
- The balcony door swings **inward into the house**.
- The exact offsets of the windows inside their wall sections have not been measured. Do not invent them.
- Door swing may be represented schematically, but do not treat an approximate arc as surveyed geometry.

### Confirmed container inventory

- `planter_85x15_01`: rectangular planter, 85 × 15 cm, **6 cm substrate depth**, five logical modules of approximately 17 × 15 cm.
- `planter_85x15_02`: rectangular planter, 85 × 15 cm, **6 cm substrate depth**, five logical modules of approximately 17 × 15 cm.
- `trellis_planter_60x40`: 60 × 40 cm planter with integrated trellis, approximately 28 L.
- `pot_24_01` through `pot_24_04`: round pots, 24 cm diameter.
- `pot_19_01` through `pot_19_03`: round pots, 19 cm diameter.

The current crop-rotation source of truth for the two shallow planters is `docs/planning/shallow-planters-6cm.md`.

Container placement is mutable. The balcony SVG shows the current/working layout only and should be updated when the layout changes without renaming containers.

## Balcony map

The interactive balcony map lives on `docs/index.md`.

Requirements:

- Keep the balcony and containers approximately proportional to their confirmed measurements.
- Use inline SVG so containers can be ordinary links to their documentation pages.
- Every container shown on the map must link to its page under `docs/containers/`.
- Keep physical IDs independent of SVG coordinates.
- Prefer CSS hover/focus styling over JavaScript.
- Include accessible text/tooltips for clickable containers.
- If a position is only approximate, present it as approximate rather than inventing measurements.
- Do not infer exact distances from walls unless they have been measured.
- Draw the 23 cm window-sill depth explicitly; containers assigned to a sill must visually sit on the sill surface, not float beside it.
- Draw the door swing on the house side of the façade.
- In the current working layout, the trellis planter is vertical on the plan (its 60 cm dimension runs east-west).

## Documentation content

For each physical container, document at minimum:

- stable container ID,
- container type,
- confirmed dimensions,
- structural features where relevant,
- current planting,
- planting history,
- notes.

Treat **location** and **contents** as mutable properties.

For planned rotations, keep module-level plans separate from **Current planting** unless an actual planting has been confirmed. Do not convert a plan into an observation.

When information is not known, use `TBD`, `Not documented`, or omit the field. Do not fill gaps by guessing.

Use metric units:

- centimetres for container/layout dimensions,
- litres for volume,
- grams/kilograms where mass is needed.

## Garden facts and uncertainty

Do not invent horticultural facts, measurements, dates, varieties, yields, or planting decisions.

When adding garden-plan content:

- distinguish a confirmed decision from a suggestion,
- distinguish a planned planting from an actual planting,
- preserve dates when recording observations,
- avoid silently turning an old plan into a current fact,
- preserve the `wwXX` ISO-week notation where the shallow-planter plan uses it.

## Images

Do **not** add reference photos of containers to the wiki unless the user explicitly requests them. The repository should primarily use diagrams and text for physical documentation.

## Style

- Keep pages concise and structured.
- Prefer tables for compact physical specifications.
- Prefer stable headings so links remain valid.
- Use human-readable page titles even when IDs are code-like.
- Avoid duplicating the same fact in many pages when a single source-of-truth page can be linked instead.

## Local development

Install dependencies:

```bash
python -m pip install -r requirements.txt
```

Run locally:

```bash
mkdocs serve
```

Validate before finishing substantial documentation or navigation changes:

```bash
mkdocs build --strict
```
