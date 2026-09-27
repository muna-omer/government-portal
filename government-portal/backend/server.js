require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./src/routes/auth.routes");
const cabinetRoutes = require("./src/routes/cabinet.routes");
const institutionRoutes = require("./src/routes/institution.routes");
const mediaRoutes = require("./src/routes/media.routes");
const contactRoutes = require("./src/routes/contact.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ message: "Government Portal API is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/cabinet", cabinetRoutes);
app.use("/api/institutions", institutionRoutes);
app.use("/api/media", mediaRoutes);
app.use("/api/contact", contactRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
