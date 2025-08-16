import { useState, useEffect, useRef } from 'react'
import {useParams, Link} from 'react-router-dom'

import lavazza from './assets/home_img/lavazza-logo-white.png'

import lavazza2 from './assets/home_img/lavazza-2-logo.png'

import backgroundCoffee1 from './assets/home_img/background-coffee-1.jpg'
import backgroundCoffee2 from './assets/home_img/background-coffee-2.jpg'
import backgroundCoffee3 from './assets/home_img/background-coffee-3.jpg'
import splash from './assets/collections/splash.png'
import woman from './assets/collections/woman-drinking.jpg'
import licor from './assets/collections/licor.jpg'
import tonic from './assets/collections/tonic.jpg'
import affogato from './assets/collections/affogato.jpg'

import {Footer} from './Home.jsx'
import {Menu} from './Products.jsx'

import { productsInfo } from './products-info.js'

import {Slider} from './Home.jsx'



export function Detail(){

     const [scrolled, setScrolled]=useState(false)

     const [positions, setPositions]=useState([
        {
            "position":1
        },
        {
            "position":2
        }
     ])
    
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

        const givePosition=function(state){
            if(state==0){
                return "absolute translate-x-[-150%]"
            }else if(state==1){
                return "relative"
            }else if(state==2){
                return "absolute translate-x-[150%]"
            }
        }

        const moveBlocks= function(movement){

            let newPositions

            if(movement=="toLeft"){
                    if(positions.some((p)=>{
                        return p.position<1
                    })){
                        return 
                    }else{
                        newPositions=positions.map((p)=>{
                            return {"position":p.position-1}
                        })
                        console.log(newPositions)
                    }
            }else if(movement=="toRight"){
                    if(positions.some((p)=>{
                        return p.position>1
                    })){
                        return 
                    }else{
                        newPositions=positions.map((p)=>{
                            return {"position":p.position+1}
                        })
                        console.log(newPositions)
                    }
            }

            setPositions(newPositions)

        }

        




        return <>
         <div className={`flex fixed ${scrolled?"bg-white text-blue-900":"text-white"} transition-colors ease-in flex-nowrap w-full items-center h-20 z-[30] top-0`}>
                      {!scrolled && <div className={`  left-2 sm:left-4 absolute h-auto`}>
            
                        <img className=" w-20  sm:min-w-35 sm:max-w-35  z-10  " src={lavazza} alt="" />
                        <p className={`mt-1 text-[7px] text-center font-bold sm:text-xs`}>VIGO. SPAGNA. 2001</p>
            
                        </div>}
            
                        {scrolled && <div className={` left-[-10px] sm:left-[-15px] bottom-[0px] sm:bottom-[-30px] absolute h-auto`}>
                        <img className=" w-30  sm:min-w-50 sm:max-w-50  z-10  " src={lavazza2} alt="" />
                        </div>
                    }
                      <nav className="hidden  text-sm font-bold lg:flex gap-8 tracking-widest  md:flex-none absolute left-0 right-0 justify-center z-11">
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
        
                
        <div className="hidden  lg:flex lg:h-200 lg:w-full z-0 absolute top-0 bg-stone-500 bg-blend-multiply bg-[url(./assets/home_img/background-coffee-1.jpg)] bg-size-[1070px] sm:bg-size-[1100px] md:bg-size-[1370px] bg-no-repeat bg-center" >
        
        {/*             <img className=" w-[1300px] h-full object-cover" src={backgroundCoffee1} alt="" />
         */}    </div>

        <div className="w-full text-white bg-cover bg-blend-multiply bg-stone-500 bg-[url(./assets/home_img/background-coffee-1.jpg))] flex flex-col justify-center  z-20 lg:bg-red-100 lg:w-full lg:mt-40 lg:h-150 lg:flex lg:flex-row  ">
            <div className=" hidden  lg:w-2/3 lg:z-10 lg:h-full  lg:flex lg:items-center ">
                <img className="w-full  m-auto h-4/5 object-contain" src={productsInfo[0].collection.products[0].imgUrl} alt="" />
            </div>
         

         <div className="hidden  lg:w-1/3 lg:z-10 lg:pr-3 lg:text-white lg:flex lg:flex-col lg:gap-5 lg:justify-start lg:items-start ">

            <div className="flex z-10 pr-10 flex-row w-full justify-between">
                <p className="text-stone-50 font-bold  text-xs opacity-80 tracking-wide">{productsInfo[0].collection.products[0].category}</p>
                <p className=" font-bold text-xs tracking-wide">Intensidad {productsInfo[0].collection.products[0].intensity}/10</p>
            </div>

            <p className="w-full text-4xl mb-3 font-bold">{productsInfo[0].collection.products[0].name}</p>
            <p className="w-full text-sm text-stone-100 font-semibold">{productsInfo[0].collection.products[0].description}</p>
            <div className="w-full flex flex-row gap-10 flex-wrap">
            {productsInfo[0].collection.products[0].options.map((o)=>{
                    return <button className="w-1/4 min-w-22 p-1 rounded-xl bg-white text-blue-950 font-bold tracking-widest">
                       <i class="fa-solid fa-box"></i> {o}
                    </button>
            })}
            </div>

            <button className="w-full p-4 mt-10 text-md tracking-widest font-bold text-center rounded-3xl border-1 border-white">COMPRA ONLINE</button>
         
         </div>

         <div className="lg:hidden flex flex-col justify-center items-center">
            <div className={`relative mt-20 overflow-hidden flex justify-center items-center w-full`}>
                <button onClick={()=>{
                    moveBlocks("toRight")
                }} className={`cursor-pointer ${positions[1].position>1?"hidden":""} rounded-full h-8 pb-1 pr-1 text-center border-1 border-white text-white font-bold text-xl w-8 `}>&lt;</button>
                <div className={` ${givePosition(positions[0].position)} p-10  flex items-center transition-transform h-100 max-w-[700px] duration-300 ease-in-out w-4/5  text-center`}>
                    <img src={productsInfo[0].collection.products[0].imgUrl} alt="" />
                </div>
                <div className={`${givePosition(positions[1].position)} p-10   flex items-center transition-all h-100 duration-300 ease-in-out  w-4/5 z-10  text-stone-50 font-semibold text-center`}>
                    <p>

                    {productsInfo[0].collection.products[0].description}
                    </p>
                </div>
             <button onClick={()=>{
                    moveBlocks("toLeft")
                }} className={`cursor-pointer ${positions[0].position<1?"hidden":""} rounded-full h-8 pb-1 pl-1 text-center border-1 border-white text-white font-bold text-xl w-8 `}>&gt;</button>


            </div>

         <div className="w-full justify-between px-5 flex ">
                <p className="text-stone-50 font-bold  text-xs opacity-80 tracking-wide">{productsInfo[0].collection.products[0].category}</p>
                <p className=" font-bold text-xs tracking-wide">Intensidad {productsInfo[0].collection.products[0].intensity}/10</p>
         </div>

            <p className="w-full text-center text-4xl mb-3 mt-10 font-bold">{productsInfo[0].collection.products[0].name}</p>

                <span className="w-1/4 bg-white justify-center px-2 py-1 text-blue-950 text-md mt-5 rounded-md m-auto flex gap-1">
                <i class="fa-solid fa-box"></i>
                <select name="options" id="options">
                    {productsInfo[0].collection.products[0].options.map((o)=>{
                        return <option value={o}>{o}</option>
                    })}
                </select>
                </span>

            <button className="w-9/10 px-4 py-2 mt-10 m-auto text-md tracking-widest font-bold text-center rounded-4xl border-1 border-white">COMPRA ONLINE</button>
        </div>


         </div>

            
                {menuActive && <Menu handleMenuActive={handleMenuActive}/>}
        </>

}