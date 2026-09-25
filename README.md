# Karishma Gajjar — Developer Portfolio

**ASP.NET Core & Angular Full Stack Developer · MCA Semester 3 Student**

A responsive personal portfolio showcasing my skills, professional experience, projects, and education. Built with Angular and organized into separate components for simple maintenance and future updates.

[GitHub](https://github.com/karishmaGajjar29) · [LinkedIn](https://www.linkedin.com/in/karishma-gajjar-45a9812b6/) · [Email](mailto:karishmagajjar2903@gmail.com)

## About Me

I'm Karishma Gajjar, a full stack developer based in Surat, Gujarat, India. I work with ASP.NET Core, Angular, and SQL Server, contributing to frontend interfaces, backend APIs, database operations, testing, and debugging.

Alongside my work at Technobliss, I am currently studying in Semester 3 of the Master of Computer Applications program at Bhagwan Mahavir University, Surat.

## Features

- Responsive layouts for mobile, tablet, and desktop.
- Violet, cream, and lime design with Syne headings and DM Sans body text.
- Light and dark themes with a saved preference.
- Sticky navigation, mobile menu, and section links.
- Dedicated sections for skills, experience, projects, education, and languages.
- Personal GitHub and LinkedIn profile links.
- Email contact and a copy-email action.
- Keyboard focus styles, a skip-to-content link, and reduced-motion support.
- Configurable photo, resume download, project screenshots, source links, and demo links.
- Static HTML with the portfolio route prerendered at build time.

## Website Technology

| Area | Technologies |
| --- | --- |
| Frontend | Angular 21, TypeScript, HTML, CSS |
| Rendering | Angular build-time prerendering |
| Hosting | Static files on Cloudflare Pages |
| Testing | Vitest, Angular TestBed, jsdom |
| Typography | Syne and DM Sans via Google Fonts |

ASP.NET Core and SQL Server are part of my professional skill set and featured projects. This portfolio itself is an Angular application; it does not require an ASP.NET backend or database.

## Featured Projects

| Project | Context | Technologies |
| --- | --- | --- |
| Clinical Management System | Office project at Technobliss | Angular, ASP.NET MVC / Web API, SQL Server |
| Evaluate | Office project at Technobliss; contributed during my internship | Angular, ASP.NET, SQL Server |
| Office Management System | Internship project at DVIBT | Angular |
| Angular Portfolio Website | This personal portfolio | Angular, TypeScript, HTML, CSS |
| Travel Website | Personal project | ReactJS |
| Real Estate Website | Personal project | ReactJS |
| Job Portal Website | Personal project, in progress | ReactJS |

Professional projects describe my contributions to team applications. Repository and live-demo buttons appear only when their URLs are configured.

## Run Locally

### Prerequisites

- Node.js 22.12 or later within version 22, or Node.js 24.
- npm. This project declares npm 11.9.0 as its package manager.

Download or clone this repository, open a terminal in its root folder, and run:

```sh
npm ci
npm start
```

Open [http://localhost:4200](http://localhost:4200). The development server reloads when source files change.

### Commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the development server |
| `npm run build` | Create the production build |
| `npm test -- --watch=false` | Run the automated tests once |
| `npm run watch` | Rebuild in development mode as files change |

The production build is written to `dist/my-portfolio/`, with `index.html` directly inside that directory. No production Node.js server is required.

### Deploy to Cloudflare Pages

Use the existing Cloudflare Pages project with these build settings:

- Build command: `npm run build`
- Build output directory: `dist/my-portfolio`

The Angular configuration explicitly removes the default `browser` output subdirectory. Publish the directory containing `index.html`; publishing its parent can cause a 404 even when the build succeeds. Push these changes to the connected Git production branch to trigger a new deployment.

## Component Structure

```text
public/                         Photo, resume, and project images
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── tech-stack/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── education/
│   │   ├── languages/
│   │   ├── contact/
│   │   └── footer/
│   ├── app.ts                  Component composition and theme state
│   ├── app.html                Page shell that assembles the components
│   ├── app.css                 Theme colors and page-shell styles
│   └── portfolio.data.ts       Editable portfolio content
├── index.html                  HTML document shell and page metadata
├── styles.css                  Shared typography, spacing, and styles
└── server.ts                   Express server entry point
```

Every section component has separate TypeScript, HTML, and CSS files. The header manages the mobile menu, the contact component manages copying the email address, and the app manages theme preference.

## Customize the Portfolio

### Personal details and content

Edit `src/app/portfolio.data.ts` to update social URLs, email, skills, experience, education, languages, and project information. Edit the relevant component HTML for introductory text and section headings.

### Photo and resume

Add your files to `public/`, then set their paths in `portfolio.data.ts`:

```ts
photo: '/profile.jpg',
resumeUrl: '/resume.pdf',
```

The initials artwork is shown when `photo` is empty. The resume button is hidden when `resumeUrl` is empty. Add the actual files before enabling these paths.

### Project screenshots and links

Each project supports these optional fields:

- `image`: path to a screenshot in `public/`, such as `/projects/travel.png`.
- `sourceUrl`: the project's public repository URL.
- `demoUrl`: the deployed project's URL.

Without an image, the card displays decorative artwork. Without a URL, the corresponding link button stays hidden.

### Appearance and metadata

- Edit each component's CSS for its layout and responsive styles.
- Edit `src/app/app.css` for light and dark color variables.
- Edit `src/styles.css` for shared styling.
- Edit `src/index.html` for fonts, page title, description, and social metadata.

## Verification

The automated tests cover portfolio content, section links, mobile-menu interactions, and theme persistence. Run them with:

```sh
npm test -- --watch=false
```

When updating the design, also check the layout at 360, 768, 1024, and 1440 pixels, keyboard navigation, and both themes.

## Notes

- Contact uses an email link; there is no backend contact form.
- Copying the email requires browser clipboard access, normally available on HTTPS or localhost.
- Fonts load from Google Fonts, with system-font fallbacks.
- A photo, resume PDF, and project screenshots are optional and are not included yet.
- After deployment, future changes can be published by rebuilding and redeploying the site.

---

Designed and developed by **Karishma Gajjar**.
