import express from "express";
import { loginUserSocial } from "../controllers/usersController.js";
const router = express.Router();

router.get("/login/success", loginUserSocial);

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
});

export { router as authsRoutes };
