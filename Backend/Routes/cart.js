import express from 'express';
import { addToCart, clearCart, deleteProductFromCart, userCart } from '../Controllers/cart.js';

const router = express.Router();

//add to cart 
router.post('/add',addToCart)

// get user cart
router.get('/user',userCart)

//delete product from cart
router.delete('/remove/:productId',deleteProductFromCart)

//clear cart
router.delete('/clear',clearCart)

export default router;
