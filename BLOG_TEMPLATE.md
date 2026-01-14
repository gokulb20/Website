# How to Add Blog Posts to Jack Rook

## Quick Start

1. Create a new file in `src/content/blog/` with a URL-friendly name
2. Copy the template below
3. Fill in your content
4. Push to GitHub - Netlify auto-deploys

---

## File Naming

Name your file with lowercase letters and hyphens:
- `the-art-of-discipline.md`
- `what-your-father-never-told-you.md`
- `grace-under-pressure.md`

The filename becomes the URL: `jackrook.com/library/the-art-of-discipline`

---

## Full Template

Copy this entire block into your new `.md` file:

```markdown
---
title: "Your Article Title Here"
date: 2026-01-15
category: "competence"
excerpt: "A one-sentence hook that appears on the Library page cards."
image: "https://images.unsplash.com/photo-XXXXXXXXX?w=600&q=80"
readTime: "5 min"
---

Your article content starts here. Write in plain text or use markdown formatting.

## Section Headings

Use `##` for main sections within your article.

### Subsections

Use `###` for subsections.

Here's a paragraph of regular text. You can make words **bold** or *italic*.

> This is a blockquote. Use it for important quotes or callouts.

You can also create lists:

- First point
- Second point
- Third point

Or numbered lists:

1. Step one
2. Step two
3. Step three
```

---

## Required Fields Explained

| Field | Description | Example |
|-------|-------------|---------|
| `title` | The headline shown on the article page | `"The Art of Showing Up"` |
| `date` | Publication date (YYYY-MM-DD format) | `2026-01-15` |
| `category` | Must be one of: `competence`, `composure`, `character` | `"competence"` |
| `excerpt` | Short description for Library page cards (1-2 sentences) | `"Most men fail not from lack of talent..."` |
| `image` | URL for the featured image | See below |
| `readTime` | Estimated reading time | `"5 min"` |

---

## Finding Images

Use Unsplash for free, high-quality images:

1. Go to https://unsplash.com
2. Search for relevant keywords (e.g., "professional man", "discipline", "books")
3. Click on an image you like
4. Right-click the image and select "Copy image address"
5. Paste into the `image` field, add `?w=600&q=80` at the end for optimization

Example:
```
image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80"
```

---

## Categories

Each post must have ONE category:

- **competence** - Skills, productivity, craft, expertise
- **composure** - Emotional control, stress management, stoicism
- **character** - Values, integrity, ethics, principles

---

## Example: Complete Blog Post

Here's a full example you can reference:

**File:** `src/content/blog/the-power-of-routine.md`

```markdown
---
title: "The Power of Routine"
date: 2026-02-01
category: "competence"
excerpt: "Discipline isn't about motivation. It's about systems."
image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80"
readTime: "6 min"
---

Every successful man I've studied has one thing in common: a morning routine they never skip.

This isn't about productivity hacks or optimization. It's about building a foundation so solid that the rest of your day has no choice but to follow.

## Why Routines Matter

The brain craves predictability. When you remove decision fatigue from your mornings, you preserve willpower for the battles that actually matter.

> "We are what we repeatedly do. Excellence, then, is not an act, but a habit." — Aristotle

## Building Your Foundation

Start with three non-negotiables:

1. **Wake at the same time** - No exceptions on weekends
2. **Move your body** - Even 10 minutes counts
3. **Protect the first hour** - No phone, no email, no inputs

## The Compound Effect

These small acts stack. In a month, you'll notice the difference. In a year, you'll be unrecognizable to your former self.

The question isn't whether you have time for a routine. It's whether you can afford not to have one.
```

---

## Publishing Workflow

### Option A: Using GitHub Web Interface

1. Go to your repository on GitHub
2. Navigate to `src/content/blog/`
3. Click "Add file" → "Create new file"
4. Name it `your-post-title.md`
5. Paste your content
6. Click "Commit new file"
7. Netlify auto-deploys in ~1 minute

### Option B: Using ChatGPT

1. Tell ChatGPT what you want to write about
2. Ask it to format as a Jack Rook blog post with the frontmatter template
3. Copy the output
4. Create the file using Option A

---

## Troubleshooting

**Post not showing up?**
- Check that all required fields are present
- Make sure `category` is exactly one of: `competence`, `composure`, `character`
- Verify the date format is `YYYY-MM-DD`
- Ensure the file ends in `.md`

**Image not loading?**
- Check the URL is complete and valid
- Make sure there are no spaces in the URL
- Try opening the image URL directly in a browser

**Build failing?**
- Check Netlify deploy logs for specific error messages
- Usually it's a typo in the frontmatter

---

## Need Help?

The Library will show "Coming soon" placeholders until you add posts. Once you add 3+ posts, the grid will fill naturally.

For questions, reach out to your developer or consult the Astro docs: https://docs.astro.build
