# Bobby Martin portfolio website - bobbymartin.dev

![example workflow](https://github.com/martibobby/bobbymartin.dev/actions/workflows/build-pdf.yml/badge.svg)
[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)

## Overview
Welcome! The objectives of this repo are:
- Create a portfolio website and resume
- Automated build of resume PDF from website
- Automated deploy of updated static website to AWS

This is my first Astro and Tailwind project! Feel free to review the repo and make any suggestions. 
This project focuses on the output more than best practice. A guiding principle for this project:
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
    - Puppeteer npm package to export/print resume as PDF

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
Generate a PDF from the resume content page. A npm script (defined in `package.json`) has been created for ease:
```bash
npm run pdf
```
Shut down the container:
```bash
docker compose down
```
## Project Structure
Project structure follows the Astro project specification, with some additional customization, such as the `scripts` and `assets` folder.

```text
/
├── scripts/
│   └── generate-pdf.ts
├── assets/
│   └── family.png
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Nav.asto
│   │   └── ResumeContent.astro
│   │   └── ...
│   ├── layouts/
│   │   └── Layout.astro
│   │   └── LayoutRaw.astro
│   └── pages/
│       └── index.astro
│       └── resume.astro
│       └── resume-raw.astro
│       └── ...
└── package.json
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run pdf`             | Generate a PDF of the resume page                |
