const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const { home, login, signup } = require("./controller/user.controller");

dotenv.config();

const port = process.env.PORT || 6969;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect(process.env.MONGOURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

//rendering
const dirname = path.resolve();

// Routes
app.get("/", home);
app.post("/register", signup);
app.post("/login", login);

//rendering
app.use(express.static(path.join(dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(dirname, "client", "dist", "index.html"));
});

app.use(
  cors({
    origin: []
  })
);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

















