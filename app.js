const puppeteer = require('puppeteer');

puppeteer.launch().then(
    async browser => {
        const page = await browser.newPage();
        await page.goto('https://github.com/GoogleChrome/puppeteer/', {waitUntil: 'networkidle2'});
        await page.screenshot({path: 'puppeteer.png', fullPage: true});
        await browser.close();
    }
);
