# How to Write and Compile a Paper with LaTeX

Apex Scholar includes a built-in LaTeX editor that compiles your manuscript to PDF with one click—no local TeX installation needed.

---

## When to Use the Editor

- Writing research papers
- Preparing grant proposals
- Composing theses or technical reports
- Creating slides with Beamer (coming soon)

If you’re comfortable with Microsoft Word, you can still use Word and upload the PDF, but LaTeX produces publication-quality typesetting and is the standard in many fields.

---

## Opening the Editor

Click **Composr** in the sidebar.

The first time, you’ll see an empty editor and a template dropdown.

---

## Creating a New Document

1. Click **New Document**
2. Choose a template:
   - **Blank** – start from scratch
   - **Article** – standard research paper (with title, abstract, sections)
   - **Report** – longer documents with chapters
   - **Book** – multi-chapter books (rarely used)
3. Give your document a name (e.g., `my-paper.tex`)
4. Click **Create**

The editor opens with pre-filled content if you chose a template.

---

## Writing LaTeX

The editor is a CodeMirror instance with LaTeX syntax highlighting.

### Basic Structure

```latex
\documentclass{article}
\usepackage{graphicx}
\title{My Research Paper}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle

\begin{abstract}
  This is a short summary of my paper.
\end{abstract}

\section{Introduction}
Here is where you introduce the problem and background.

\section{Methods}
Describe your approach.

\section{Results}
Show your findings with figures: \ref{fig:example}.

\bibliography{references}
\bibliographystyle{plain}
\end{document}
```

You can copy/paste from Overleaf or any LaTeX editor.

---

## Adding Figures

Upload a PDF, PNG, or JPG to your Resources first. Then reference it:

```latex
\begin{figure}[h]
  \centering
  \includegraphics[width=0.8\textwidth]{my-figure.png}
  \caption{Important result}
  \label{fig:example}
\end{figure}
```

Make sure the filename exactly matches (including extension) and that the file is in your project’s storage.

---

## Compiling to PDF

1. Click the **Compile** button (top right of editor)
2. Wait a few seconds (typically 5–15)
3. A PDF preview appears on the right panel
4. Click **Download PDF** to save locally

If compilation fails, you’ll see an error. Common causes:

- Syntax error (unclosed brace, missing backslash)
- Missing package (e.g., `\usepackage{...}` for something you used)
- Figure file not found

Check the error message and fix your source, then compile again.

---

## Using BibTeX for References

You can include a `references.bib` file in the same folder as your `.tex` file.

1. Upload your `.bib` file to Resources
2. In your LaTeX source: `\bibliography{references}` (no `.bib` extension)
3. Compile

If citations don’t appear, you may need to run BibTeX manually—our simple compile workflow may need adjustment for complex bibliographies. Contact your admin if you need full BibTeX support.

---

## Templates and Shortcuts

Save a well-structured paper as a template for future use:

1. Write your preferred preamble and section layout
2. Save the `.tex` file to Resources with a name like `template-article.tex`
3. Next time, duplicate it (copy/paste content) and rename

---

## Troubleshooting

### “Compilation failed” after 2 minutes

The GitHub Actions workflow may have timed out or encountered a package error. Check the logs in the `scholarkit/LaTex` repository’s Actions tab (admin access required). Common fixes:

- Install missing LaTeX packages via the workflow’s `apt-get install`
- Simplify your document to isolate the error (comment out sections and recompile)

### PDF preview is blank

The compile may have succeeded but the artifact wasn’t found. Ensure the workflow outputs a file named `manuscript.pdf` in the artifact named `pdf`. See admin’s LaTeX Workflow documentation.

### Images not appearing

Check the image path. It should be just the filename if the file is in the same directory. If in a subfolder, include the path: `\includegraphics{figures/my-fig}`.

Make sure the image was uploaded to Resources.

---

## Tips for a Smooth Workflow

- Write in short sessions and compile often to catch errors early
- Keep packages minimal to speed up compilation
- Use online LaTeX editors (Overleaf) to debug complex issues, then paste final source into Apex Scholar
- For long documents, split into `\input{chapter1.tex}` files and upload each part

---

## Limitations

- The simple compile workflow runs `pdflatex` twice. For complex documents requiring `makeglossaries` or `biber`, custom workflow modifications are needed (ask admin).
- Large documents (>50 pages) may take longer to compile.
- Custom document classes (`.cls`) are supported if the workflow has those files in its repository.

---

**Next**: [Stay on track with Kanban and Grants](/how-to/stay-on-track)
