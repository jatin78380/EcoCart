import express from 'express';
import { addProduct, deleteProductById, getProductById, getProducts, updateProductById } from '../Controllers/product.js';
const router = express.Router();

//add product
router.post('/add',addProduct)  // /api/product/add

//get products
router.get('/all',getProducts)  // /api/product/

//get product by id
router.get('/:id',getProductById)  // /api/product/:id

//update product by id
router.put('/:id',updateProductById)  // /api/product/:id for updation we use put

//delete product by id
 router.delete('/:id',deleteProductById)  // /api/product/:id for updation we use put
export default router;