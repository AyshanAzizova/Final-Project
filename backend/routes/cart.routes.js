import express from 'express';
import { addCart, getCart , removeProductFromCart} from '../controllers/cart.controller.js';
import { protectRoutes } from "../middlewares/protectRoutes.js"

const router = express.Router();
//Get all Carts
router.get("/", protectRoutes, getCart)

//Post a new Cart 
router.post("/", protectRoutes, addCart)

router.delete("/:userId/:productId",protectRoutes, removeProductFromCart);  // `remove` metodunu əlavə edin



export default router 