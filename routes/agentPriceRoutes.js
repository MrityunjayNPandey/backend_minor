const express = require("express");
const router = express.Router();
const { getPrices } = require("../services/agentPriceService");

router.get("/compare-price/:itemNumber", async (req, res) => {
  const { itemNumber } = req.params;
  try {
    const result = await getPrices(itemNumber);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch prices" });
  }
});

module.exports = router;
