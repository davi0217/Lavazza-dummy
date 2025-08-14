import { useState, useEffect, useRef } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import {Home} from './Home.jsx'

import {Products} from './Products.jsx'

import {Collections} from './Collections.jsx'


function App() {

  return <main className="font-[Raleway] overflow-hidden">

 <BrowserRouter>
  <Routes>

  <Route path="/" element={<Home/>}> </Route>
  <Route path="/products/:category" element={<Products/>}></Route>
  <Route path="/collections/:collection" element={<Collections/>}></Route>

</Routes>
 </BrowserRouter>
  
  
  </main>
  
}

export default App
