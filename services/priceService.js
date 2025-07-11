const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const { getNeweggPrice } = require("./scrapers/neweggScraper");
const { getAmazonPrice } = require("./scrapers/amazonScraper");
const { getFlipkartPrice } = require("./scrapers/flipkartScraper");

puppeteer.use(StealthPlugin());

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
