# GrowFoundry Website

A modern, minimal, conversion-focused website for GrowFoundry, a digital marketing and business growth agency. Built with plain HTML, CSS and JavaScript — no build tools, no paid plugins, no frameworks — so it's free to host and easy to edit.

## 1. Folder structure

```
growfoundry-website/
├── index.html          Home page
├── about.html           About page
├── services.html        Services page (all 10 services)
├── portfolio.html        Portfolio page (filterable project grid)
├── contact.html          Contact page (form, WhatsApp, socials, map)
├── css/
│   └── style.css         All styling (one file, organised with comments)
├── js/
│   └── main.js            All interactivity (one file, organised with comments)
├── assets/
│   └── images/
│       └── favicon.svg     Site icon (matches the logo mark)
└── README.md              This file
```

Every visual "photo" on the site is currently a drawn SVG shape, not a real photo, so there's nothing copyrighted to worry about. Swap them for real photos whenever you're ready (see section 4).

## 2. Run the website locally

You don't need to install anything to preview the site — just open `index.html` in your browser by double-clicking it.

For the most accurate preview (matches how it will behave once deployed), run a tiny local server instead:

**Option A — Python (already installed on most computers):**
```bash
cd growfoundry-website
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

**Option B — VS Code "Live Server" extension:**
Install the free "Live Server" extension in VS Code, open the project folder, right-click `index.html`, and choose "Open with Live Server."

## 3. Deploy for free

Any of these four options work well. Netlify is the easiest for beginners.

### Netlify (recommended, easiest)
1. Go to https://app.netlify.com and create a free account.
2. Drag and drop the whole `growfoundry-website` folder onto the Netlify dashboard ("Deploys" → "Drag and drop your site output folder here").
3. Netlify gives you a free `.netlify.app` URL instantly. That's it — no command line needed.
4. For updates later: re-drag the updated folder, or connect a GitHub repo for automatic deploys on every change.

### GitHub Pages
1. Create a free GitHub account and a new repository (e.g. `growfoundry-website`).
2. Upload all the files in this folder to that repository (via GitHub's web uploader, or `git push`).
3. Go to the repository's **Settings → Pages**.
4. Under "Source," choose the `main` branch and `/root` folder, then save.
5. Your site will be live at `https://yourusername.github.io/growfoundry-website/` within a few minutes.

### Vercel
1. Create a free account at https://vercel.com.
2. Click "Add New Project" → "Import" and upload the folder, or connect it via a GitHub repository.
3. Since this is a static site, leave the build settings empty and deploy.

### Cloudflare Pages
1. Create a free account at https://pages.cloudflare.com.
2. Create a new project and upload the folder (or connect a GitHub repo).
3. Leave the build command empty (this is a static HTML/CSS/JS site) and deploy.

## 4. Update content later

Everything is written directly in the HTML files, so updates don't require any special tools.

- **Text:** Open the relevant `.html` file in any text editor (VS Code, Notepad, etc.), find the text, and edit it directly.
- **Colours, fonts, spacing:** Open `css/style.css` and edit the values at the very top of the file, inside the `:root { ... }` block. Every colour and font on the site is controlled from there.
- **Images:** Replace the SVG placeholders in `portfolio.html` and elsewhere with real photos. Add your image files inside `assets/images/`, then reference them like:
  ```html
  <img src="assets/images/your-photo.jpg" alt="Description of the photo" />
  ```
- **Services, testimonials, FAQs:** Each is a repeated block of HTML (a `<div class="card">`, `<div class="testimonial-card">`, or `<div class="faq-item">`). Copy an existing block, paste it, and edit the text to add a new one — or delete a block to remove one.
- **WhatsApp number:** Search each HTML file for `wa.me/910000000000` and replace `910000000000` with your real WhatsApp number, written as country code + number with no spaces, `+`, or dashes.
- **Contact form emails:** The form currently shows an on-page confirmation message but doesn't send an email anywhere. To receive real submissions in your inbox for free:
  1. Create a free account at https://formspree.io
  2. Create a new form there and copy the endpoint URL it gives you (looks like `https://formspree.io/f/xxxxxxx`).
  3. In `contact.html`, find `<form id="contact-form" ... action="#" method="POST">` and change `action="#"` to your Formspree URL.
  4. In `js/main.js`, find the line `e.preventDefault();` inside the "Contact form handling" section and delete or comment it out, so the form submits normally to Formspree.
  5. Formspree's free plan is enough for a small business getting started.

## 5. Connect a custom domain later

Once you own a domain (e.g. from GoDaddy, Namecheap, or Google Domains):

- **Netlify:** Site settings → "Domain management" → "Add a domain," then update your domain's DNS records as instructed.
- **GitHub Pages:** Repository settings → "Pages" → "Custom domain," then add a `CNAME` record at your domain registrar pointing to `yourusername.github.io`.
- **Vercel / Cloudflare Pages:** Both have a "Domains" tab in the project dashboard with step-by-step DNS instructions.

All four hosts issue free HTTPS (SSL) certificates automatically once the domain is connected — no extra cost.

## 6. Suggestions for future improvements

- Replace all placeholder testimonials, portfolio projects, and the map placeholder with real content as it becomes available.
- Add real photography — of your team, workspace, and client work — once available, keeping the current clean, uncluttered layout.
- Connect the contact form to Formspree (or a free CRM like HubSpot's free tier) so leads flow straight into your sales process.
- Add Google Analytics or a privacy-friendly alternative (e.g. Plausible, which has a free trial) to track visitor behaviour.
- Add individual case study pages once you have 3–5 real projects with measurable results.
- Consider adding a blog section for SEO once you're ready to publish content regularly.
- If the site outgrows plain HTML/CSS/JS (e.g. you want a blog with many posts, or team members editing content without touching code), migrate to a free static site generator or headless CMS — but the current structure will keep working exactly as-is until then.

## 7. Technology used

- HTML5, CSS3, vanilla JavaScript — no frameworks, no build step
- Google Fonts (free): Space Grotesk, Inter, IBM Plex Mono
- No paid plugins or services anywhere in the codebase
