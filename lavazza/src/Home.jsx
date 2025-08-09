import { useState, useEffect, useRef } from 'react'

import lavazza from './assets/home_img/lavazza-logo-white.png'

export  function Home() {

  return <>

  
        <div className="flex  relative flex-nowrap w-full  bg-blue-950 items-center h-20 z-0">
          <img className="min-w-35 max-w-35  z-10 left-4 absolute " src={lavazza} alt="" />
          <nav className="hidden  text-sm font-bold text-white lg:flex gap-8 tracking-widest  md:flex-none absolute left-0 right-0 justify-center z-11">
            <a href="" className=" hover:underline underline-offset-8 decoration-white z-20">PRODUCTOS</a>
            <a href=""className=" hover:underline underline-offset-8 decoration-white z-20">XXXXX STORE</a>
            <a href=""className=" hover:underline underline-offset-8 decoration-white z-20">SOSTENIBILIDAD</a>
            <a href=""className=" hover:underline underline-offset-8 decoration-white z-20">CONTACTO</a>
          </nav>
          <i className="fa-solid fa-magnifying-glass flex-none basis-10 text-center text-2xl text-stone-50 absolute right-40 lg:right-5  z-10"></i>
          <i class="fa-solid fa-bars-staggered flex  text-stone-200 absolute right-12 lg:!hidden" ></i>
        </div>
         

    
  
  </>
  
}