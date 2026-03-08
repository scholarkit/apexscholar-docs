# How to Find and Save Papers

One of the most common tasks in Apex Scholar is discovering relevant research and saving it to your library. This guide shows you how.

---

## Step 1: Open the Explore Page

In the sidebar, click **Explore**.

You’ll see a large search box and toggles for different sources.

---

## Step 2: Enter Your Search Query

Type a natural language query or keywords:

- "machine learning for drought prediction"
- "CRISPR gene editing ethics"
- "blockchain supply chain transparency"

Press **Enter** or click the search button.

---

## Step 3: Choose Your Sources

By default, the search checks:

- **ArXiv** – preprints in physics, CS, math, etc.
- **Google Scholar** – broad scholarly coverage (requires API key)
- **PubMed** – biomedical & life sciences (requires API key)
- **Semantic Scholar** – AI, biomed, many fields
- **OpenAlex** – open bibliography across all disciplines

Toggle any source on/off depending on your field.

---

## Step 4: Review Results

Results appear in a table with:

- **Title** (linked to the original paper)
- **Authors**
- **Year**
- **Source** (where it came from)
- **Abstract** (collapsed by default; click to read more)
- **Actions** – bookmark icon to save

---

## Step 5: Save a Paper

Click the **bookmark icon** (📖) next to a result.

The paper is added to your **Resources** (library) and automatically associated with your current project.

You can save as many as you like. There’s no hard limit.

---

## Step 6: (Optional) Tag Your Saved Papers

Go to **Resources** in the sidebar.

Find the paper you saved. Click the **tag icon** to add tags like "must-read", "methodology", "theory", etc. This helps you filter later.

---

## Tips for Better Searches

- **Use specific keywords**: "transformer time series forecasting" works better than just "AI"
- **Include author names** if you’re following a specific researcher
- **Add years** to narrow to recent work: "2023..2025"
- **Combine terms** with AND/OR if your query is too broad or too narrow

---

## What If a Source Returns No Results?

Each source covers different areas:

- PubMed is biomedical only; a computer science query may return nothing
- ArXiv is preprints (not peer-reviewed journal articles)
- Google Scholar covers broadly but may hit rate limits if many users share the same API key

Try switching sources or simplifying your query.

---

## Saving Papers from Multiple Sources

You can run the same search with different sources enabled. Apex Scholar deduplicates based on DOI or title, so the same paper won’t be saved twice.

---

## Next Steps After Saving Papers

- Generate **Insights** on the Insights page to get AI summaries
- View the **Knowledge Graph** to see how concepts connect
- Organize papers by project using the project dropdown

---

## Troubleshooting

### "SERPAPI_API_KEY missing" appears

The instance you’re using hasn’t configured a Google Scholar API key. You can still use ArXiv, Semantic Scholar, and OpenAlex without additional keys. For full functionality, see the admin’s Configuration guide.

### Search is slow

External APIs have rate limits. Be patient; the app will batch requests when possible. If it fails, try again in a few seconds.

### I saved a paper but can’t find it

Make sure you’re in the correct **project** (check the project dropdown). Saved resources are scoped to the active project.

---

**Now that you have papers**, learn how to [understand them quickly with AI](/how-to/understand-papers).
