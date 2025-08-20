import { useState, useEffect, useRef, useContext } from 'react'
import {useParams, Link} from 'react-router-dom'

import { ProductsContext } from './App.jsx'
import {Menu} from './Products.jsx'
import {Footer} from './Home.jsx'
import lavazza from './assets/home_img/lavazza-logo-white.png'

import lavazza2 from './assets/home_img/lavazza-2-logo.png'


export function Cart(){

 
    const useCart=useContext(ProductsContext)

    const {cart, addToCart, removeFromCart, totalPrice}=useCart()

    const [scrolled, setScrolled]=useState(false)

    useEffect(()=>{

      const handleScrolled=function(){

        if(window.scrollY>100){
          setScrolled(true)
        }else{
          setScrolled(false)
        }
      }

      window.addEventListener("scroll", handleScrolled)

      return ()=>removeEventListener("scroll", handleScrolled)


    },[])

     const [menuActive, setMenuActive]=useState(false)

    useEffect(()=>{

        let x=window.scrollX
        let y=window.scrollY
        const disableScroll=function(){
            window.scrollTo(x,y)
        }
        if(menuActive){


        window.addEventListener("scroll", disableScroll)

    }

        return ()=>window.removeEventListener("scroll", disableScroll)

    },[menuActive])

    const handleMenuActive=function(state){
      setMenuActive(state)
    }


    

    return <>

     <div className={`flex fixed ${scrolled?"bg-blue-100 text-blue-950":"text-white bg-blue-950"} transition-colors ease-in flex-nowrap w-full items-center h-20 z-[30] top-0`}>
                  {!scrolled && <div className={`  left-2 sm:left-4 absolute h-auto`}>
                        
                    <img className=" w-20  sm:min-w-35 sm:max-w-35  z-10  " src={lavazza} alt="" />
                    <p className={`mt-1 text-[7px] text-center font-bold sm:text-xs`}>VIGO. SPAGNA. 2001</p>
        
                    </div>}
        
                    {scrolled && <div className={` left-[-10px] sm:left-[-15px] bottom-[0px] sm:bottom-[-30px] absolute h-auto`}>
                    <img className=" w-30  sm:min-w-50 sm:max-w-50  z-10  " src={lavazza2} alt="" />
                    </div>
                }
                  <nav className="hidden  text-sm font-bold  lg:flex gap-8 tracking-widest  md:flex-none absolute left-0 right-0 justify-center z-11">
                    <a href="" className={` hover:underline underline-offset-8 ${ scrolled?"decoration-blue-900":"decoration-white"} z-20`} onClick={(e)=>{
                            e.preventDefault()
                            handleMenuActive(true)
                        }}>PRODUCTOS</a>
                    <a href=""className={` hover:underline underline-offset-8 ${ scrolled?"decoration-blue-900":"decoration-white"} z-20`} onClick={(e)=>{
                            e.preventDefault()
                            handleMenuActive(true)
                        }}>LAVAZZA STORE</a>
                    <a href=""className={` hover:underline underline-offset-8 ${ scrolled?"decoration-blue-900":"decoration-white"} z-20`} onClick={(e)=>{
                            e.preventDefault()
                            handleMenuActive(true)
                        }}>SOSTENIBILIDAD</a>
                    <a href=""className={` hover:underline underline-offset-8 ${ scrolled?"decoration-blue-900":"decoration-white"} z-20`} onClick={(e)=>{
                            e.preventDefault()
                            handleMenuActive(true)
                        }}>CONTACTO</a>
                  </nav>
                  <i className={`fa-solid fa-magnifying-glass flex-none basis-10 text-center text-2xl ${scrolled?"text-blue-900":"text-stone-50"} absolute right-40 lg:right-5  z-10`}></i>
                  <i className={`fa-solid fa-bars-staggered flex  ${scrolled?"text-blue-900":"text-stone-50"} absolute right-12 lg:!hidden`} onClick={(e)=>{
                            e.preventDefault()
                            handleMenuActive(true)
                        }}></i>
                </div>

                <div className="h-30 w-full border-b-2 border-b-blue-950 border pb-4 items-center text-blue-950 pl-10 mt-20 flex justify-center sm:justify-start">
                    <h1 className="text-6xl font-extrabold tracking-widest ">Your cart</h1>
                </div>

                <div className="w-full mb-30  flex sm:flex-row flex-col items-center   sm:justify-start   text-blue-950">

                    <div className=" w-9/10 sm:w-3/5 p-5 flex flex-col  divide-blue-950  pt-2 divide-y-2">

                        {cart && cart.map((pr)=>{
                            return <div className="flex w-full sm:pb-2 pb-5 sm:gap-5 gap-2   pt-5">

                                <img className="w-1/5 object-contain " src={pr.product.imgUrl} alt="" />
                               <div className="w-3/5">
                                <p className="text-blue-950 lg:text-lg text-xs font-bold tracking-widest ">{pr.product.name}</p>
                                <p className="text-blue-950 lg:text-lg text-xs font-extrabold">{pr.quantity}</p>
                                <span className="w-full flex gap-2 sm:gap-5 justify-start items-center">
                                <p className="text-blue-950 lg:text-lg text-xs w-17 font-semibold">{(pr.quantity*pr.product.price).toFixed(2)} €</p>

                                <button onClick={()=>{
                                    removeFromCart(pr.product)
                                }}  className="cursor-pointer rounded-full h-4 w-4 text-xs md:w-10 md:h-10 text-center  md:text-xl font-bold bg-stone-100 ">-</button>
                                <button onClick={()=>{
                                    addToCart(pr.product)
                                }} className=" cursor-pointer rounded-full h-4 w-4 text-xs md:w-10 md:h-10 text-center md:text-xl font-bold bg-stone-100 ">+</button>
                                </span>
                                </div>



                            </div>
                        })}
                    </div>

                    <div className="w-2/5 pt-5 pb-5 bg-stone-100 flex flex-col  items-end">

                    <h1 className="w-full mb-5 text-right pr-5 text-blue-950 font-extrabold text-sm tracking-widest ">YOUR TOTAL</h1>
                    {cart && cart.map((pr)=>{
                            return <div className="mb-4 w-full pr-5 pb-5 ">

                                <p className="font-thin text-md text-blue-950 pl-3 ">{pr.quantity} x {pr.product.name}</p>
                                <p className="pl-3  text-right font-extrabold text-sm">...{(pr.product.price*pr.quantity).toFixed(2)} €</p>



                            </div>
                        })}

                        <p className="w-1/2 pt-3 text-right text-md sm:text-xl  border-t-2 border-t-stone-200 border-dotted pr-5">{totalPrice.toFixed(2)} €</p>

                        <button className=" w-1/2 m-auto p-2 rounded-4xl bg-blue-950 text-white tracking-widest font-extrabold text-xs mt-5 cursor-pointer ">COMPRAR AHORA</button>

                    </div>


                </div>
    {menuActive && <Menu handleMenuActive={handleMenuActive}/>}

    <Footer/>
    
    </>
}