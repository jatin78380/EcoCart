import express from 'express';
import { login, register, users } from '../Controllers/user.js';
const router = express.Router();


//register user
router.post('/register',register)  // /api/user/register

// login user
router.post('/login',login)  // /api/user/login

//get all users
router.get('/all',users)  // /api/user/

export default router;