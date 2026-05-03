# Customization Guide

A step-by-step reference for the most common edits. If you've never touched HTML before, start at the top — each section is self-contained.

---

## 🎨 Change a color (the whole site at once)

All colors are CSS variables in **one file**: `css/colors.css`.

1. Open `css/colors.css`
2. Find the variable you want to change. Each one has a comment explaining where it's used.
3. Change the hex value (the `#XXXXXX` code).
4. Save. Refresh your browser.

### Example — make the brand color hot pink

```css
/* Before */
--color-nvidia-green: #76B900;

/* After */
--color-nvidia-green: #FF1493;
```

That's it. Every button, badge, and glow on every page updates.

### Where to find good colors

- **[coolors.co](https://coolors.co)** — generate harmonious palettes
- **[imagecolorpicker.com](https://imagecolorpicker.com)** — pull a hex code out of any image
- **[realtimecolors.com](https://realtimecolors.com)** — preview combinations

### The variables you'll most likely change

| Variable | Where it shows up |
|---|---|
| `--color-nvidia-green` | Primary buttons, brand logo, NEW badge glow |
| `--color-ps-cyan` | Links, hover states, secondary buttons |
| `--color-nintendo-red` | NEW and LIVE badges, urgent alerts |
| `--color-bg` | Page background |
| `--color-surface` | Cards |
| `--color-text` | All headlines and body text |

---

## ➕ Add a new episode

Episodes live on `episodes.html` (and one featured one on `index.html`).

### Step 1 — copy the template

Open `episodes.html`. Find this comment block:

```html
<!-- ===== EPISODE 042 — NEWEST ===== -->
<article class="episode-card" data-tag="tech">
  ...
</article>
```

Copy the entire `<article>` block (from `<article` to `</article>`).

### Step 2 — paste it at the top

Paste it directly **above** the existing newest episode, so the most recent one is always first.

### Step 3 — fill in your content

Update each piece:

```html
<article class="episode-card" data-tag="tech">  <!-- CHANGE: tech | gaming | robotics | qa -->
  <a class="episode-card__media" href="watch.html">
    <img src="https://via.placeholder.com/400x225/0A0A0A/76B900?text=Episode+43"
         alt="Episode 43 thumbnail" loading="lazy" />            <!-- CHANGE: image + alt text -->
    <div class="episode-card__badges">
      <span class="badge badge--new">NEW</span>                  <!-- KEEP: only on the newest -->
    </div>
    <div class="episode-card__duration">38:22</div>              <!-- CHANGE: duration -->
  </a>
  <div class="episode-card__body">
    <div class="episode-card__meta">
      <span>EP 43</span>                                         <!-- CHANGE: episode number -->
      <span class="episode-card__meta-dot"></span>
      <span>May 05, 2026</span>                                  <!-- CHANGE: date -->
    </div>
    <h3 class="episode-card__title">Your title here</h3>         <!-- CHANGE: title -->
    <p class="episode-card__desc">                               <!-- CHANGE: 2–3 sentence description -->
      Two or three sentences describing the episode. Be casual.
      End with something funny or a hook.
    </p>
    <div class="episode-card__footer">
      <span class="episode-card__num">// 043</span>              <!-- CHANGE: zero-padded episode number -->
      <a class="btn btn--ghost btn--sm" href="watch.html">Watch →</a>
    </div>
  </div>
</article>
```

### Step 4 — remove the NEW badge from the old one

Find the previous newest episode (now the second one in the list) and **delete** this line:

```html
<span class="badge badge--new">NEW</span>
```

Only the freshest episode should have NEW.

### Step 5 — update `index.html` too

The home page features the latest episode in a big card. Open `index.html`, find the comment `<!-- ===== EPISODE CARD TEMPLATE START =====`, and update the same fields there to match your new episode.

---

## 🖼 Replace a thumbnail image

The placeholder service `via.placeholder.com` is fine for now, but you'll want real thumbnails eventually.

### Option A — host on YouTube (easiest)

YouTube auto-generates a thumbnail at this URL pattern (replace `VIDEO_ID`):

```
https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg
```

Use that URL directly in the `<img src="...">` tag.

### Option B — store locally

1. Make a folder called `images/` inside `otto-gus-site/`
2. Drop your thumbnails in there as `ep-042.jpg`, `ep-043.jpg`, etc.
3. Update the `src`:

```html
<img src="images/ep-042.jpg" alt="Episode 42 thumbnail" />
```

Recommended size: **1280 × 720** pixels (the same as YouTube). JPG for photos, PNG if you have a logo with transparency.

---

## 🎥 Swap the YouTube video on watch.html

Open `watch.html`. Find the `<iframe>` line near the top of the file.

```html
<iframe
  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
  ...
></iframe>
```

The video ID is `dQw4w9WgXcQ` in this example. Find the YouTube URL of your real episode — for example `https://youtu.be/aBcDeFgHiJk` — and replace the ID:

```html
src="https://www.youtube-nocookie.com/embed/aBcDeFgHiJk?rel=0&modestbranding=1"
```

Keep `youtube-nocookie.com` (privacy-friendly) and the `?rel=0&modestbranding=1` querystring (hides related videos and YT branding).

Also update the page's title, description, and meta info just below the iframe.

---

## 📱 Update social media handles

The handles are sprinkled across all 5 pages (in the navigation footer).

### Quick way (find-and-replace)

In your editor:

1. Press `Ctrl + Shift + F` (or `Cmd + Shift + F` on Mac) — that's "search across all files"
2. Search for: `@ottogusshow`
3. Replace with: your real handle

Then update the `href="#"` on each social link in the footer to point to your real profile URL:

```html
<!-- Before -->
<a class="social" href="#" aria-label="YouTube">

<!-- After -->
<a class="social" href="https://youtube.com/@yourchannel" aria-label="YouTube">
```

---

## 📨 Make the contact form actually send messages

Right now the form just shows a success message — it doesn't send anywhere. Two easy ways to fix that:

### Option A — Formspree (3 minutes, free)

1. Sign up at [formspree.io](https://formspree.io) (free tier is plenty)
2. Create a new form. They give you a URL like `https://formspree.io/f/abc123`
3. In `contact.html`, find the `<form>` tag and update it:

```html
<!-- Before -->
<form class="form" data-contact-form>

<!-- After -->
<form class="form" action="https://formspree.io/f/abc123" method="POST">
```

4. Open `js/script.js` and **delete or comment out** the section labeled "3. Contact form — local-only fake submit" — otherwise it'll block the real submission.

### Option B — Netlify Forms (free if hosting on Netlify)

If you host on Netlify, you can add `netlify` to the form tag and it just works:

```html
<form class="form" name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  ...
</form>
```

---

## ✏️ Change site-wide text (show name, tagline, description)

The show name appears on **every page** in the navigation and footer.

| What | Where |
|---|---|
| Show name in nav | Search `The Otto & Gus Show` in every `.html` file |
| Show name in browser tab | The `<title>` tag near the top of each page |
| Tagline | "Tech, Gaming, and Everything In Between" — search for it |
| Description (for Google) | The `<meta name="description" content="...">` tag |
| Email address | Search `hello@ottogusshow.com` |
| Copyright year | Footer of each page — search `© 2026` |

Use find-and-replace across all files (`Ctrl + Shift + F`) to update everything at once.

---

## 🎬 Add a brand-new page

Want to add a `merch.html` or `blog.html`? Easiest path: copy an existing page.

1. Make a copy of `about.html` and rename it `merch.html`
2. Edit the `<title>` tag and the page content
3. Add a new link to the navigation in **every** existing HTML file:

```html
<li><a class="nav__link" href="merch.html">Merch</a></li>
```

4. On `merch.html` itself, add `nav__link--active` to the merch link so the active-page glow shows up.

---

## 🐛 Things that look wrong, and the fix

| Symptom | Likely cause |
|---|---|
| All text is unstyled (Times New Roman, no colors) | The `<link rel="stylesheet" href="css/main.css">` tag is broken or missing |
| Buttons don't have rounded corners or glow | Same — CSS isn't loading |
| Mobile menu button does nothing | `js/script.js` isn't loading. Check the `<script src="js/script.js">` at the bottom of the page |
| Episode cards all show in one column on desktop | Browser window is too narrow or the `.episode-grid` class got removed |
| YouTube video shows "Video unavailable" | Wrong video ID or video is private/unlisted with embed disabled |
| Form submits but nothing happens | Form is in demo mode — see "Make the contact form actually send" above |
| New `<style>` you added doesn't apply | CSS specificity — try `!important` once to confirm it's a specificity issue, then refactor |

---

## 🆘 If you really break something

Every editor has undo (`Ctrl + Z`). Hammer it.

If you saved a broken state and panic:

1. Don't change anything else
2. Open this folder in dad's terminal
3. If it's a git repo: `git status` and then `git checkout filename.html` to restore
4. If it's not a git repo, hopefully you saved a backup — drag the original file from your trash/recycle bin back into the folder

Better yet: every time you make a big change you're proud of, copy the whole folder somewhere as a backup (`otto-gus-site-2026-05-02/`).

---

## 📚 Where to learn more

- **HTML & CSS basics** — [MDN Learn](https://developer.mozilla.org/en-US/docs/Learn) (the official, free, best place)
- **CSS tricks** — [css-tricks.com](https://css-tricks.com)
- **YouTube tutorials** — search "HTML CSS for beginners" — Kevin Powell is great

You don't need to know everything. You can build this site for years just by editing what's already here.

— GLHF.
