import express from 'express';
import { login, profile, register, users } from '../Controllers/user.js';
import { Authenticated} from '../Middlewares/Auth.js'; 
const router = express.Router();


//register user
router.post('/register',register)  // /api/user/register

// login user
router.post('/login',login)  // /api/user/login

//get all users
router.get('/all',users)  // /api/user/

//get user profile
router.get('/profile',Authenticated,profile)  // /api/user/profile

export default router;