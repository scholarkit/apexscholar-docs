# LaTeX Workflow Setup (Admin)

This page explains how to set up the GitHub Actions workflow that compiles LaTeX documents for Apex Scholar.

If you’re just using the app, you can skip this.

---

## What the Workflow Does

When a user clicks **Compile** in the Composr editor, the app sends the LaTeX source to a GitHub repository and triggers a workflow. The workflow:

1. Receives the source as input (`tex`)
2. Installs TeX Live packages
3. Writes the source to `manuscript.tex`
4. Runs `pdflatex` (multiple passes for references)
5. Uploads `manuscript.pdf` as an artifact named `pdf`
6. The app downloads the artifact and streams it back to the user

---

## Repository Structure

Create a public or private repo (e.g., `your-org/LaTex`) with:

```
.github/
  workflows/
    compile.yml   (the workflow file)
```

You can include optional `.cls`, `.sty`, or font files if needed.

---

## Example `compile.yml`

```yaml
name: LaTeX Compilation

on:
  workflow_dispatch:
    inputs:
      tex:
        description: 'LaTeX source content'
        required: true
        type: string

jobs:
  compile:
    runs-on: ubuntu-latest
    steps:
      - name: Install TeX Live
        run: |
          sudo apt-get update
          sudo apt-get install -y \
            texlive-latex-base \
            texlive-latex-extra \
            texlive-fonts-recommended \
            texlive-lang-english

      - name: Write source
        run: |
          mkdir -p build
          echo "${{ inputs.tex }}" > build/manuscript.tex

      - name: Compile PDF
        working-directory: build
        run: |
          pdflatex -interaction=nonstopmode manuscript.tex
          pdflatex -interaction=nonstopmode manuscript.tex

      - name: Upload artifact
        uses: actions/upload-artifact@v4
        with:
          name: pdf
          path: build/manuscript.pdf
```

---

## Configuration in Apex Scholar

In the app’s `.env` file, set:

```bash
GITHUB_TOKEN=ghp_your_pat_here   # with `repo` scope
GITHUB_OWNER=your-org
GITHUB_REPO=LaTex
```

Restart the server after changing these.

---

## Security Considerations

- The workflow receives raw LaTeX source, which can execute shell commands if `--shell-escape` is enabled. Don’t enable that.
- Use a dedicated PAT with minimal permissions.
- If compiling untrusted documents, consider sandboxing (this simple setup does not provide strong isolation).

---

## Troubleshooting

- **PDF artifact not found**: Ensure the artifact name is exactly `pdf` and the file inside is `manuscript.pdf`.
- **Missing packages**: Add them to the `apt-get install` line.
- **Permission denied**: Verify `GITHUB_TOKEN` has `repo` access and the repo exists.

Check the repository’s Actions tab for detailed logs.

---

## Advanced: Custom Packages and Templates

Place `.cls` and `.sty` files in the repository and copy them in the workflow before compilation:

```yaml
- name: Copy custom styles
  run: |
    cp styles/*.cls build/
    cp styles/*.sty build/
```

---

**That’s all** you need to get LaTeX compilation working. Once the workflow is set up, users can compile documents from within Apex Scholar with one click.
