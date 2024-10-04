import express from 'express';
import { addToCart, clearCart, decreseProductQuantity, deleteProductFromCart, userCart } from '../Controllers/cart.js';

import { Authenticated } from '../Middlewares/Auth.js';
const router = express.Router();

//add to cart 
router.post('/add',Authenticated,addToCart)

// get user cart
router.get('/user',Authenticated,userCart)

//delete product from cart
router.delete('/remove/:productId',Authenticated,deleteProductFromCart)

//clear cart
router.delete('/clear',Authenticated,clearCart)

//decrease item  quantity
router.post("/--quantity",Authenticated,decreseProductQuantity)

export default router;
