 import express from 'express';
 import mongoose from 'mongoose';
 
import userRouter from './Routes/user.js'
import productRouter from './Routes/product.js'
 const app = express();
 
 app.use(express.json());
 //home testing route 
 app.get('/',(req,res)=> res.json({message:'This is the home page route'}));

 //user Router
 app.use('/api/user',userRouter)

 //product Router
 app.use('/api/product',productRouter)
 

 mongoose.connect("",{dbName: "EcoCart"}).then(()=> console.log("Connected to MongoDB")).catch((err)=> console.log(err));
 const port = 3000;
 app.listen(port,()=> console.log(`Server is running on port ${port}`))