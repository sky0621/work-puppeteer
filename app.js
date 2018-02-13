const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://developers.line.me/ja/docs/messaging-api/reference/', {waitUntil: 'networkidle', networkIdleTimeout: 5000});
    await page.screenshot({path: 'developers.line.me.messaging-api.001.png', fullPage: true});
    await page.pdf({path: 'developers.line.me.messaging-api.001.pdf', format: 'A4'});

    await browser.close();
})