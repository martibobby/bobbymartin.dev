# Bobby Martin portfolio website - bobbymartin.dev

![release](https://img.shields.io/github/v/release/martibobby/bobby%20martin.dev)
![pdf workflow](https://github.com/martibobby/bobbymartin.dev/actions/workflows/build-pdf.yml/badge.svg)
[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)

## Overview
This repo simplifies updates to my personal portfolio and resume with the following objectives:
- Create a portfolio website and resume
- Store all data in `.yml` files for simplied resume updates (see [`/src/data/resume.yml`](/src/data/resume.yml))
- Automated build of resume PDF from website (GitHub Action)
- Automated deploy of updated static website to AWS (GitHub Action)

The cheapest web hosting in AWS is using S3/Cloudfront to serve static HTML files. [Astro](https://astro.build) was chosen to generate these static files thanks to its templating ability, extendability, and excellent documentation.

## Usage
To run this website locally, clone this repository and run:
```bash
docker compose up
```
Then navigate to http://localhost:4321/ to view the website.

## Technology Used
### Stack
- [Node](https://nodejs.org/en/download/package-manager/) - runtime environment
    - Using `npm` for all [Components](#components) 
- [Docker Compose](https://docs.docker.com/compose/) - CI/CD web server
    - Serving astro files within container with [httpd](https://httpd.apache.org)
- [GitHub Actions](https://docs.github.com/en/actions) - GitOps
    - Static website build & deploy to AWS
    - PDF generation of resume
- [AWS](https://aws.amazon.com) - website hosting
    - Route 53 - DNS provider
    - S3 - static content hosting
    - Cloudfront - content distribution
    - Certificate Manager - SSL/TLS certificate
    - Cloudformation - [infrastructure deployment](https://github.com/aws-samples/amazon-cloudfront-secure-static-site)

### Components
- [Astro](https://github.com/withastro/astro) - web framework
    - Static website generation for cheap hosting
    - Simplified templating engine
    - Rollup plugin for reading yaml with Astro
- [Tailwind](https://github.com/tailwindlabs/tailwindcss) - CSS framework
    - Website styling (less CSS, more repeating yourself...)
    - Print media queries for PDF generation
- [TypeScript](https://www.typescriptlang.org) - strongly typed JavaScript
    - Script to export resume as PDF from resume website page
- [Puppeteer](https://pptr.dev) - browser manipulation
    - Headless browser API to print resume page as PDF

## Automation
This repo uses Github Actions to:
- Deploy the portfolio website to AWS
- Generate a PDF of the resume

Check out the `.github/workflows/` directory to view the actions.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                            |
| :------------------------ | :---------------------------------------------------------------- |
| `npm install`             | Installs dependencies                                             |
| `npm run dev`             | Starts local dev server at `localhost:4321`                       |
| `npm run build`           | Build your production site to `./dist/`                           |
| `npm run preview`         | Preview your build locally, before deploying                      |
| `npm run pdf`             | Generate a PDF of the resume page hosted at `localhost:4321`      |

## Docker - Local Resume PDF Generation
The [`Dockerfile`](Dockerfile) and [`compose.yaml`](compose.yaml) will build the Astro website as static HTML files, then start up an `httpd` web server to serve those files. This is used within a GitHub Action workflow 

While a good backup, the goal 

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
Project structure follows the Astro project specification, with some additional customization, such as the `scripts` and `src/data` folders.

```text
/
├── scripts/
│   └── generate-pdf.ts
├── public/
│   └── favicon.svg
├── src/
│   ├── data/
│   │   └── resume.yml
│   │   └── nav.yml
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
