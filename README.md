# Fuad Saneen — Portfolio

Personal portfolio built with Next.js (App Router).

## Edit content

All text (intro, experience, projects, skills, contact) is in `data/content.ts`.
The résumé download is `public/Fuad_Saneen_Resume.pdf` — replace that file to update it.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. Go to vercel.com → **Add New → Project** → import the repository.
3. Keep the default settings (Framework: Next.js) and click **Deploy**.

You get a free `*.vercel.app` link. You can add your own domain later in the project's **Settings → Domains**.

The site is a static export (`output: "export"` in `next.config.ts`), so it also works on Netlify or GitHub Pages using the `out/` folder after `npm run build`.
