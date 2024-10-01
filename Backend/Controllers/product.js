import {Products} from '../Models/Product.js';

//add product
export const addProduct = async (req,res) =>{
    const {title,description,price,category,quantity,imageSrc} = req.body;
    try {
        let product = await Products.create({
            title,
            description,
            price,
            category,
            quantity,
            imageSrc
        })
        res.json({message:'Product added successfully',product})
    } catch (error) {
        res.json(error.message)
    }
}

//get products
export const getProducts = async (req,res) =>{
    let products = await Products.find().sort({createdAt: -1}); //created at -1 is which are created latest
    res.json(products)
}

//find product by id    
export const getProductById = async(req,res) =>{
    const id =  req.params.id;
    let product = await Products.findById(id);
    if(!product) return res.json({message: "Invalid Id", success:false});
    res.json({message: "Specific Product", success:true,product});
}

//update product by id
export const updateProductById = async(req,res) =>{
    const id =  req.params.id;
    let product = await Products.findByIdAndUpdate(id,req.body,{new:true});
    if(!product) return res.json({message: "Invalid Id", success:false});
    res.json({message: " Product has been updated",product});
}

//delete product by id
export const deleteProductById = async(req,res) =>{
    const id =  req.params.id;
    let product = await Products.findByIdAndDelete(id);
    if(!product) return res.json({message: "Invalid Id", success:false});
    res.json({message: " Product has been deleted",product});
}