# Contributing

We welcome help making Apex Scholar better for researchers everywhere.

---

## Ways to Contribute

- **Report bugs** – open an issue with steps to reproduce
- **Suggest features** – tell us what would make your research easier
- **Improve documentation** – clarify confusing instructions, add examples
- **Write code** – fix bugs or add features; see the developer guide below
- **Spread the word** – tell your colleagues about Apex Scholar

---

## Reporting Bugs

Before opening an issue, search to see if it’s already reported.

When you file a bug, include:

1. What you expected to happen
2. What actually happened (screenshots help)
3. Steps to reproduce (e.g., “1. Click Explore, 2. Type ‘AI’, 3. Click Search”)
4. Your browser and operating system
5. Any error messages from the browser console (F12 → Console)

The more detail you give, the faster we can fix it.

---

## Suggesting Features

We love ideas! Before suggesting, check if it’s already on the roadmap (GitHub Issues with “enhancement”).

When you propose something new, explain:

- The problem you’re facing
- How the feature would solve it
- How you’d use it in your research

Be realistic about scope; small, focused improvements are easier to implement than large systemic changes.

---

## Contributing Code

If you’re a developer, fork the repository and open a Pull Request.

### Setup

```bash
git clone https://github.com/your-username/apexscholar.git
cd apexscholar
npm install
cp .env.example .env
# add your keys
npm run dev
```

### Before Submitting a PR

- Run `npm run lint` – fix any errors
- Run `npm run build` – ensure it builds
- Test your changes in the browser
- Document any new user-facing changes in the documentation (this site)
- Keep commits small and messages clear

### Code Style

We follow standard React/TypeScript conventions:

- Functional components with hooks
- Tailwind CSS for styling (no CSS modules)
- TypeScript strict mode; avoid `any`
- Meaningful variable and function names

### PR Checklist

- [ ] Lint passes
- [ ] Build succeeds
- [ ] No console errors
- [ ] Responsive layout works on mobile
- [ ] Documentation updated (if user-facing)
- [ ] Tests added? (not required yet, but nice)

---

## Documentation

This docs site is part of the `apexscholar-docs` repository. You can edit `.md` files directly. To preview:

```bash
cd apexscholar-docs
npm install
npm run dev
```

Open `http://localhost:5173` and see your changes live.

---

## Community

- GitHub: https://github.com/scholarkit/apexscholar
- Discord: https://discord.gg/clawd

Be kind. We’re all here to make research better.

---

Thank you for contributing!
