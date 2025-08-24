import { useState, useEffect, useRef, useContext, createContext } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import {Home} from './Home.jsx'

import {Products} from './Products.jsx'
import {useCart} from '../custom-hooks/useCart.js'

import {Collections} from './Collections.jsx'
import {Detail} from './Detail.jsx'
import {Cart} from './Cart.jsx'
import {Environement} from './Environement.jsx'
import {Contact} from './Contact.jsx'
import {Recetas} from './Recetas.jsx'
import {DetalleRecetas} from './DetalleRecetas.jsx'
import {Chefs} from './Chefs.jsx'
import {DetalleChefs} from './DetalleChefs.jsx'
import {DetalleEnvironement} from './DetalleEnvironement.jsx'

export const ProductsContext=createContext()


function App() {

  

 

  return <main className="font-[Raleway] overflow-hidden">

    <ProductsContext.Provider value={useCart}>

 <BrowserRouter>
  <Routes>



  <Route path="/" element={<Home/>}> </Route>
  <Route path="/products/:category" element={<Products/>}></Route>
  <Route path="/collections/:id" element={<Collections/>}></Route>
  <Route path="/detail/:collection/:product" element={<Detail/>}></Route>
  <Route path="/cart" element={<Cart/>}></Route>
  <Route path="/esg" element={<Environement/>}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
  <Route path="/recetas" element={<Recetas/>}></Route>
  <Route path="/recetas/:id" element={<DetalleRecetas/>}></Route>
  <Route path="/chefs" element={<Chefs/>}></Route>
  <Route path="/chefs/:id" element={<DetalleChefs/>}></Route>
  <Route path="/esg/:id" element={<DetalleEnvironement/>}></Route>

</Routes>
 </BrowserRouter>

 </ProductsContext.Provider>
  
  
  </main>
  
}

export default App
