import jwt from "jsonwebtoken";
import "dotenv/config.js";
import User from "../models/UserModel.js";


const auth = async (req, res, next) => {
  //check if the header contain the key authorization (token)
  // This extracts the authorization header from the request.
  // The authorization header typically contains the JWT in the format: Bearer <token>.
  const { authorization } = req.headers;

  if (!authorization) {
     //when user login, they will have token
    return res.status(401).json({ error: "You must be logged in!" });
  }

  // Grab the token from the header (Bearer token)
  const token = authorization.split(" ")[1];

  try {
    // Decode and extract the user id from token
    // secret jiske pass hai wo token se id get kar skta hai user ki.
    const { _id } = jwt.verify(token, process.env.SECRET);

    //save the user in the req object
    req.user = await User.findById(_id).select("_id");

    next();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export default auth;
