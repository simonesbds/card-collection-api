import express from "express";
import { connectDB } from "./config/db.js";
import cardRoutes from "./routes/cardRoutes.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to your Card Collection tracker");
});

app.use("/api/cards", cardRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
