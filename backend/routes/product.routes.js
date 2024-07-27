import express from 'express';
import { addSingleProduct, getProducts, getSingleProduct } from '../controllers/product.controller.js';

const router = express.Router();
//Get all products
router.get("/", getProducts)

//Get single product
router.get("/:productId", getSingleProduct)

//Post a new produc
router.post("/", addSingleProduct)


export default router 