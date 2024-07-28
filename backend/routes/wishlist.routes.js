import express from 'express';
import { addProductToWishlist, getAllProductsInWishlist,removeProductFromWishlist } from '../controllers/wishlist.controller.js';

const router = express.Router();


router.post('/wishlist/add/:userId/:productId', addProductToWishlist);


router.get('/wishlist/:userId', getAllProductsInWishlist);


router.delete('/wishlist/remove/:userId/:productId', removeProductFromWishlist);

export default router;