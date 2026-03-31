import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API running..."
  });
  console.log("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});