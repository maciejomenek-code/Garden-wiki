# Garden Wiki

MkDocs-based documentation for a balcony garden, including an interactive balcony layout and stable pages for physical containers.

## Local development

```bash
python -m pip install -r requirements.txt
mkdocs serve
```

Then open the local URL printed by MkDocs.

## Validation

```bash
mkdocs build --strict
```

## Structure

- `docs/index.md` — interactive balcony map
- `docs/containers/` — physical container documentation
- `docs/crops/` — reusable crop reference
- `docs/planning/` — planting plans and schedules
- `AGENTS.md` — conventions for agents editing this repository

## GitHub Pages

A GitHub Actions workflow is included in `.github/workflows/deploy-pages.yml`.

In the repository settings, configure **Pages → Build and deployment → Source** to **GitHub Actions**. The workflow builds the MkDocs site and deploys it to GitHub Pages.
