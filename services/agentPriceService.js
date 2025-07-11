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

async function getAmazonPrice(productName) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setExtraHTTPHeaders({
    "accept-language": "en-US,en;q=0.9",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  });

  try {
    const url = `https://www.amazon.com/s?k=${encodeURIComponent(productName)}`;
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });

    // Wait for product results to load
    await page.waitForSelector(
      "div.s-main-slot div[data-component-type='s-search-result']",
      { timeout: 10000 }
    );

    // Extract the first product's name and price
    const result = await page.evaluate(() => {
      const firstItem = document.querySelector(
        "div.s-main-slot div[data-component-type='s-search-result']"
      );
      if (!firstItem) return { name: null, price: null };

      // Robust name extraction
      let name = "";
      const h2 = firstItem.querySelector("h2.a-size-medium");
      if (h2) {
        const span = h2.querySelector("span");
        if (span) name = span.innerText.trim();
      }

      const price = firstItem
        .querySelector("span.a-offscreen")
        .innerText.trim();

      return { name, price };
    });

    return result;
  } catch (err) {
    console.log("Amazon Puppeteer scraping error:", err.message);
    return { name: null, price: null };
  } finally {
    await browser.close();
  }
}

async function getFlipkartPrice(productName) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setExtraHTTPHeaders({
    "accept-language": "en-US,en;q=0.9",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  });

  try {
    const url = `https://www.flipkart.com/search?q=${encodeURIComponent(
      productName
    )}`;
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });

    await page.waitForSelector("div.NqpwHC, a.wjcEIp", { timeout: 10000 });

    let name = await page.evaluate(() => {
      let el = document.querySelector("a.wjcEIp");
      if (el) return el.getAttribute("title") || el.innerText.trim();
      el = document.querySelector("div.NqpwHC");
      if (el) return el.getAttribute("title") || el.innerText.trim();
      return "";
    });

    let price = await page.evaluate(() => {
      let el = document.querySelector("div.Nx9bqj");
      if (el) return el.innerText;
      return null;
    });

    return { name, price };
  } catch (err) {
    console.log("Flipkart Puppeteer scraping error:", err.message);
    return { name: null, price: null };
  } finally {
    await browser.close();
  }
}

async function getPrices(itemNumber) {
  const neweggResult = await getNeweggPrice(itemNumber);
  const amazonResult = neweggResult.name
    ? await getAmazonPrice(neweggResult.name)
    : { name: null, price: null };
  const flipkartResult = neweggResult.name
    ? await getFlipkartPrice(neweggResult.name)
    : { name: null, price: null };

  return {
    itemNumber,
    newegg: neweggResult,
    amazon: amazonResult,
    flipkart: flipkartResult,
  };
}

module.exports = { getPrices };
