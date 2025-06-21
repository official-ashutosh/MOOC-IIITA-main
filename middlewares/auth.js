import jwt from "jsonwebtoken";
import "dotenv/config.js";
import User from "../models/UserModel.js";


const auth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "You must be logged in!" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    const user = await User.findById(_id).select("_id");
    if (!user) {
      return res.status(401).json({ error: "User not found. Invalid token." });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid or expired token." });
  }
};

export default auth;
