import "dotenv/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectDatabase, dataMode } from "./config/db.js";
import listingsRouter from "./routes/listings.js";
import bookingsRouter from "./routes/bookings.js";
import categoriesRouter from "./routes/categories.js";
import settingsRouter from "./routes/settings.js";
import metricsRouter from "./routes/metrics.js";

const app = express();
const port = Number(process.env.PORT || 5001);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDistPath = path.resolve(__dirname, "../dist");
const clientOrigin = process.env.CLIENT_ORIGIN || "http://127.0.0.1:5173";

app.use(
  cors({
    origin: clientOrigin.split(",").map((origin) => origin.trim()),
  }),
);
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    service: "rentnest-api",
    dataMode: dataMode(),
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/listings", listingsRouter);
app.use("/api/bookings", bookingsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/settings", settingsRouter);
app.use("/api/metrics", metricsRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(clientDistPath));

  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(clientDistPath, "index.html"));
  });
}

app.use("/api", (req, res) => {
  res.status(404).json({ message: `Route not found: ${req.method} ${req.path}` });
});

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(error.status || 500).json({
    message: error.message || "Unexpected server error",
  });
});

await connectDatabase();

app.listen(port, () => {
  console.log(`RentNest API listening on http://127.0.0.1:${port}`);
});
