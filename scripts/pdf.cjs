// 
// npm run build
// npm run preview
// navigate to that site
const puppeteer = require('puppeteer');

async function generatePDF() {
// Launch a new browser instance
const browser = await puppeteer.launch();
// Create a new page
const page = await browser.newPage();
// Go to a webpage
await page.goto('http://localhost:4321/resume-raw/index.html');
// Generate PDF and save it
await page.pdf({ path: 'example.pdf', format: 'A4' });
// Close the browser
await browser.close();
}

generatePDF();