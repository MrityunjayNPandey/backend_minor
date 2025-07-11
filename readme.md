# CSV Processing Application

This application processes a CSV file containing a "big number" and up to 12 "small numbers" per row. For each row, it finds a combination of small numbers whose sum is as close as possible to the big number without exceeding it.

## Approach: Brute-Force Subset Sum

The core logic of this application employs a brute-force method to solve a variation of the subset sum problem. For each row in the CSV, it iterates through all possible combinations (subsets) of the provided small numbers. For each subset, it calculates the sum of its elements and compares it to the "big number" for that row. The combination that yields the sum closest to the big number without exceeding it is selected as the optimal solution.

### Advantages:

- **Guaranteed Optimality:** For the given constraints, this approach guarantees that the absolute best combination of small numbers (closest sum without exceeding the big number) will always be found because it exhaustively checks every single possibility.
- **Efficiency for Small N:** Given that the problem specifies "up to 12" small numbers, the number of possible subsets (2^N) remains very small (2^12 = 4096). This makes the brute-force calculation extremely fast and computationally inexpensive for the specified input size.

### Limitations:

- **Scalability (Exponential Complexity):** The primary limitation is the exponential time complexity (O(2^N)). As the number of small numbers (N) increases, the computation time grows dramatically. If N were to be significantly larger (e.g., 30 or more), this brute-force approach would become computationally infeasible and impractical due to the immense number of subsets to evaluate.
- **Resource Intensive for Large N:** For larger N, not only would the computation time be an issue, but also the memory required to store or generate all possible subsets could become prohibitive.

For scenarios with a much larger number of small numbers, more advanced algorithms such as dynamic programming could be incorporated to optimize the process. However in that case, the memory requirement would still be prohibitive in case of large “big number”.

# E-Commerce Price Comparison App

## Implementation Summary

### How the Solution Was Implemented

This backend uses Node.js and Puppeteer (with stealth plugin) to scrape product prices and names from Newegg, Amazon, and Flipkart. For each site, a headless browser session is launched, navigates to the relevant product or search page, and extracts the product name and price using robust DOM selectors. For Amazon and Flipkart, Puppeteer is used to bypass anti-bot measures, and selectors are chosen to handle common HTML variations. The first matching product's name and price are returned for each site.

### Limitations

- **Performance:** Puppeteer is resource-intensive and slower than HTTP-based scraping.
- **Fragility:** The solution depends on current DOM structures and class names, which may change at any time.
- **Blocking:** Heavy or repeated use may still trigger anti-bot measures, CAPTCHAs, or IP bans.
- **No Fuzzy Matching:** The first search result is used, which may not always be the best match.
- **Error Reporting:** If a site blocks the scraper or selectors fail, the user only gets `null` values, with no detailed error feedback.

### Next Iteration Priorities

- **Proxy/Rotation Support:** Add proxy and user-agent rotation to reduce blocking risk.
- **Better Error Handling:** Return more informative error messages to the user.
- **Selector Resilience:** Add more fallback selectors and possibly use AI/ML-based DOM analysis.
- **Performance Optimization:** Use a browser pool or scraping API for better speed and reliability.
- **Testing & Monitoring:** Add automated tests and monitoring to detect when selectors break.

# Usage Instructions

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd backend_minor
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Development Mode

```bash
npm start
```

### Production Mode

```bash
node index.js
```

The server will start on `http://localhost:8080` by default.

## API Endpoints

### 1. CSV Processing - Subset Sum Problem

**Endpoint:** `POST /csv/upload`

**Description:** Upload a CSV file to solve the subset sum problem. The CSV should contain a "big number" and up to 12 "small numbers" per row.

**Request:**

- Method: `POST`
- URL: `http://localhost:8080/csv/upload`
- Content-Type: `multipart/form-data`
- Body: Form data with key `csvFile` containing the CSV file

**CSV Format:**

```csv
100,10,20,30,40,50
200,15,25,35,45,55,65
```

### 2. E-Commerce Price Comparison

**Endpoint:** `GET /ecomm/compare-price/:itemNumber`

**Description:** Compare product prices across Newegg, Amazon, and Flipkart using a Newegg item number.

**Request:**

- Method: `GET`
- URL: `http://localhost:8080/ecomm/compare-price/{itemNumber}`
- Parameters: `itemNumber` - The Newegg product item number