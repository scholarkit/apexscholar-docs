# How to Save, Organize, and Cite Papers

Once you’ve found papers, you’ll want to keep them organized and be able to cite them in your own work. This guide covers tagging, projects, and citation generation.

---

## Saving Papers

On the **Explore** page, click the **bookmark icon** next to any result. That paper is automatically saved to your current project’s Resources.

You’ll see a small confirmation toast.

---

## Where Are Saved Papers?

Click **Resources** in the sidebar. You’ll see a list of all saved papers, newest first.

Each card shows:

- Title and authors
- Year and source
- Abstract (you can expand/collapse)
- Actions: **View PDF** (if you uploaded it), **Generate Citation**, **Chat** (if PDF), **Delete**

---

## Organizing with Projects

Projects are the top-level container for your research. Each project has its own separate library, insights, kanban, and grants.

### Switching Projects

Click the project dropdown in the top bar and select another project. The Resources list updates to show only that project’s papers.

### Creating a New Project

1. Click the project dropdown
2. Select **New Project**
3. Enter a name and optional description
4. Click **Create**

You might create projects like:

- "Dissertation Chapter 2 – Literature Review"
- "Grant: NSF CAREER 2026"
- "Side project – NLP for Legal Docs"

### Moving a Paper to Another Project

Currently, papers are saved to the active project at the time of saving. To move a paper:

1. Switch to the target project
2. Save the paper again from Explore
3. Delete the old copy from the original project

A future update will allow direct transfer between projects.

---

## Tagging Papers

Tags help you categorize within a project.

On the **Resources** page, open a paper’s card and click the **tag icon**. Add tags like:

- `must-read`
- `methodology`
- `theory`
- `related-work`
- `background`

You can later filter by tag (coming soon) or just use them as visual markers.

---

## Generating Citations

When writing a paper or grant, you’ll need to cite the work you’ve saved.

1. In **Resources**, find the paper
2. Click the **quote icon** (or "Generate Citation")
3. A modal opens with the citation in your selected style
4. Click **Copy** to copy to clipboard
5. Paste into your manuscript

### Supported Citation Styles

- BibTeX
- APA (7th edition)
- MLA (9th edition)
- Chicago (Author-Date)
- Harvard
- Vancouver

You can change the style in the modal’s dropdown. The app remembers your last choice.

---

## Importing and Exporting Backups

To protect against data loss, you can export your entire project as a JSON file.

### Export Backup

1. Go to **Settings**
2. Click **Export Backup**
3. A file downloads containing all your entries, resources, insights, kanban tasks, etc.

Store this file in a safe place (e.g., your university’s cloud storage).

### Restore from Backup

1. In Settings, click **Import Backup** (choose the JSON file you previously exported)
2. Confirm – this will overwrite current data
3. The app reloads with the restored data

> **Note**: Backups contain your data unencrypted if E2EE is disabled, or encrypted if E2EE was enabled at export. Restoring encrypted backups requires E2EE to be enabled and unlocked with the same passphrase.

---

## Bulk Operations

Currently, adding and organizing papers is done one by one. Future versions will support:

- Bulk tag assignment
- Bulk move between projects
- CSV import of bibliography

---

## Keeping Your Library Tidy

- Periodically review saved papers and delete ones that aren’t relevant
- Use consistent tag names (lowercase, no spaces)
- Archive old projects when they’re no longer active (delete after backup)
- Refresh insights if a paper’s abstract was updated on the source site

---

## Troubleshooting

### Citation looks wrong

Citation generation depends on the metadata that came from the search source. Sometimes fields like “journal” or “authors” are incomplete or malformed.

You can manually edit a resource’s metadata:

1. In Resources, click the **pencil icon** on the paper card
2. Correct the fields (title, authors, year, etc.)
3. Save
4. Regenerate citation

### I can’t find a saved paper

Double-check you’re in the correct project. Also use the search box on the Resources page (once implemented) or sort by date to locate recent saves.

---

**Next**: [Understand papers with AI insights](/how-to/understand-papers)
