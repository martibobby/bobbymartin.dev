// Puppeteer used to export HTML page to PDF
import puppeteer from 'puppeteer';

async function generatePDF(url: string) {
    // Launch a new headless browser instance
    const browser = await puppeteer.launch();
    // Create a new page
    const page = await browser.newPage();
    // Go to a webpage
    await page.goto(url);
    // Ignore 'print' CSS media type - use regular CSS types
    // await page.emulateMediaType('screen');
    // Generate PDF and save it
    await page.pdf({ path: 'example.pdf', format: 'A4' });
    // Close the browser
    await browser.close();
}

// run the function to extract PDF
generatePDF('http://localhost:4321/resume-raw/index.html');