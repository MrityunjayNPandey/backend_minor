const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const { amazonCookies } = require("./cookies");
puppeteer.use(StealthPlugin());

async function getAmazonPrice(productName) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setCookie(...amazonCookies);

  await page.setExtraHTTPHeaders({
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
    "accept-language": "en-GB,en;q=0.9",
    "cache-control": "max-age=0",
    priority: "u=0, i",
    "sec-ch-ua": '"Not)A;Brand";v="8", "Chromium";v="138", "Brave";v="138"',
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": '"Android"',
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "sec-gpc": "1",
    "upgrade-insecure-requests": "1",
    cookie:
      'session-id=139-5075431-8665208; ubid-main=135-7830511-1898449; aws_lang=en; AMCVS_7742037254C95E840A4C98A6%40AdobeOrg=1; s_cc=true; aws-account-alias=swasthya; JSESSIONID=19A443AEA560FC2EA3C8CC1DA8BC414B; session-id-time=2082787201l; s_ppv=38; aws-session-id=037-6628371-7882618; aws-analysis-id=037-6628371-7882618; aws-session-id-time=1742882215l; aws-ubid-main=452-5522238-2344106; remember-account=false; i18n-prefs=USD; sp-cdn="L5Z9:IN"; lc-main=en_US; AMCVS_A7493BC75245ACD20A490D4D%40AdobeOrg=1; regStatus=registered; awsc-color-theme=light; aws-userInfo=%7B%22arn%22%3A%22arn%3Aaws%3Aiam%3A%3A520906474801%3Auser%2Fmpandey%22%2C%22alias%22%3A%22swasthya%22%2C%22username%22%3A%22mpandey%22%2C%22keybase%22%3A%22Py5gds89bfux9DfX8fbHwbLTfSXfnKGRxFNJLduGeBQ%5Cu003d%22%2C%22issuer%22%3A%22http%3A%2F%2Fsignin.aws.amazon.com%2Fsignin%22%2C%22signinType%22%3A%22PUBLIC%22%7D; aws-userInfo-signed=eyJ0eXAiOiJKV1MiLCJrZXlSZWdpb24iOiJhcC1zb3V0aC0xIiwiYWxnIjoiRVMzODQiLCJraWQiOiIyZmY0MzlmZS1jYjVmLTQ2NDUtYTM3Ny1hYjk1M2RmNmU5Y2MifQ.eyJzdWIiOiJzd2FzdGh5YSIsInNpZ25pblR5cGUiOiJQVUJMSUMiLCJpc3MiOiJodHRwOlwvXC9zaWduaW4uYXdzLmFtYXpvbi5jb21cL3NpZ25pbiIsImtleWJhc2UiOiJQeTVnZHM4OWJmdXg5RGZYOGZiSHdiTFRmU1hmbktHUnhGTkpMZHVHZUJRPSIsImFybiI6ImFybjphd3M6aWFtOjo1MjA5MDY0NzQ4MDE6dXNlclwvbXBhbmRleSIsInVzZXJuYW1lIjoibXBhbmRleSJ9.lr-IpHKLCplD6n-Bvvik1S7YtC1BCI4YjssdZsl0jYdDMBLK1-dB-a0bQzK-ntg614lHMFhvhO6OeRfcYnZTa6Ujg-71iHbFAP5WGpM3inx6NyF_lr5qWbJ9jGSFlZpy; noflush_awsccs_sid=ba75d78636df131a19e3339d2ee515444805ed0ffa884a6562188e2d50e027dc; aws-target-data=%7B%22support%22%3A%221%22%7D; aws-target-visitor-id=1752468400564-256117.41_0; aws-mkto-trk=id%3A112-TZM-766%26token%3A_mch-aws.amazon.com-1752468485120-84242; s_sq=%5B%5BB%5D%5D; AMCV_7742037254C95E840A4C98A6%40AdobeOrg=1585540135%7CMCIDTS%7C20284%7CMCMID%7C84859320505785458901775601680237515489%7CMCAID%7CNONE%7CMCOPTOUT-1752475976s%7CNONE%7CvVersion%7C4.4.0; x-main="w9isE0HrGfY?hVl?fwwyK1W0tpELtZvgAZLRPrYQ6K4jrzHdHLLEP7o8DQcENlot"; csm-hit=tb:MRMBJFYJRZY35TYHX6SM+s-MRMBJFYJRZY35TYHX6SM|1752745542432&t:1752745542432&adb:adblk_yes; session-token=hoC1u6oplK3WE7oQKrp1rZpaaEI82qfcqY09A3bdW7a7SBP/amJ1EdNmYOj0Qv+LtHKT8LHNNEMR8rFu4ORuBpq/m+3Kx6x9xd++uuLCzOm5/5mcmDA5AQevDlUHmnO5RXnLPv6xdTZ+NPA8YZEvdP4sfI+tVc7k+u/yIrAwFNtoYr3Xq/jlP8SwiJ3+xGJzz4cDoFMG6SJaUg2ZWG0A6wKn1MqtN6+Yo6q8chfq1TArYCFAJbkoW8EjQhH5ELosa3ma0LFQn6VPnYxn5FvNx+qR+NtpkHA32RjI0+X7wYt81bDrpAbdeC8ajUIAXC7EFhAJXTBfw9vAmolTvacFNGOasO8rCN7u; rxc=AHHVqiSS6lx50RWVVtY',
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
