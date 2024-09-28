 import express from 'express'
 import mongoose from 'mongoose';
 mongoose.connect("")
 
 const app = express();
 mongoose.connect("",{dbName: "EcoCart"}).then(()=> console.log("Connected to MongoDB")).catch((err)=> console.log(err));
 const port = 3000;
 app.listen(port,()=> console.log(`Server is running on port ${port}`))