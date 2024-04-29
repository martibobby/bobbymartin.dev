const puppeteer = require('puppeteer');

async function generatePDF() {
// Launch a new browser instance
const browser = await puppeteer.launch();
// Create a new page
const page = await browser.newPage();
// Go to a webpage
await page.goto('file:///Users/bobbymartin/Documents/GitHub/bobbymartin-dev/dist/resume/index.html');
// Generate PDF and save it
await page.pdf({ path: 'example.pdf', format: 'A4' });
// Close the browser
await browser.close();
}

generatePDF();