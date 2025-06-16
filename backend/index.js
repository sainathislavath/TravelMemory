const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000; // fallback for safety
const conn = require("./conn");

app.use(express.json());
app.use(cors());

// ✅ Corrected Route Prefixes
const tripRoutes = require("./routes/trip.routes");
app.use("/api/trip", tripRoutes);

app.get("/api/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
