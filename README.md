# Learning Studio — Instructional Design Portfolio

A responsive Next.js App Router portfolio using TypeScript, Tailwind CSS v4 and Lucide icons. Custom CSS compositions provide original illustrations without external images, fonts, or tracking. The static export works on Vercel or any static host.

## Local development

Use Node.js 20.9+ and pnpm (or npm).

```sh
pnpm install
pnpm dev
pnpm typecheck
pnpm build
```

Open http://localhost:3000. `pnpm build` creates a static site in `out/`. For production serving, use a static file server; `next start` is not compatible with static export.

## Personalize

All portfolio copy and project data live in `src/data/portfolio.ts`.

- Edit `profile.name`, `initials`, `intro`, `about`, and `philosophy`. Replace the explicit `[Your Name]` in the introduction too.
- Add `email` and a full `https://` LinkedIn URL to enable contact links. Empty values display honest coming-soon notes and create no links.
- Put your resume in `public/resume.pdf`, then set `resume: '/resume.pdf'`. The button stays hidden until configured.
- Replace tools placeholders with verified tools. Project tool entries explicitly distinguish implemented and planned tools.
- Add your production origin to `siteUrl` (for example `https://your-domain.com`) to populate `/sitemap.xml`. It deliberately emits no guessed URLs before configuration.
- Edit any entry in `projects` to update its case study. Add a new entry using the `Project` type: unique slug, title, category, description, status, optional thumbnail, color, duration, audience, problem, objectives, strategy, process, reflection, tools, and agenda. Use an empty agenda for projects without a workshop preview. The generic case-study template works automatically.
- Add categories to `categories`; filtering and cards accept arbitrary category names. Add an original artwork variant in `Artwork` if desired; the default storyboard composition also works as a fallback.
- `Draft` entries are hidden from all public routes and the sitemap. `In Development` and `Completed` are shown. All four initial projects are clearly labeled self-initiated concepts. Change the case-study label if you later add real work with permission.
- Add images to `public/images/` and set `thumbnail: '/images/filename.webp'`. The card supplies descriptive alt text from the project title. Prefer compressed WebP/AVIF with a landscape composition. Missing thumbnails use original CSS mockups.
- Attach real materials with `downloads: [{ label: 'Facilitator guide (PDF)', url: '/materials/guide.pdf' }]`, putting the file in `public/materials/`. The workshop materials section renders only configured links; verify files exist before adding paths.
- Edit `storyboard` for the five-screen storyboard sample. `src/components/mini-lesson.tsx` holds the lesson’s state and tailored feedback. No learner data is stored or transmitted.

Home/section headings and reusable visual layout are in `src/app` and `src/components/site.tsx`. Colors, responsive styles and reduced-motion rules are in `src/app/globals.css`. No backend or authentication is required.

## Deploy to Vercel

Push this folder to a Git repository and import it into Vercel. Select the Next.js preset; use `pnpm build`. No environment variables are required. Vercel supports the static export configured in `next.config.ts`. Set `profile.siteUrl` to the final origin and redeploy to enable sitemap entries.

## Content integrity and accessibility

The sample emails and privacy scenario are fictional. There are no claims about clients, employment, learner outcomes or proficiency in unverified tools. Planned materials have no fake download controls. The lesson supports keyboard controls, visible focus, feedback announcements, focus movement between screens, retry, and no timer. The site has semantic landmarks, skip navigation and reduced-motion support. Review your own uploaded documents for accessibility.
