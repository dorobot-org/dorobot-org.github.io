# ADORA 1 Nano GitHub Pages Site

This repository contains a static product landing page for `ADORA 1 Nano`, designed to deploy directly on GitHub Pages without a build step.

## Files

- `index.html` — page structure and content
- `styles.css` — responsive styling
- `script.js` — mobile navigation toggle
- `assets/images/` — local image assets copied for the page

## Local Preview

Run one of these commands from the repo root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. In the repo settings, open `Pages`.
3. Set the source to `Deploy from a branch`.
4. Choose the `main` branch and the `/ (root)` folder.
5. Save and wait for GitHub Pages to publish the site.

Because this is a plain static site, no GitHub Actions workflow is required.
