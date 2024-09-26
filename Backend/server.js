 import express from 'express'
 import mongoose from 'mongoose';
 mongoose.connect("")
 
 const app = express();
 mongoose.connect("")
 const port = 3000;
 app.listen(port,()=> console.log(`Server is running on port ${port}`))