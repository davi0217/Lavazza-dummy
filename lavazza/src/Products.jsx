import { useState, useEffect, useRef, useContext } from 'react'
import {useParams, Link} from 'react-router-dom'

import lavazza from './assets/home_img/lavazza-logo-white.png'

import lavazza2 from './assets/home_img/lavazza-2-logo.png'
import productsHeader from './assets/products/products-header.png'
import productsHeader2 from './assets/products/products-header-2.png'

import {productsInfo} from './products-info.js'
import {Footer} from './Home.jsx'

import { productsDisplay } from './products-display.js'

import {ProductsContext} from './App.jsx'


 
export function Products(){

    const params=useParams()
    console.log(params.category)

    const [display, setDisplay]=useState()
    const [productsToShow, setProductsToShow]=useState()
    const [menuActive, setMenuActive]=useState(false)

    const useCart=useContext(ProductsContext)

   const {cart, addToCart, removeFromCart}=useCart()

   cart.forEach((c)=>{

    console.log(c.quantity)
   })

   

    useEffect(()=>{
        setMenuActive(false)
        Object.keys(productsDisplay).forEach((d)=>{
            console.log(d)
            console.log(productsDisplay[d])
            if(params.category==d){
                setDisplay(productsDisplay[d])
            }
        })

        let newProducts=[];

        productsInfo.forEach((p)=>{
            if(params.category=="cafe"){
                p.collection.products.forEach((pr)=>{
                   
                        newProducts.push(pr)
                })
            }else{
                p.collection.products.forEach((pr)=>{
                    if(pr.categoryLink==params.category){
                        newProducts.push(pr)
                    }
                })
            }
        })
        console.log(newProducts)

        setProductsToShow(newProducts)

    },[params.category])

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

    const [showDescription, setShowDescription]=useState(false)

    const handleShowDescription=function(){
        setShowDescription(!showDescription)
    }


   const handleMenuActive=function(state){
    setMenuActive(state)
   }


  return <section > 

  

            <div className="absolute  top-20 w-full z-0 ">
                
               <img className=" hidden z-0  sm:flex brightness-150  w-full object-cover h-80 md:h-80 lg:h-80 " src={productsHeader} alt="" /> 
           <img className="sm:hidden z-0 brightness-150 opacity-80  w-full object-cover h-80 md:h-80 lg:h-80 " src={productsHeader2} alt="" />
                
            </div>
           
  
            <div className={`flex fixed text-blue-950 bg-white  transition-colors ease-in flex-nowrap w-full items-center h-20 z-[30] top-0`}>
              <div className={` left-[-10px] sm:left-[-15px] bottom-[0px] sm:bottom-[-30px] absolute h-auto`}>
               <Link to="/"> <img className=" w-30 cursor-pointer sm:min-w-50 sm:max-w-50  z-10  " src={lavazza2} alt="" /></Link>
                </div>
            
              <nav className="hidden  text-sm font-bold  lg:flex gap-8 tracking-widest  md:flex-none absolute left-0 right-0 justify-center z-[11]">
                <a href="" className={` hover:underline underline-offset-8 decoration-blue-900 z-20`} onClick={(e)=>{
                    e.preventDefault()
                    handleMenuActive(true)
                }}>PRODUCTOS</a>
                <a href=""className={` hover:underline underline-offset-8 decoration-blue-900 z-20`} onClick={(e)=>{
                    e.preventDefault()
                    handleMenuActive(true)
                }}>LAVAZZA STORE</a>
                <a href=""className={` hover:underline underline-offset-8 decoration-blue-900 z-20`} onClick={(e)=>{
                    e.preventDefault()
                    handleMenuActive(true)
                }}>SOSTENIBILIDAD</a>
                <a href=""className={` hover:underline underline-offset-8 decoration-blue-900 z-20`} onClick={(e)=>{
                    e.preventDefault()
                    handleMenuActive(true)
                }}>CONTACTO</a>
              </nav>
              <i className={`fa-solid fa-magnifying-glass flex-none basis-10 text-center text-2xl text-blue-900 absolute right-40 lg:right-5  z-10`}></i>
              <i className={`fa-solid fa-bars-staggered flex  text-blue-900 absolute right-12 lg:!hidden`} onClick={()=>{
                    handleMenuActive(true)
                }}></i>
            </div>

            {menuActive && <Menu handleMenuActive={handleMenuActive}/>}

           
    
            <div className=" static w-full h-auto mt-10 text-blue-950  flex flex-col items-center gap-3 pt-15 pb-10 z-20 ">
            <p className="font-extrabold w-2/3 z-20 text-4xl text-center ">{display?.title}</p>
            <p className="font-bold z-20 font-[Corinthia] mt-2 w-2/3  text-4xl text-center ">{display?.subtitle}</p>
           <div className={` w-2/3 z-20 px-1 sm:px-10 h-auto `}>
            <p className={`${showDescription?"h-60 lg:h-50":"h-18 "}  overflow-hidden transition-[height] duration-300 ease-in-out font-normal  mt-2 w-full  text-md text-center`}>{display?.description}</p>
           </div>
            <button onClick={()=>{
                handleShowDescription()
            }} className="cursor-pointer z-20 text-md font-bold   tracking-widest">{`${showDescription?"OCULTAR":"VER MÁS"}`}</button> 
            </div>

            <section className={` mt-10 p-5  w-full`}>
                    <div className="w-full flex flex-col sm:gap-0 gap-3 sm:flex-row sm:justify-between justify-start sm:items-center items-star text-blue-950 tracking-widest">
                        <div className="w-1/6 flex gap-2 justify-start items-center">
                        <i className="fa-solid fa-filter"></i>
                        <p className=" text-sm font-bold">FILTROS</p>
                        </div>
                        <div className="w-60  flex gap-1 justify-start sm:justify-end items-center">
                        <p className="text-sm text-blue-300 ">Ordenar por</p>
                        <select className="text-sm font-bold text-blue-950" name="sort" id="sort">
                            <option value="Sugerencia">Sugerencia</option>
                        </select>
                        </div>


                    </div>

                  <article className="flex flex-wrap justify-center gap-3 w-full pt-10">

                        {productsToShow?.map((p)=>{

                            return <div className=" w-80 relative shrink-0 h-130 rounded-md bg-stone-50 flex flex-col items-center p-5 ">
                            <img className="w-50 min-h-40 object-contain  mt-10" src={p.imgUrl} alt="" />
                            <p className="text-sm text-blue-950 tracking-widest mb-5">{p.category}</p>
                            <p className="text-xl min-h-15 text-blue-950 font-extrabold">{p.name}</p>
                            <p className="text-xs text-blue-950 font-semibold">Intensidad {p.intensity}/10</p>    
                            <div className="w-19/20  bg-amber-100 flex items-center rounded-xl mt-10 h-27 pl-5 ">
                                <div className="w-1/3 flex items-center gap-2 bg-white rounded-xl h-10 text-blue-950 font-bold text-left pl-2" >
                                <i className="fa-solid fa-box text-blue-950"></i>
                                <span className=" text-blue-950 " value=""> {p.quantity}</span>        
                                </div>
                            </div>
                                <button className="w-19/20 bg-blue-950 hover:bg-blue-900 transition-colors ease-in text-white rounded-4xl mt-5 p-2 font-extrabold tracking-widest text-sm">COMPRA ONLINE </button>
                                <div className="absolute top-2 right-2 w-1/3 flex items-center justify-between pr-2">
                                <p className="text-blue-950 font-extrabold tracking-widest text-sm">{p.price} €</p>
                                <i onClick={()=>{
                                    addToCart(p)
                                }} class=" cursor-pointer fa-solid fa-cart-shopping p-2 rounded-md hover:bg-blue-950 hover:text-white"></i>
                                </div>
                          </div>
                        })}

                    


                  </article>

            <Footer/>

            </section>




        </section>
 }


 export function Menu({handleMenuActive}){

    const [positions, setPositions]=useState(
        [
            {
                "name":"general",
                "position":"center",
            },
            {
                "name":"products",
                "position":"right",
            },
            {
                "name":"cafe",
                "position":"right",
            },
            {
                "name":"maquinas",
                "position":"right",
            },
            {"name":"collections",
                "position":"right",
            },
            {
                "name":"stories",
                "position":"right",
            },
        ]
    )

    const moveBlock=function(direction, name){

        let newBlocks

        if(direction=="left"){

            newBlocks=positions.map((b)=>{
                    if(b.name==name){
                        b.position=b.position=="right"?"center":"left"
                    }
                    return b
            })       
        }

        if(direction=="right"){

            newBlocks=positions.map((b)=>{
                    if(b.name==name){
                        b.position=b.position=="left"?"center":"right"
                    }
                    return b
            })       
        }

        setPositions(newBlocks)
       
       
    }

    const givePosition=function(position){

            if(position=="left"){
                return "translate-x-[-100%] "
            }else if(position=="center"){
                return "translate-x-[0%]"
            }else if(position=="right"){
                return "translate-x-[100%] "
            }

    }

    return <section>
<div className="fixed py-5 px-5  top-20 h-120 w-full bg-blue-950 opacity-97 z-[30]">
              <div className={`flex fixed text-white bg-blue-950 transition-colors ease-in flex-nowrap w-full items-center h-20 z-[30] top-0 pt-5 left-0`}>
              
                           <div className={`left-5  absolute h-auto`}>
                          <Link to="/"><img className=" w-30 cursor-pointer sm:min-w-50 sm:max-w-50  z-10  " src={lavazza} alt="" /></Link>
                            <p className={`mt-1 text-[7px] text-white text-center font-bold sm:text-xs`}>VIGO. SPAGNA. 2001</p>

                          </div>
                      
                        <nav className="hidden  text-sm font-bold  lg:flex gap-8 tracking-widest  md:flex-none absolute left-0 right-0 justify-center z-11">
                          <a href="" className={` hover:underline underline-offset-8 decoration-white z-20`}>PRODUCTOS</a>
                          <a href=""className={` hover:underline underline-offset-8 decoration-white z-20`}>LAVAZZA STORE</a>
                          <a href=""className={` hover:underline underline-offset-8 decoration-white z-20`}>SOSTENIBILIDAD</a>
                          <a href=""className={` hover:underline underline-offset-8 decoration-white z-20`}>CONTACTO</a>
                        </nav>
                        <i className={`fa-solid fa-magnifying-glass flex-none basis-10 text-center text-2xl text-stone-50 absolute right-40 lg:right-5  z-10`}></i>
                        <i className={`fa-solid fa-bars-staggered flex text-stone-50 absolute right-12 lg:!hidden`}></i>
                      </div>
              


                <div className="flex h-15 justify-end">
                    <i class="fa-solid fa-xmark text-white cursor-pointer text-5xl" onClick={()=>{
                    handleMenuActive(false)
                }}></i>

                </div>
               <div className="hidden lg:grid lg:grid-cols-3 lg:w-3/4 lg:gap-1">
                <div className="col-span-1 w-3/4 text-white pl-3  pt-5 bg-stone-400  rounded-sm">

                        <p className="text-sm mb-5 font-extrabold tracking-widest">COLLECTIONS</p>
                        <p className="text-sm mb-5 font-bold tracking-widest "><Link to="/collections/rossa">Qualità Rossa</Link></p>
                        <p className="text-sm mb-5 font-bold tracking-widest ">Qualità Oro</p>
                        <p className="text-sm mb-5 font-bold tracking-widest ">Espresso</p>
                        <p className="text-sm mb-5 font-bold tracking-widest ">A modo mio</p>
                        <p className="text-sm mb-5 font-bold tracking-widest ">¡Tierra!</p>
                </div>
                <div className="col-span-1 text-white pl-3  rounded-sm">

                        
                        <p className="text-sm mb-5 font-bold cursor-pointer tracking-widest "><Link to="/products/cafe">CAFÉ</Link></p>
                        <p className="text-sm mb-5 font-bold cursor-pointer tracking-widest "><Link to="/products/grano">Grano</Link></p>
                        <p className="text-sm mb-5 font-bold cursor-pointer tracking-widest "><Link to="/products/molido">Café molido</Link></p>
                        <p className="text-sm mb-5 font-bold cursor-pointer tracking-widest "><Link to="/products/capsula">Cápsulas</Link></p>
                        <p className="text-sm text-stone-400 mb-5 font-bold tracking-widest ">A Modo Mio</p>
                        <p className="text-sm mb-5 text-stone-400 font-bold tracking-widest ">Cápsulas compatibles con máquinas</p>
                </div>
                <div className="col-span-1 text-white pl-3   rounded-sm">

                        <p className="text-sm mb-5 font-extrabold tracking-widest">MÁQUINAS DE CAFÉ</p>
                        <p className="text-sm mb-5 font-bold tracking-widest ">Máquinas de café</p>

                </div>


               </div>

               <div className="lg:hidden flex overflow-hidden  w-full">

                <div className="relative w-full h-85 overflow-y-scroll  overflow-x-hidden">
                    <div className={`absolute ${givePosition(positions[0].position)} top-0 left-0 transition-transform duration-500 ease-in-out py-5 px-5 flex flex-col gap-6 text-2xl border-b-2 w-full border-white justify-center items-center text-white font-extrabold `}>
                        <p className="w-full cursor-pointer tracking-wide " onClick={()=>{
                            moveBlock("left","general")
                            moveBlock("left","products")
                        }}>PRODUCTOS</p>
                        <p className="w-full cursor-pointer tracking-wide " onClick={()=>{
                            moveBlock("left","stories")
                            moveBlock("left","general")
                        }}>LAVAZZA STORIES</p>
                        <p className="w-full tracking-wide ">SOSTENIBILIDAD</p>
                        <p className="w-full tracking-wide ">CONTACTO</p>
                    </div>
                    <div className={`absolute ${givePosition(positions[1].position)} top-0 left-0 transition-transform duration-500 ease-in-out py-5 px-5 flex flex-col gap-5 text-2xl  w-full border-white justify-center items-center text-white font-extrabold `}>
                        <p className="w-full cursor-pointer text-sm tracking-wide " onClick={()=>{
                            moveBlock("right","general")
                            moveBlock("right","products")
                        }}>&lt;  BACK</p>
                        <p className="w-full text-md font-extrabold tracking-wide ">PRODUCTOS</p>
                        <p className="w-full cursor-pointer text-sm tracking-wide " onClick={()=>{
                            moveBlock("left","products")
                            moveBlock("left","cafe")
                        }}>Café</p>
                        <p className="w-full cursor-pointer border-b-2 border-white pb-5 text-sm tracking-wide " onClick={()=>{
                            moveBlock("left","products")
                            moveBlock("left","maquinas")
                        }}>Máquinas de café</p>
                        <p className="w-full cursor-pointer text-sm tracking-wide " onClick={()=>{
                            moveBlock("left","products")
                            moveBlock("left","maquinas")
                        }}>Collections</p>
                    </div>
                    <div className={`absolute ${givePosition(positions[2].position)} top-0 left-0 transition-transform duration-500 ease-in-out py-5 px-5 flex flex-col gap-5 text-2xl  w-full border-white justify-center items-center text-white font-extrabold `}>
                        <p className="w-full cursor-pointer text-sm tracking-wide " onClick={()=>{
                            moveBlock("right","cafe")
                            moveBlock("right","products")
                        }}>&lt;  PRODUCTOS</p>
                        <p className="w-full text-[20px] font-extrabold cursor-pointer tracking-wide "><Link to="/products/cafe">Café</Link></p>
                        <p className="w-full text-sm cursor-pointer tracking-wide "><Link to="/products/grano">Granos</Link></p>
                        <p className="w-full text-sm cursor-pointer tracking-wide "><Link to="/products/molido">Café molido</Link></p>
                        <p className="w-full  text-sm cursor-pointer tracking-wide "><Link to="/products/capsula">Cápsulas</Link></p>

                        <p className="w-full text-stone-500 text-sm tracking-wide ">A Modo Mio</p>
                        <p className="w-full text-stone-500 text-sm tracking-wide ">Cápsulas compatibles con máquinas</p>
                    </div>
                    <div className={`absolute ${givePosition(positions[3].position)} top-0 left-0 transition-transform duration-500 ease-in-out py-5 px-5 flex flex-col gap-5 text-2xl  w-full border-white justify-center items-center text-white font-extrabold `}>
                        <p className="w-full cursor-pointer text-sm tracking-wide " onClick={()=>{
                            moveBlock("right","maquinas")
                            moveBlock("right","products")
                        }}>&lt;  PRODUCTOS</p>
                        <p className="w-full text-[20px] font-extrabold tracking-wide ">Máquinas de café</p>
                        <p className="w-full text-sm tracking-wide ">Máquinas de café</p>
                    </div>
                    <div className={`absolute ${givePosition(positions[4].position)} top-0 left-0 transition-transform duration-500 ease-in-out py-5 px-5 flex flex-col gap-5 text-2xl  w-full border-white justify-center items-center text-white font-extrabold `}>
                        <p className="w-full cursor-pointer text-sm tracking-wide " onClick={()=>{
                            moveBlock("right","collections")
                            moveBlock("right","products")
                        }}>&lt;  PRODUCTOS</p>
                        <p className="w-full text-[20px] font-extrabold tracking-wide ">Collections</p>
                        <p className="w-full text-sm tracking-wide "><Link to="/collections/rossa">Qualità Rossa</Link></p>
                        <p className="w-full text-sm tracking-wide ">Qualità Oro</p>
                        <p className="w-full text-sm tracking-wide ">Espresso</p>
                        <p className="w-full text-sm tracking-wide ">A Modo Mio</p>
                        <p className="w-full text-sm tracking-wide ">¡Tierra!</p>
                    </div>
                    <div className={`absolute ${givePosition(positions[5].position)} top-0 left-0 transition-transform duration-500 ease-in-out py-5 px-5 flex flex-col gap-5 text-2xl  w-full border-white justify-center items-center text-white font-extrabold `}>
                        <p className="w-full cursor-pointer text-sm tracking-wide " onClick={()=>{
                            moveBlock("right","stories")
                            moveBlock("right","general")
                        }}>&lt;  BACK</p>
                        <p className="w-full text-[30px] mb-8  font-extrabold tracking-wide ">LAVAZZA STORIES</p>
                        <p className="w-full text-sm pl-3 mb-4 tracking-wide ">Blend for better: Sostenibilidad</p>
                        <p className="w-full text-sm pl-3 mb-4 tracking-wide ">Coffee Secrets</p>
                        <p className="w-full text-sm pl-3 mb-4 tracking-wide ">Calendario Lavazza</p>
                        <p className="w-full text-sm pl-3 mb-4 tracking-wide ">Top Gastronomy</p>
                        <p className="w-full text-sm pl-3 mb-4 tracking-wide ">Deporte</p>
                    </div>

                </div>





               </div>
              
                
                
            </div>

    </section>
 }