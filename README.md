# The Otto & Gus Show — Website

Hi Otto. Hi Gus. This is your website.

It's built with plain HTML, CSS, and a tiny bit of JavaScript — no React, no build step, no `npm install`. You can edit any page in a text editor, save the file, and refresh your browser to see changes immediately.

---

## 🚀 Run it on your computer

The fastest way:

1. Open the folder `otto-gus-site` in your file explorer.
2. Double-click `index.html`.
3. It opens in your browser. Done.

That works for browsing. But if you want auto-refresh while editing, run a tiny local server:

```bash
# From inside the otto-gus-site folder, run ONE of these:
python -m http.server 8000        # if you have Python
npx serve                         # if you have Node.js
```

Then open `http://localhost:8000` in your browser.

---

## 📂 What's in here

```
otto-gus-site/
├── index.html              ← Home page
├── episodes.html           ← All episodes (the grid page)
├── about.html              ← Who you are
├── watch.html              ← Embedded YouTube + podcast links
├── contact.html            ← Contact form
├── style-guide.html        ← Design system reference (just for you)
│
├── css/
│   ├── colors.css          ← 🎨 EDIT THIS to change any color
│   └── main.css            ← All the layout & components
│
├── js/
│   └── script.js           ← Mobile menu, filters, form handler
│
├── README.md               ← This file
└── CUSTOMIZATION-GUIDE.md  ← Detailed how-to for common changes
```

The single most important file: **`css/colors.css`**. Change a value there, the whole site re-themes itself.

---

## ✏️ Three things you'll do most often

### 1. Add a new episode

Open `episodes.html`. Find the comment that says `<!-- ===== EPISODE 042 — NEWEST ===== -->`. Copy that whole `<article>` block, paste it just above, and change:

- The image `src`
- The episode number, title, and description
- The publish date and duration
- Add `<span class="badge badge--new">NEW</span>` to the new one — and **remove it** from the old episode.

Full template + walkthrough is in [CUSTOMIZATION-GUIDE.md](CUSTOMIZATION-GUIDE.md).

### 2. Swap the YouTube video on `watch.html`

Find the `<iframe>` line. Replace the video ID in the URL:

```html
<!-- Before -->
src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0..."

<!-- After (your real video ID) -->
src="https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID?rel=0..."
```

The video ID is the bit after `v=` in any YouTube URL.

### 3. Change a color

Open `css/colors.css`. Pick a variable. Change the hex code. Save. Refresh.

```css
/* Before */
--color-nvidia-green: #76B900;

/* After (your favorite shade) */
--color-nvidia-green: #00FF88;
```

The whole site updates. No other file needs changes.

---

## 🎨 The design fusion

This site is a remix of three design systems:

- **NVIDIA green** (`#76B900`) — primary brand & buttons (technical, powerful)
- **PlayStation cyan** (`#00A8E1`) — links & hover states (gaming energy)
- **Nintendo red** (`#E60012`) — NEW badges & alerts (playful + grabby)

Open `style-guide.html` in your browser to see every color, button, badge, and card the site uses.

---

## 🛠 Editor recommendations

Any text editor works, but these make life nicer:

- **VS Code** ([code.visualstudio.com](https://code.visualstudio.com)) — free, has live preview extensions
- **Sublime Text** — fast, simple
- Even **Notepad** works in a pinch — just save with the right `.html` / `.css` extension

Save with **UTF-8** encoding so emoji and special characters don't break.

---

## 📤 Putting it on the internet

When you're ready to host it, the easiest free options:

- **Netlify Drop** — drag the whole `otto-gus-site` folder onto [app.netlify.com/drop](https://app.netlify.com/drop). Live URL in 30 seconds.
- **Vercel** — same idea, super fast.
- **GitHub Pages** — push the folder to a repo, turn on Pages in settings. Free forever.

Ask dad to help with the domain (`ottogusshow.com`).

---

## ❓ Common gotchas

| Problem | Fix |
|---|---|
| Changes not showing up | Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac) |
| Site looks unstyled / "naked" | The CSS isn't loading — check the `<link rel="stylesheet" href="css/main.css">` line is intact |
| YouTube embed shows "Video unavailable" | The video is private or the ID is wrong. Double-check the ID. |
| Mobile menu doesn't open | `js/script.js` failed to load — check the path on the `<script src="...">` line at the bottom of each page |
| Form doesn't actually send | Right — it's a demo. See `CUSTOMIZATION-GUIDE.md` for connecting it to Formspree or Netlify Forms. |

---

## 🤘 Have fun

This is your project. Break stuff. Try weird color combos. Add new pages. The whole point is that it's editable, and the worst case is `Ctrl+Z`.

— Built with NVIDIA green, PlayStation cyan, and Nintendo red.
