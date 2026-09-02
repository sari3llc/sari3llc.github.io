# Sari3 LLC website

Official static website for **Sari3 LLC**, published at `https://sari3.io` with GitHub Pages.

## Site structure

- `/` — software company homepage and product overview
- `/company/` — public legal entity, business, address, domain, and contact information
- `/privacy/` — Sari3 LLC website privacy policy
- `/support/` — company and product support routing
- `/tawba/` — official Tawba product page
- `/tawba/privacy/` — Tawba privacy policy
- `/tawba/privacy-choices/` — Tawba data controls
- `/tawba/support/` — Tawba support URL
- `/tawba/terms/` — Tawba terms of use

The site is dependency-free and self-contained. It uses no third-party fonts, scripts, analytics, advertising, or outbound website links. All user-facing web navigation stays on `sari3.io`; contact actions use the company’s `@sari3.io` email address and published phone number.

## Local preview

Serve the repository root with any static HTTP server, then open the local URL in a browser. Root-relative paths are used throughout, so opening the HTML files directly from disk is not supported.

## Deployment

GitHub Pages deploys the `main` branch. The `CNAME` file binds the site to `sari3.io`, and `.nojekyll` preserves the static file layout.

Before changing public company information, confirm that the legal name, headquarters address, phone number, and email match Sari3 LLC’s official business and developer-program records exactly.
