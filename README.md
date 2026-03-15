# NeuroGate

A rich GitHub Pages-ready showcase template for an RSVP-based EEG identity authentication project.

## Included sections

- Hero landing section
- Project highlights
- Method / framework section
- Experiment design section
- Results placeholders
- Team section
- Roadmap
- FAQ
- CTA footer

## Run locally

```bash
npm install
npm run dev
```

## Build locally

```bash
npm run build
```

## GitHub Pages deployment

This project already includes a GitHub Actions workflow for GitHub Pages.

### Recommended repo layout

- Repository root contains `neurogate-site/`
- GitHub Actions workflow is at `neurogate-site/.github/workflows/deploy.yml`

### Before publishing

1. Push this repository to GitHub
2. In GitHub repo settings, open **Pages**
3. Set **Source** to **GitHub Actions**
4. Push to `master` to trigger deployment

### Important note

The Vite base path is currently configured as:

```js
base: '/neurogate-site/'
```

If your GitHub repository name is not `neurogate-site`, update `vite.config.js` accordingly.

## Notes

All major content blocks are placeholder-friendly, so you can replace them with real figures, team details, experiment visuals, and benchmark results later.
