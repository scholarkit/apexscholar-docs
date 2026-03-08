# API Reference

This page documents the server-side API endpoints used by the frontend. Most users never interact with these directly.

---

## Base URL

- Development: `http://localhost:3000`
- Production: your deployed app root

---

## GET /api/arxiv

Search ArXiv.

- Query: `q` (search terms)
- Returns: XML feed of results

No API key needed.

---

## GET /api/scholar

Search Google Scholar via SerpAPI.

- Query: `q`
- Returns: JSON

Requires `SERPAPI_API_KEY` environment variable.

---

## GET /api/pubmed

Search PubMed via NCBI E-utilities.

- Query: `q`
- Returns: XML

Requires `NCBI_API_KEY`.

---

## POST /api/compile

Compile LaTeX source to PDF using a GitHub Actions workflow.

- Body: `{ "content": "LaTeX source as string" }`
- Returns: `application/pdf`

Requires `GITHUB_TOKEN`, `GITHUB_OWNER`, `GITHUB_REPO` to be set. The workflow must be named `compile.yml` and produce a `pdf` artifact containing `manuscript.pdf`.

---

## Notes

These endpoints are intended for internal use by the app. If you’re building a custom integration, you can call them directly but be mindful of rate limits and required API keys.

---

For environment variable details, see [Environment Variables](/reference/env-vars).
