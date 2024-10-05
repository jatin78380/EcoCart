import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

const ShowProduct = () => {
  const {products} = useContext(AppContext)
  return (
    <>
    {products?.map((product)=><div key={product._id} className='container'>
      
    <div className="card" style={{width: '18rem'}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
   
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>)}
   </>
  )
}

export default ShowProduct;