import {Cart} from '../Models/Cart.js'


//adding product to cart
export const addToCart= async(req,res)=>{
    const {productId,title,description,price,quantity,imageSrc} = req.body;
    const userId= req.user;

     let cart = await Cart.findOne({userId});
     if(!cart){
        cart = new Cart ({userId,items:[]})
     }
      const itemIndex = cart.items.findIndex((item)=> item.productId.toString() === productId)

      if(itemIndex > -1){
        cart.items[itemIndex].quantity += quantity;
        cart.items[itemIndex].price += price * quantity;
      }
      else{
        cart.items.push({productId,title,description,price,quantity,imageSrc});
      }

     
     await cart.save();
     res.json({message:"Product Items added to cart",cart})

}

//retrieving cart items for each user  
export const userCart = async(req,res) =>{
    const userId= req.user;
     let cart =  await Cart.findOne({userId});
    if(!cart) return res.json({message: 'Cart not found'})
    res.json({message:"user cart",cart})
}

//delete product from cart
 
export const deleteProductFromCart = async(req,res) =>{
    const productId = req.params.id;
    const userId= req.user;
     let cart =  await Cart.findOne({userId});
    if(!cart) return res.json({message: 'Cart not found'})
     cart.items = cart.items.filter((item)=>item.productId.toString() !== productId)
    await cart.save();
    res.json({message:"product deleted from cart"})
}

//clear cart
//delete product from cart
 
export const clearCart = async(req,res) =>{
    const userId= req.user;
     let cart =  await Cart.findOne({userId});
    if(!cart){
        cart = new Cart({items: []})
    }
    else{
        cart.items = []
    }
    
    await cart.save();
    res.json({message:"cart cleared"})
}

//decrement quantity from cart
export const decreseProductQuantity= async(req,res)=>{
    const {productId,quantity} = req.body;
    const userId= req.user;

     let cart = await Cart.findOne({userId});
     if(!cart){
        cart = new Cart ({userId,items:[]})
     }
      const itemIndex = cart.items.findIndex((item)=> item.productId.toString() === productId)

      if(itemIndex > -1){
        const item = cart.items[itemIndex];

        if(item.quantity > quantity){
          const pricePerUnit = item.price / item.quantity;
          item.quantity -= quantity;
          item.price -= pricePerUnit * quantity;
        }
        else{
         cart.items.splice(itemIndex,1);
        }
         
      }
      else{
      return res.json({message:"invalid product id"})
      }

     
     await cart.save();
     res.json({message:"Item quantity decreased",cart})
}