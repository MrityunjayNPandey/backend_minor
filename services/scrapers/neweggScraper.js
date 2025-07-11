const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const { newEggCookies } = require("./cookies");
puppeteer.use(StealthPlugin());

async function getNeweggPrice(itemNumber) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setCookie(...newEggCookies);

  await page.setExtraHTTPHeaders({
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
    "accept-language": "en-GB,en;q=0.7",
    "cache-control": "max-age=0",
    priority: "u=0, i",
    "sec-ch-ua": '"Brave";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": '"Android"',
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "sec-gpc": "1",
    "upgrade-insecure-requests": "1",
    "user-agent":
      "Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36",
  });

  try {
    await page.goto(`https://www.newegg.com/p/${itemNumber}`, {
      waitUntil: "domcontentloaded",
      timeout: 120000,
    });
    await page.waitForSelector(".price-current", { timeout: 15000 });
    const price = await page.$eval(".price-current", (el) =>
      el.innerText.trim()
    );

    let name = null;
    try {
      name = await page.$eval("h1.product-title", (el) => el.innerText.trim());
    } catch (e) {
      try {
        name = await page.$eval(".product-title", (el) => el.innerText.trim());
      } catch (e2) {
        name = null;
      }
    }
    return { price, name };
  } catch (err) {
    console.log("Newegg scraping error:", err.message);
    return { price: null, name: null };
  } finally {
    await browser.close();
  }
}

module.exports = { getNeweggPrice };
