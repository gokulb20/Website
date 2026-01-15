---
title: "How to Write for Jack Rook"
date: 2026-01-14
category: "competence"
excerpt: "The simple workflow for adding essays to The Library using ChatGPT."
image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80"
readTime: "2 min"
---

Adding an essay to The Library takes two minutes. Here's the workflow.

## Step 1: Write in ChatGPT

Open ChatGPT and write your essay. Talk through your ideas, refine them, get it how you want it.

## Step 2: Ask ChatGPT to Publish It

Once you're happy with the essay, tell ChatGPT:

> "Format this as a Jack Rook blog post and add it to the repository."

ChatGPT (with Codex connected) will:
1. Format it with the right template
2. Create the file in `src/content/blog/`
3. Push it to GitHub automatically

## Step 3: Done

Netlify watches the repository. Within 60 seconds, your essay is live.

That's it. Write, ask to publish, it's live.

---

## The Template

For reference, every post needs this at the top:

```
---
title: "Your Title Here"
date: 2026-01-15
category: "competence"
excerpt: "One sentence hook."
image: "https://images.unsplash.com/photo-xxx?w=600&q=80"
readTime: "5 min"
---
```

**Category must be one of:** `competence`, `composure`, or `character`.

## The Three Pillars

**Competence** — Skills, craft, expertise. How to do things well.

**Composure** — Emotional regulation, presence. How to remain steady.

**Character** — Values, integrity, principles. Who to become.

## Voice

Write like you're explaining something to a younger version of yourself. Direct, not condescending. Confident, not arrogant.

- Concrete examples over abstract principles
- Personal experience where relevant
- Strong positions, clearly stated
- Every unnecessary word removed

## Before You Publish

1. Would I want to read this?
2. Does it teach something actionable?
3. Is this advice I'd give my own son?
4. Have I removed every unnecessary word?

If yes to all four, publish it.

> "Easy reading is damn hard writing." — Nathaniel Hawthorne
