import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const ProductDetail = () => {
    const [product, setproduct] = useState()
    const {id} = useParams();
    const url = "http://localhost:3000/api"
 

    useEffect(() => {
      
        const fetchProduct = async () =>{
            const api = await axios.get(`${url}/product/${id}`,{
              headers:{
                "Content-Type": "Application/json"
              },
              withCredentials: true
            })
            // console.log(api.data.product);
            setproduct(api.data.product)

        }
        fetchProduct();
    }, [id])
  return (
    <div>ProductDetail = {id}</div>
  )
}

export default ProductDetail