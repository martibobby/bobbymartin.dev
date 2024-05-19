# Bobby Martin - Portfolio Website

## Overview
Welcome! The objective of this repo is two-fold:
- Create my portfolio website and resume
- Generate my resume as a PDF from HTML

This is my first Astro and Tailwind project! Feel free to review the repo and make any suggestions, but please keep in mind:
> The best is the enemy of the good. - Voltaire

## Usage
To run this website locally, clone this repository and run:
```bash
docker compose up
```
Then navigate to http://localhost:4321/ to view the website.

## Technology Used
- [Astro](https://github.com/withastro/astro) - web framework
    - Static website generation for cheap hosting
    - Simplified templating engine
    - Rollup plugin for reading yaml with Astro
- [Tailwind](https://github.com/tailwindlabs/tailwindcss) - CSS framework
    - Website styling 
    - Print media queries for PDF generation
- TypeScript
- [AWS](https://aws.amazon.com) - website hosting
    - Route 53 - DNS provider
    - S3 - content hosting
    - Cloudfront - distribution
    - Certificate Manager - SSL/TLS certificate
    - Cloudformation - [infrastructure deployment](https://github.com/aws-samples/amazon-cloudfront-secure-static-site)
- GitHub Actions:
    - For PDF generation of resume upon code updates

## Automation
This repo uses Github Actions to:
- Deploy the portfolio website to AWS
- Generate a PDF of the resume

Check out the `.github/workflows/` directory to view the actions.

## Local Resume PDF Generation
Ensure you have docker and node installed on your machine.

Startup the docker container:
```bash
docker compose up -d
```
Generate a PDF from the resume content:
```bash
node scripts/pdf.cjs
```
Shut down the container:
```
docker compose down
```
## Project Structure
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

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run pdf`             | Generate a PDF                                   |
