import { useState, useEffect, useRef, useContext } from 'react'
import {useParams, Link} from 'react-router-dom'
import {useNavigator} from '../custom-hooks/useNavigator.js'

import { ProductsContext } from './App.jsx'
import {Menu, Footer, Navigator} from './Utilities.jsx'



export function Cart(){

 
    const useCart=useContext(ProductsContext)

    const {cart, addToCart, removeFromCart, totalPrice}=useCart()

/* 
El hook personalizado nos ofrece estados y handlers:
- scrolled: Si el usuario ha hecho scroll en la web, para cambiar el color del navegador
- menuActive: Estado del menú principal que se despliega del navegador
- handleMenuActive: Activar o desactivar el menú del navegador
- storiesActive: Estado del menú de historias que se despliega del navegador
- handleStoriesActive: Activar o desactivar el menú de historias del navegador
*/
    const {scrolled, menuActive, handleMenuActive, storiesActive, handleStoriesActive}=useNavigator()

    


    return <>

                <Navigator scrolled={scrolled} transparent={false} handleMenu={handleMenuActive} handleStories={handleStoriesActive}/>

                <div className="h-30 w-full border-b-2 border-b-blue-950 border pb-4 items-center text-blue-950 pl-10 mt-20 flex justify-center sm:justify-start">
                    <h1 className="text-6xl font-extrabold text-left tracking-widest ">Tu carrito</h1>
                </div>

                <div className="w-full mb-30  flex sm:flex-row flex-col items-center md:items-start   sm:justify-start   text-blue-950">

                    <div className=" w-9/10 sm:w-3/5 p-5 flex flex-col  divide-blue-950  pt-2 divide-y-2">

                        {cart && cart.map((pr)=>{
                            return <div className="flex w-full sm:pb-2 pb-5 sm:gap-5 gap-2   pt-5">

                                <img className="w-1/5 object-contain " src={pr.product.imgUrl} alt="" />
                               <div className="w-3/5">
                                <p className="text-blue-950 lg:text-lg text-xs font-bold tracking-widest ">{pr.product.name}</p>
                                <p className="text-blue-950 lg:text-lg text-xs font-extrabold">{pr.quantity}</p>
                                <span className="w-full flex gap-2 sm:gap-5 justify-start items-center">
                                <p className="text-blue-950 lg:text-lg text-lg w-20 font-semibold">{(pr.quantity*pr.product.price).toFixed(2)} €</p>

                                <button onClick={()=>{
                                    removeFromCart(pr.product)
                                }}  className="cursor-pointer rounded-full h-10 w-10 text-lg md:w-10 md:h-10 text-center  md:text-xl font-bold bg-stone-100 ">-</button>
                                <button onClick={()=>{
                                    addToCart(pr.product)
                                }} className=" cursor-pointer rounded-full h-10 w-10 text-lg md:w-10 md:h-10 text-center md:text-xl font-bold bg-stone-100 ">+</button>
                                </span>
                                </div>



                            </div>
                        })}
                    </div>

                    <div className="w-4/5 sm:w-2/5 pt-5 pb-5 bg-stone-100 flex flex-col  items-end">

                    <h1 className="w-full mb-5 text-right pr-5 text-blue-950 font-extrabold text-sm tracking-widest ">Tu ticket</h1>
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
            {(menuActive || storiesActive) && <Menu handleMenuActive={handleMenuActive} handleStoriesActive ={handleStoriesActive} storiesActive={storiesActive} menuActive={menuActive}/>}


 {/* Se cierra la sección con un Footer personalizado
        Más información sobre el componente Footer en Utilities.jsx */}
    <Footer/>
    
    </>
}