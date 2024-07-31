import express from 'express';
import { addSingleProduct, getProducts, getSingleProduct ,getProductsByCategory, removeProduct } from '../controllers/product.controller.js';

const router = express.Router();
//Get all products
router.get("/", getProducts)

//Get single product
router.get("/:productId", getSingleProduct)

// Get Category
router.get("/category/:categoryId", getProductsByCategory); 

//Post a new produc
router.post("/", addSingleProduct)
router.delete('/:productId',removeProduct)


export default router 


