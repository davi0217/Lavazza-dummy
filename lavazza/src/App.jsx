import { useState, useEffect, useRef, useContext, createContext } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import {Home} from './Home.jsx'

import {Products} from './Products.jsx'
import {useCart} from './useCart.js'

import {Collections} from './Collections.jsx'
import {Detail} from './Detail.jsx'

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

</Routes>
 </BrowserRouter>

 </ProductsContext.Provider>
  
  
  </main>
  
}

export default App
