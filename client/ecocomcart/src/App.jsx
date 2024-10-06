import React, { useContext } from 'react'
import AppContext from './context/AppContext'
import ShowProduct from './components/product/ShowProduct'
import ProductDetail from './components/product/ProductDetail'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
const App = () => {
  // const {data} = useContext(AppContext)
  return (
    <Router>
      <Routes>
          <Route path='/'  element={<ShowProduct/>}/>
          <Route path= '/product/:id' element={<ProductDetail/>} />
        </Routes>
    </Router>
  )
}

export default App