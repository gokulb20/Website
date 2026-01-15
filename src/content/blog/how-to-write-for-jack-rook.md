---
title: "How to Write for Jack Rook"
date: 2026-01-14
category: "competence"
excerpt: "The simple workflow for adding essays to The Library using ChatGPT and GitHub."
image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80"
readTime: "3 min"
---

Adding an essay to The Library takes five minutes. Here's the workflow.

## Step 1: Write with ChatGPT

Open ChatGPT and write your essay. When you're happy with it, ask ChatGPT to format it as a Jack Rook blog post with this template at the top:

```
---
title: "Your Title Here"
date: 2026-01-15
category: "competence"
excerpt: "One sentence that hooks the reader."
image: "https://images.unsplash.com/photo-xxx?w=600&q=80"
readTime: "5 min"
---

Your essay content here...
```

**Category must be one of:** `competence`, `composure`, or `character`.

For the image, go to Unsplash.com, find something that fits, and copy the image URL. Add `?w=600&q=80` at the end.

## Step 2: Create the File

Go to the GitHub repository in your browser. Navigate to:

```
src/content/blog/
```

Click **Add file** → **Create new file**.

Name it something URL-friendly like `the-art-of-discipline.md` (lowercase, hyphens, ends in `.md`).

Paste your formatted essay from ChatGPT.

## Step 3: Push with Codex

At the bottom of the page, you'll see a commit message field. Write something simple like "Add new essay: The Art of Discipline".

Click **Commit new file**.

That's it. GitHub accepts the change immediately.

## Step 4: Watch It Go Live

Netlify watches the GitHub repository. Within 60 seconds of your commit, it automatically rebuilds the site and deploys the new version.

Your essay is now live at `jackrook.com/library/the-art-of-discipline`.

## The Three Pillars

Every essay must fit one category:

**Competence** — Skills, craft, expertise. How to do things well.

**Composure** — Emotional regulation, stress management, presence. How to remain steady.

**Character** — Values, integrity, principles. Who to become.

If your topic spans multiple, choose the dominant one.

## Voice Guidelines

Write like you're explaining something to a younger version of yourself. Direct, not condescending. Confident, not arrogant.

- Use concrete examples over abstract principles
- Share personal experience where relevant
- State strong positions clearly
- Cut every unnecessary word

## Before You Publish

Ask yourself:

1. Would I want to read this?
2. Does it teach something actionable?
3. Is this advice I'd give my own son?
4. Have I removed every unnecessary word?

If yes to all four, commit it.

> "Easy reading is damn hard writing." — Nathaniel Hawthorne
