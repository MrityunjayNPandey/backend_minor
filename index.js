const express = require("express");
const csvRoutes = require("./routes/csvRoutes");

const agentPriceRoutes = require("./routes/agentPriceRoutes");

const app = express();

app.use(express.json()); // Add this line to parse JSON bodies

app.use("/csv", csvRoutes);
app.use("/ecomm", agentPriceRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
