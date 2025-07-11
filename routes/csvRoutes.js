const express = require("express");
const multer = require("multer");
const { findClosestSum } = require("../services/subsetSumService");
const fs = require("fs");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("csvFile"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No CSV file uploaded.");
  }

  let results;
  fs.createReadStream(req.file.path)
    .on("data", (buffer) => {
      const data = buffer.toString();

      const rows = data.split("\n");

      results = rows.map((row) => {
        const [bigNumber, ...smallNumbers] = row.split(",").map(Number);
        const { combination, sum } = findClosestSum(bigNumber, smallNumbers);
        return {
          bigNumber: bigNumber,
          selectedNumbers: combination,
          sum: sum,
        };
      });
    })
    .on("end", () => {
      fs.unlinkSync(req.file.path);
      res.json(results);
    })
    .on("error", (err) => {
      console.error(err);
      res.status(500).send("Error processing CSV file.");
    });
});

module.exports = router;
