const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

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

module.exports = { getFlipkartPrice };
