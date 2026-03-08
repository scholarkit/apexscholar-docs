# LaTeX Editor

Write your manuscripts in a comfortable web editor and compile to PDF with one click. No local TeX installation required.

---

## What It Is

The **Composr** page is a LaTeX editor integrated with cloud compilation. It’s like Overleaf but connected to your Apex Scholar workspace.

---

## Why Use It

- No need to install TeX Live on your computer
- Access your source from anywhere
- PDFs are generated quickly via GitHub Actions
- Your `.tex` files are versioned in your project

---

## Quick Start

1. Click **Composr** in the sidebar
2. Click **New Document**
3. Choose a template (Article, Report, Blank)
4. Start writing
5. Click **Compile**
6. Download the PDF

---

## Including Figures

Upload figures (PNG, JPG, PDF) to Resources first. Then include them:

```latex
\begin{figure}[h]
  \centering
  \includegraphics[width=0.8\textwidth]{my-figure.png}
  \caption{My important result}
  \label{fig:myfig}
\end{figure}
```

The filename must match exactly.

---

## References with BibTeX

Upload a `.bib` file to Resources. In your document:

```latex
\bibliography{my-references}
\bibliographystyle{plain}
```

The compile workflow should handle BibTeX. If references don’t appear, consult your admin about enabling `bibtex` in the GitHub Actions workflow.

---

## Troubleshooting

- **Error “! LaTeX Error: File … not found.”** → Check the filename and that the file is uploaded to Resources
- **Compilation takes >2 minutes** → Large documents or missing packages; simplify or ask admin to install needed packages
- **PDF blank or missing** → The workflow may have failed; admin can check GitHub Actions logs

---

## Need a Custom Document Class?

If your institution provides a `.cls` file, upload it to Resources and `\documentclass{institution}`. Make sure the compile workflow includes that file in the build directory.

---

**Next**: Learn to [track tasks and grants](/how-to/stay-on-track).
