# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

## Stack Selection
Astro for:
- Static website generation for cheap hosting
- Templating of 

AWS for:
- Static website hosting with S3 and Cloudfront
- 

GitHub Actions:
- For PDF generation of resume upon code updates

Tailwind for:
- Styling and other utilities

> Perfection is the enemy of good

My first Astro, Tailwind, project!
## Utilities Used
- AstroJS for static site generation
- Tailwind CSS for design utility classes
- Flowbite for UI components
- Rollup plugin for reading yaml with Astro

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
