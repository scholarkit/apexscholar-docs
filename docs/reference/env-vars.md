# Environment Variables

Configuration for the Apex Scholar server. Set these in `.env` (development) or in your hosting platform’s dashboard (production).

---

## Required for Search Features

| Variable | What it does | How to get it |
|----------|--------------|---------------|
| `SERPAPI_API_KEY` | Enables Google Scholar search | Create a free account at [serpapi.com](https://serpapi.com) |
| `NCBI_API_KEY` | Enables PubMed search | Get one from your [NCBI account](https://www.ncbi.nlm.nih.gov/account/) |

Without these, those search sources are disabled.

---

## Required for LaTeX Compilation

| Variable | What it does | How to set |
|----------|--------------|------------|
| `GITHUB_TOKEN` | Auth to trigger GitHub Actions workflow | Create a GitHub Personal Access Token with `repo` scope |
| `GITHUB_OWNER` | Username or org that owns the LaTeX workflow repo | Your GitHub username (e.g., `scholarkit`) |
| `GITHUB_REPO` | Repository name containing `compile.yml` workflow | e.g., `LaTex` |

The workflow must accept `tex` input and output a PDF artifact named `pdf` with file `manuscript.pdf`. See [LaTeX Workflow](/reference/latex-workflow) for a sample file.

---

## Optional

| Variable | Purpose |
|----------|---------|
| `MOONSHOT_API_KEY` | Enables AI features (insights, file chat) |
| `NODE_ENV` | `development` or `production` (usually set by platform) |
| `PORT` | Server port (default 3000) |

---

## Security

Never commit `.env` to version control. Keep it in `.gitignore`. In production, use the environment variable facilities of your hosting provider (Vercel, Cloudflare Pages, etc.).

---

For a complete example, see `.env.example` in the repository.
