const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

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

    const result = await page.evaluate(() => {
      const firstItem = document.querySelector(
        "div.s-main-slot div[data-component-type='s-search-result']"
      );
      if (!firstItem) return { name: null, price: null };

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

module.exports = { getAmazonPrice };
