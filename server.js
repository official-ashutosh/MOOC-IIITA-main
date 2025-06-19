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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["key1"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    method: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json({ limit: "200mb" }));
app.use("/api/users", usersRoutes);
app.use("/api/courses", coursesRoutes);
app.use("/api/carts", cartsRoutes);
app.use("/api/lessons", lessonsRoutes);
app.use("/api/documents", documentsRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/reviews", reviewsRoutes);
app.use("/auth", authsRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/client/dist/index.html"))
);


mongoose
  .connect('mongodb+srv://tmkoc6465:O0QXw5vqFdPI4olt@kp.dirye.mongodb.net/test')
  .then(() => {
    console.log("Connected to the database");

app.listen(process.env.PORT, () => {
      console.log("Listening on port 5000");
  });
})
.catch((error) => {
    console.log("Error connecting to the database: ", error);
});
