# Apex Scholar Documentation

This repository contains the official documentation for **Apex Scholar**, an AI-powered research workspace.

- **Live docs**: https://apexscholar-docs.pages.dev
- **Main app**: https://apex-scholar.vercel.app
- **Source code**: https://github.com/scholarkit/apexscholar

## Building Locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173` (or the port shown in terminal).

## Building for Production

```bash
npm run build
```

The static site is generated in `docs/.vitepress/dist/`.

## Deploying to Cloudflare Pages

1. Push this repository to GitHub
2. Create a new site in Cloudflare Pages
3. Connect to your GitHub repository
4. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `docs/.vitepress/dist`
   - **Environment variables**: `NODE_VERSION=20` (or your preferred version)
5. Save and deploy

Your docs will be live at `https://apexscholar-docs.pages.dev`.

## Content Structure

```
docs/
├── .vitepress/
│   └── config.ts       # Site configuration (nav, sidebar, theme)
├── guide/              # Getting started guides
│   ├── getting-started.md
│   ├── installation.md
│   ├── configuration.md
│   └── e2ee.md
├── features/           # Feature documentation
│   ├── overview.md
│   ├── literature-search.md
│   ├── knowledge-graph.md
│   ├── insights.md
│   ├── latex.md
│   ├── kanban.md
│   ├── grant-management.md
│   ├── citations.md
│   └── file-chat.md
├── reference/          # Technical reference
│   ├── api.md
│   ├── env-vars.md
│   ├── latex-workflow.md
│   └── changelog.md
└── help/               # Support
    ├── troubleshooting.md
    ├── faq.md
    └── contributing.md
```

## Contributing

Found a typo? Want to add a section? Contributions welcome! Please read [CONTRIBUTING.md](https://github.com/scholarkit/apexscholar/blob/main/CONTRIBUTING.md) in the main repo.

## License

Documentation is licensed under CC BY-SA 4.0 unless otherwise noted.
