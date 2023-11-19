import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    timeout: 100000
});

  try {
    const page = await browser.newPage();

    // Replace 'http://localhost:3000' with the actual URL of your React SPA
    const url = 'http://localhost:5173';

    console.log(`Navigating to: ${url}`);

    // Add a delay before navigating to allow the server to start
    // await page.waitForTimeout(5000); // Adjust as needed
    await page.setViewport({ width: 1280, height: 1024 });
    await page.goto(url, { waitUntil: ['load', 'domcontentloaded'] });

    await page.screenshot({ path: 'screenshot.png', fullPage: true });

  } catch (error) {
    console.error('Error during navigation:', error);
  } finally {
    await browser.close();
  }
})();
