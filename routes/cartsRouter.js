import express from "express"
import { addToCart, getCart, removeFromCart ,clearCart} from "../controllers/cartsController.js";
import auth from "../middlewares/auth.js";

// This creates a new router object using Express’s Router() method.
//  A router is a modular way to handle specific API routes 
// (in this case, routes related to carts) in an Express application.
const router = express.Router();

router.post("/addToCart", auth, addToCart);

// Lỗi khi tải khóa học

router.delete("/removeFromCart/:cartId/:courseId", removeFromCart);

router.delete("/clearCart",auth, clearCart)

router.get("/getCart", auth, getCart)

export {router as cartsRoutes};