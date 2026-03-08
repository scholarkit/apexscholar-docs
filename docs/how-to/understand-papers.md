# How to Understand Papers with AI Insights

Reading every paper in depth is impossible. Apex Scholar uses AI to extract structured summaries from abstracts so you can quickly grasp the essence of a paper and compare it to others.

---

## What Are AI Insights?

When you click **Analyze** on a saved paper, the app sends its abstract to an AI model (e.g., Gemini or Moonshot). The AI returns a structured set of fields:

- **Problem**: What gap or question does the paper address?
- **Task**: The specific task (e.g., classification, segmentation, prediction)
- **Domain**: Application area (e.g., healthcare, finance, robotics)
- **Method**: The algorithm or approach used (e.g., "transformer encoder", "random forest")
- **Key Ideas**: Bullet points of novel contributions
- **Assumptions**: What the authors assume to be true
- **Limitations**: Known weaknesses or constraints
- **Contributions**: What the paper adds to the field
- **Datasets**: Names and sizes of datasets used
- **Metrics**: Evaluation metrics (e.g., accuracy, F1 score)
- **Future Work**: Authors’ suggested next steps
- **Confidence**: How confident the AI is in the extraction (higher is better)

You can edit any field after analysis if you spot errors.

---

## Generating Insights for a Paper

1. Go to **Insights** in the sidebar
2. You’ll see a list of your saved papers (from the current project)
3. Click the **Analyze** button on a paper row
4. Wait a few seconds; a spinner indicates processing
5. The insights panel below the list will populate

If your API key is missing or the AI service is down, you’ll see an error. Contact your administrator.

---

## Understanding the Knowledge Graph

The Knowledge Graph is a visual representation of concepts across your analyzed papers.

### When Does It Appear?

After you have at least 5 papers with insights (or when you click **Generate Knowledge Graph**). The graph shows nodes (concepts) and edges (relationships).

### How to Read It

- **Nodes**: Each circle is a concept (e.g., "transformer", "LSTM", "time series")
- **Edges**: Lines connecting nodes that appear together in papers
- **Clusters**: Groups of nodes that belong to the same sub-field
- **Size**: Larger nodes are more frequent across your papers

### Interactions

- **Pan**: Click and drag the background
- **Zoom**: Mouse wheel or touchpad pinch
- **Move nodes**: Drag any node to rearrange
- **Hover**: See concept name and which papers mention it

### Why It’s Useful

The graph helps you spot:

- **Sparse areas**: Few nodes → potentially unexplored territory
- **Separate clusters**: If two clusters have no edges, maybe they’re not talking to each other—potential for novel cross-pollination
- **Missing connections**: A concept that should link two clusters but doesn’t

Use this to refine your research question and position your work in the literature.

---

## Editing Insights

AI isn’t perfect. If you notice an error:

1. In the Insights panel, click in any text field
2. Correct the mistake (e.g., fix a dataset name, adjust the method)
3. The change is saved automatically

Your edits improve your personal dataset and may help future AI training (depending on configuration).

---

## Tips for Better Insights

- **Full abstracts work best**. The AI needs context; very short or truncated abstracts may yield incomplete results.
- **Consistency**: Standardize method names (e.g., always use "Transformer" not "transformer" or "BERT") so the graph looks clean.
- **Bulk analysis**: If you have many papers, analyze them in batches to avoid hitting API rate limits.

---

## What If the AI Misunderstands?

AI extraction is not perfect. Treat insights as a **first draft** that guides your deeper reading. Always verify critical points by reading the original paper.

If systematic errors occur (e.g., all APA citations malformed), report the issue so we can improve the extraction prompts.

---

## Using Insights in Your Work

- **Literature matrix**: Export insights to a spreadsheet and create a comparison table for your systematic review
- **Gap identification**: Look at “Limitations” and “Future Work” fields to find open problems
- **Method selection**: Filter by “Method” to see which algorithms are most common in your field
- **Write related work**: Copy-paste contributions and key ideas into your manuscript draft

---

## Troubleshooting

### Analysis fails with “API key missing”

Your instance hasn’t set up the `MOONSHOT_API_KEY` or another AI provider. See the Configuration guide for admins.

### Insights panel stays blank

Make sure you’ve selected a paper from the list first. The panel shows insights for the selected paper only.

### Confidence score is low (< 60)

The AI is uncertain. Consider reading the abstract yourself and manually filling the fields. Low confidence often occurs with poorly written abstracts or highly technical jargon outside the model’s training.

---

**Now that you understand your papers**, learn to [write your own manuscript with LaTeX](/how-to/write-paper).
