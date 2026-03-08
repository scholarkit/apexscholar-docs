# How to Stay on Track: Kanban and Grants

Research isn’t just about reading—you also need to manage tasks, deadlines, and funding. Apex Scholar includes a Kanban board and a grant tracker to help you stay organized.

---

## Using the Kanban Board

The Kanban board visualizes your workflow as columns of cards.

### Columns

By default:

- **To Do**: tasks not started
- **Reading**: papers you plan to read or are reading
- **Analysis**: data analysis, experiments
- **Writing**: manuscript drafts, responses
- **Review**: waiting for feedback
- **Done**: completed tasks

You can rename or reorder columns in a future release.

### Creating a Task

1. Click **+ Add Task** at the bottom of any column
2. Enter a **title** (required) and optional **description**
3. Set a **due date** (calendar picker)
4. Add **labels** (comma-separated) like `paper`, `experiment`, `meeting`
5. Optionally link to a saved resource (paper)
6. Click **Create**

The task card appears in that column.

### Moving Tasks

Drag a card horizontally to change its column (status). Drag vertically to reorder within the column.

The change is saved automatically.

### Task Details

Click a card to open its detail view. Here you can:

- Edit title, description (Markdown supported)
- Change due date
- Add/remove labels
- Attach a resource (paper) from your library
- See activity log (who changed what, timestamps)
- Delete the task

### Using Kanban Effectively

- Break large goals into tiny tasks: instead of "write paper", create tasks like "draft introduction", "make figure 3", "email co-author"
- Limit work in progress: no more than 3–5 tasks in active columns to avoid multitasking
- Review daily: move stuck tasks, update progress
- Use due dates to prioritize

---

## Tracking Grants and Funding

The **Funding** page helps you manage grant applications, scholarships, and project budgets.

### Creating a Grant Record

1. Click **Funding** in the sidebar
2. Click **+ New Grant**
3. Fill in the fields:

| Field | What to enter |
|-------|---------------|
| Title | Name of the grant (e.g., "NSF CAREER 2026") |
| Funder | Agency (e.g., "National Science Foundation") |
| Amount | Total award in USD (e.g., 500000) |
| Deadline | Submission deadline (pick from calendar) |
| Status | Draft, Submitted, Under Review, Awarded, Rejected |
| Checklist | List of required items (proposal, budget, letters) |
| Documents | Links to uploaded files (budget spreadsheet, draft PDF) |
| Notes | Anything else to remember |

4. Click **Save**

The grant appears in the table with a colored badge for status and days-remaining indicator.

### Using the Checklist

Many grants have specific required components (e.g., "Broader Impacts Statement", "Budget Justification", "Data Management Plan"). Create a checklist and check items off as you complete them. This ensures you don’t miss anything before the deadline.

### Monitoring Deadlines

- In the Funding table, the **Days Remaining** column shows how many days left
- Red text means deadline is today or past
- Orange means within 7 days
- Green is safe

Set personal internal deadlines ahead of the official deadline to give buffer time.

---

## Putting It Together

Example workflow for a paper submission:

1. Create a project: "Manuscript – Efficient Transformers"
2. Save relevant papers to Resources
3. Review insights and generate knowledge graph
4. Create a grant record if you’re applying for funding
5. Add Kanban tasks: literature review outline, experiment design, writing each section, figure creation, submission
6. Move tasks across columns as you work
7. Use the Composr to write the manuscript in LaTeX
8. Track deadline on the grant record or add a task with due date

---

## Tips

- Attach resources to Kanban tasks for quick access ("Read this paper" task → link the resource)
- Use consistent label names to filter mentally (e.g., always `reading` not `read` or `to-read`)
- Review the grant checklist weekly; it’s easy to overlook a “Biographical Sketch” until the last minute
- Archive old grants after they’re final to keep the list clean (delete after backing up)

---

## Troubleshooting

### Kanban tasks not moving

Make sure you’re dragging far enough; the drop targets are small. If it still doesn’t move, check browser console for errors and report.

### Grant deadline warning not showing

The table recalculates on load. If you just set a deadline, save and refresh the page or check back later.

---

**Next**: [Generate citations quickly](/how-to/cite-export)
