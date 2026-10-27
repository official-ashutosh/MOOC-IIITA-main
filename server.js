import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieSession from "cookie-session";
import path from "path";
import { fileURLToPath } from "url";
import { lessonsRoutes } from "./routes/lessonsRoutes.js";
import { usersRoutes } from "./routes/usersRoutes.js";
import { authsRoutes } from "./routes/authsRoutes.js";
import { coursesRoutes } from "./routes/coursesRoutes.js";
import { cartsRoutes } from "./routes/cartsRouter.js";
import { commentsRoutes } from "./routes/commentsRoutes.js";
import { reviewsRoutes } from "./routes/reviewsRoutes.js";
import { documentsRoutes } from "./routes/documentsRoutes.js";
import { invoicesRoutes } from "./routes/invoicesRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const requiredEnvironment = [
  "SECRET",
  "SESSION_SECRET",
  "MONGODB_URI",
  "CLIENT_URL",
  "EMAIL_USER",
  "EMAIL_PASS",
  "CLOUD_NAME",
  "CLOUD_KEY",
  "CLOUD_SECRET",
];
const missingEnvironment = requiredEnvironment.filter((key) => !process.env[key]);

if (missingEnvironment.length > 0) {
  throw new Error(`Missing required environment variables: ${missingEnvironment.join(", ")}`);
}

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  })
);

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json({ limit: "1mb" }));

app.get("/healthz", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// API routes
app.use("/api/users", usersRoutes);
app.use("/api/courses", coursesRoutes);
app.use("/api/carts", cartsRoutes);
app.use("/api/lessons", lessonsRoutes);
app.use("/api/documents", documentsRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/reviews", reviewsRoutes);
app.use("/api/invoices", invoicesRoutes);
app.use("/auth", authsRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, "/client/dist")));

// Catch-all route (must be last)
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/client/dist/index.html"))
);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to the database");
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to the database: ", error);
  });
