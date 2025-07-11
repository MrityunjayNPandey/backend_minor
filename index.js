const express = require("express");
const csvRoutes = require("./routes/csvRoutes");

const app = express();

app.use("/csv", csvRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
