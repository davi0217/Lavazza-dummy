import { useState, useEffect, useRef } from 'react'
import {useParams, Link} from 'react-router-dom'

import lavazza from './assets/home_img/lavazza-logo-white.png'

import lavazza2 from './assets/home_img/lavazza-2-logo.png'

import backgroundCoffee1 from './assets/home_img/background-coffee-1.jpg'
import backgroundCoffee2 from './assets/home_img/background-coffee-2.jpg'
import backgroundCoffee3 from './assets/home_img/background-coffee-3.jpg'
import coffeeProduct1 from './assets/home_img/coffee-product-1.png'
import splash from './assets/collections/splash.png'
import woman from './assets/collections/woman-drinking.jpg'
import licor from './assets/collections/licor.jpg'
import tonic from './assets/collections/tonic.jpg'
import affogato from './assets/collections/affogato.jpg'
import map from './assets/products/world-map.png'
const grain= "./assets/products/grain.jpeg"
const leaves= "./assets/products/leaves.jpeg"
const waves= "./assets/products/waves.jpg"
const cream= "./assets/products/cream.avif"

import {Footer} from './Home.jsx'
import {Menu} from './Products.jsx'

import { productsInfo } from './products-info.js'

import {Slider} from './Home.jsx'
import {Slider2} from './Home.jsx'




export function Detail(){

    let params=useParams()

    const[product, setProduct]=useState()

     const [scrolled, setScrolled]=useState(false)

     const [positions, setPositions]=useState([
        {
            "position":1
        },
        {
            "position":2
        }
     ])

    const [sections, setSections]=useState(
        {
            "perfil":true,
            "info":false,
            "blend":false,
            "preparados":false

        }
    )

    useEffect(()=>{

        let collection=productsInfo.filter((p)=>{
            return p.collection.id==params.collection
        })
        

        let product=collection[0]?.collection.products.filter((pr)=>{
            return pr.id==params.product
        })

        setProduct(product[0])

        console.log(product[0])

    },[])

    const giveBackground=function(){

        if(sections.perfil){
            return "bg-[url(./assets/products/grain.jpeg)] bg-size-[200px]"
        }else if(sections.blend){
            return "bg-[url(./assets/products/waves.jpg)] bg-size-[350px]"
        }else if(sections.info){
            return "bg-[url(./assets/products/leaves.jpeg)] bg-size-[400px]"
        }else  if(sections.preparados){
            return "bg-[url(./assets/products/cream.avif)]"
        }

        
    }
    
    const handleSection=function(section){

        let newSections={}

        Object.keys(sections).forEach((k)=>{
            if(k==section){
                newSections={...newSections, [k]:true}
            }else{
                newSections={...newSections, [k]:false}
            }

        })
            

        setSections(newSections)

    }
    
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
              <Link to="/cart"><i className={`fa-solid fa-magnifying-glass flex-none basis-10 text-center text-2xl ${scrolled?"text-blue-900":"text-stone-50"} absolute right-40 lg:right-5  z-10`}></i></Link>
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
                <img className="w-full  m-auto h-4/5 object-contain" src={product?.imgUrl} alt="" />
            </div>
         

         <div className="hidden  lg:w-1/3 lg:z-10 lg:pr-3 lg:text-white lg:flex lg:flex-col lg:gap-5 lg:justify-start lg:items-start ">

            <div className="flex z-10 pr-10 flex-row w-full justify-between">
                <p className="text-stone-50 font-bold  text-xs opacity-80 tracking-wide">{product?.category}</p>
                <p className=" font-bold text-xs tracking-wide">Intensidad {product?.intensity}/10</p>
            </div>

            <p className="w-full text-4xl mb-3 font-bold">{product?.name}</p>
            <p className="w-full text-sm text-stone-100 font-semibold">{product?.perfilDescription}</p>
            <div className="w-full flex flex-row gap-10 flex-wrap">
            {product?.options.map((o)=>{
                    return <button className="w-1/4 min-w-22 p-1 rounded-xl bg-white text-blue-950 font-bold tracking-widest">
                       <i class="fa-solid fa-box"></i> {o}
                    </button>
            })}
            </div>

            <button className="w-full p-4 mt-10 text-md tracking-widest font-bold text-center rounded-3xl border-1 border-white">COMPRA ONLINE</button>
         
         </div>

         <div className="lg:hidden flex flex-col justify-center pb-10 items-center">
            <div className={`relative mt-20 overflow-hidden flex justify-center items-center w-full`}>
                <button onClick={()=>{
                    moveBlocks("toRight")
                }} className={`cursor-pointer ${positions[1].position>1?"hidden":""} rounded-full h-8 pb-1 pr-1 text-center border-1 border-white text-white font-bold text-xl w-8 `}>&lt;</button>
                <div className={` ${givePosition(positions[0].position)} p-10  flex items-center transition-transform h-100 max-w-[700px] duration-300 ease-in-out w-4/5  text-center`}>
                    <img src={product?.imgUrl} alt="" />
                </div>
                <div className={`${givePosition(positions[1].position)} p-10   flex items-center transition-all h-100 duration-300 ease-in-out  w-4/5 z-10  text-stone-50 font-semibold text-center`}>
                    <p>

                    {product?.perfilDescription}
                    </p>
                </div>
             <button onClick={()=>{
                    moveBlocks("toLeft")
                }} className={`cursor-pointer ${positions[0].position<1?"hidden":""} rounded-full h-8 pb-1 pl-1 text-center border-1 border-white text-white font-bold text-xl w-8 `}>&gt;</button>


            </div>

         <div className="w-full justify-between px-5 flex ">
                <p className="text-stone-50 font-bold  text-xs opacity-80 tracking-wide">{product?.category}</p>
                <p className=" font-bold text-xs tracking-wide">Intensidad {product?.intensity}/10</p>
         </div>

            <p className="w-full text-center text-4xl mb-3 mt-10 font-bold">{product?.name}</p>

                <span className="w-1/4 bg-white justify-center px-2 py-1 text-blue-950 text-md mt-5 rounded-md m-auto flex gap-1">
                <i class="fa-solid fa-box"></i>
                <select name="options" id="options">
                    {product?.options.map((o)=>{
                        return <option value={o}>{o}</option>
                    })}
                </select>
                </span>

            <button className="w-9/10 px-4 py-2 mt-10 m-auto text-md tracking-widest font-bold text-center rounded-4xl border-1 border-white">COMPRA ONLINE</button>
        </div>


         </div>

         <div className="w-full z-10  pb-30 lg:pb-40 relative rounded-b-[200px] bg-stone-500  h-auto lg:pt-20 pt-10 flex lg:flex-row flex-col justify-center items-center gap-10 lg:gap-1 ">
                    <div className="w-full lg:w-1/2 pr-15 flex justify-center ">
                    
                    <div className=" w-80 lg:w-100 rounded-full bg-stone-100 relative flex items-center h-80 lg:h-100" >
                        <div className={`w-5/7 outline-8 flex justify-center items-center outline-white shadow-stone-500 shadow-lg h-5/7 m-auto rounded-full ${giveBackground()}`}>

                        <img  className="w-24/5" src={coffeeProduct1} alt="" />

                                <div  onClick={()=>{
                                        handleSection("perfil")
                                    }} className={` ${sections.perfil?"bg-green-400":""} cursor-pointer absolute w-13 h-13 lg:w-15 lg:h-15 rounded-full flex justify-center items-center border-5 border-stone-300 top-0 right-12 lg:top-3 lg:right-12`}>
                                    <i class={`${sections.perfil?"text-white":""} fa-solid fa-box text-2xl top-0 right-12 lg:top-3 lg:right-12`}></i>
                                </div>
                                    <p className=" absolute w-1/10 text-xs top-0 right-[-10px] lg:top-6 lg:right-[-5px] ">PERFIL Y TUESTE</p>
                                <div  onClick={()=>{
                                        handleSection("blend")
                                    }} className={`absolute w-13 h-13 lg:w-15 lg:h-15 rounded-full cursor-pointer ${sections.blend?"bg-green-400":""} flex justify-center items-center border-5 border-stone-300 top-24 right-[-11px]`}>
                                    <i  class={`${sections.blend?"text-white":""} fa-solid fa-box text-2xl`}></i>
                                </div>
                                     <p className=" absolute w-1/10 text-xs top-28 right-[-58px] lg:top-30 lg:right-[-68px] ">BLEND</p>

                                <div  onClick={()=>{
                                        handleSection("info")
                                    }} className={`${sections.info?"bg-green-400":""} cursor-pointer absolute w-13 h-13 lg:w-15 lg:h-15 rounded-full flex justify-center items-center border-5 border-stone-300 top-48 right-[-11px] lg:top-60 lg:right-[-17px]`}>
                                    <i class={`${sections.info?"text-white":""} fa-solid fa-box text-2xl`}></i>
                                </div>
                                   <p className=" absolute w-1/10 text-xs top-48 right-[-58px] lg:top-62 lg:right-[-72px] ">INFORMACIÓN DEL PRODUCTO</p>
                              <div  onClick={()=>{
                                        handleSection("preparados")
                                    }} className={`${sections.preparados?"bg-green-400":""} cursor-pointer absolute w-13 h-13 lg:w-15 lg:h-15 rounded-full flex justify-center items-center border-5 border-stone-300 right-12 top-67 lg:top-83 lg:right-12`}>
                                    <i class={`${sections.preparados?"text-white":""} fa-solid fa-box text-2xl`}></i>
                                </div>
                                       <p className=" absolute w-1/10 text-xs top-70 right-[-10px] lg:top-87 lg:right-[-5px] ">PREPARADOS LAVAZZA</p>

                        </div>
                    </div>
                    
                    </div>

                    <div className={`lg:w-1/2 lg:pl-10 w-full ${sections.perfil?"":"hidden"}`}>
                            <div className="flex flex-col  justify-center pl-15  text-blue-950">
                                <p className="font-[Corinthia] text-blue-950  font-extrabold  text-3xl mb-3">Perfil y tueste</p>
                                <p className="font-extrabold tracking-wide text-2xl text-blue-950  mb-3">{product?.perfilTitle}</p>
                                <p className="font-semibold text-lg w-4/5 text-blue-950  mb-3">{product?.perfilDescription}</p>
                                <div className="flex flex-row gap-4">
                                    <div className="text-blue-950 flex flex-col justify-start gap-2">
                                        <p className="font-extrabold tracking-widest text-md ">Notas aromáticas</p>
                                        <p className="font-normal tracking-widest  text-md ">{product?.notes}</p>
                                    </div>
                                    <div className="text-blue-950 flex flex-col justify-start gap-2">
                                        <p className="font-extrabold tracking-widest text-md ">Tueste</p>
                                        <p className="font-normal tracking-widest  text-md ">{product?.tueste}</p>
                                    </div>
                                </div>
                                
                            </div>

                    </div>
                    <div className={`lg:w-1/2 lg:pl-10 w-full  ${sections.info?"":"hidden"}  `}>
                            <div className="flex flex-col  justify-center pl-15  text-blue-950">
                                <p className="font-[Corinthia] text-blue-950  font-extrabold  text-3xl mb-3">Información del producto</p>
                                <p className="font-extrabold tracking-wide text-lg text-blue-950  mb-2">Operador de alimentos</p>
                                <p className="font-semibold text-md w-4/5 text-blue-950  mb-3">Luigi Lavazza S.p.A. - Via Bologna 32 - 10152 Torino - Italy.</p>
                                
                                <p className="font-extrabold tracking-wide text-lg text-blue-950  mb-2">Descripción</p>
                                <p className="font-semibold text-md w-4/5 text-blue-950  mb-3">{product?.name}</p>
                                
                                <p className="font-extrabold tracking-wide text-lg text-blue-950  mb-2">Cantidad neta</p>
                                <p className="font-semibold text-md w-4/5 text-blue-950  mb-3">{product?.quantity}</p>
                                
                                
                            </div>

                    </div>
                    <div className={`lg:w-1/2 lg:pl-10 w-full ${sections.preparados?"":"hidden"}  `}>
                            <div className="flex flex-col justify-start items-start  lg:justify-center   text-blue-950">
                                <p className="font-[Corinthia] text-blue-950 pl-15  font-extrabold  text-2xl mb-3">Preparados Lavazza</p>
                                <p className="font-extrabold tracking-wide text-md pl-15 text-blue-950  mb-2">Ideal para espresso y cafetera italiana</p>
                                <div className=" hidden lg:flex flex-row justify-start gap-2 ">
                                    <div className="w-2/5 h-70 flex  items-start">
                                        <div className="w-full bg-no-repeat bg-center bg-stone-500 bg-blend-multiply bg-cover bg-[url(./assets/home_img/coffee-pot.png)] text-white flex flex-col p-5 h-4/5 justify-end  rounded-xl">
                                        <p className="font-[Corinthia] text-2xl mb-4 font-bold">Sugerencia de preparación</p>
                                        <p className="text-md font-extrabold mb-6">Espresso</p>
                                        <a className="self-end font-bold text-sm tracking-widest hover:underline underline-offset-4 " href="">REPRODUCIR VÍDEO &gt;</a>
                                        </div>
                                        </div>
                                    <div className="w-2/5 h-70 flex  items-start">
                                        <div className="w-full bg-no-repeat bg-center bg-stone-500 bg-blend-multiply bg-cover bg-[url(./assets/home_img/coffee-shop.jpg)] text-white flex flex-col p-5 h-4/5 justify-end  rounded-xl">
                                        <p className="font-[Corinthia] text-2xl mb-4 font-bold">Sugerencia de preparación</p>
                                        <p className="text-md font-extrabold mb-6">Cafetera italiana</p>
                                        <a className="self-end font-bold text-sm tracking-widest hover:underline underline-offset-4 " href="">REPRODUCIR VÍDEO &gt;</a>
                                        </div>
                                        </div>
                                </div>

                                <div className="lg:hidden w-full  m-auto  relative h-70 ">
                                    <Slider addClasses={{
                                        "widthLeft":"w-3/5 translate-x-[-25%]",
                                        "widthCenter":"w-3/5 translate-x-[-50%]"
                                    }} components={[
              {
                "boxUrl":"./assets/home_img/coffee-pot.png",
                "title":"Sugerencias de preparación",
                "subtitle":"Espresso"
              },
              {
                "boxUrl":"./assets/home_img/coffee-shop.jpg",
                "title":"Sugerencias de preparación",
                "subtitle":"Máquina de café italiana"
              }

          ]}>

                                    </Slider>
                                </div>
                                
                                
                            </div>

                    </div>

                    <div className={` w-3/4 lg:pl-10 lg:w-1/2 ${sections.blend?"":"hidden"} flex flex-col relative justify-center items-start text-blue-950`}>

                    <img className="absolute lg:top-[-100px] right-0 w-60 sm:w-90 lg:w-130 opacity-70" src={map} alt="" />

                    <p className="font-[Corinthia] text-3xl font-extrabold ">Blend</p>

                        <p className="font-extrabold tracking-wide text-lg text-blue-950  mb-2">Composición</p>
                    <p className="font-semibold text-md w-4/5 text-blue-950  mb-3">{product?.composicion}</p>
                        <p className="font-extrabold tracking-wide text-lg text-blue-950  mb-2">Origen</p>
                    <p className="font-semibold text-md w-4/5 text-blue-950  mb-3">{product?.origen}</p>
                    
                    </div> 
            <img className="m-auto lg:absolute lg:bottom-50  w-50 mt-20 mb-[-260px]" src={splash} alt="" />

         </div>
          <div className="w-full mt-[-200px] h-210 flex flex-col items-center justify-center bg-stone-500 bg-blend-multiply bg-[url('./assets/collections/woman-drinking.jpg')]  bg-cover bg-center relative z-0 md:bg-right">
        <p className="w-2/3 font-bold mb-5 text-white font-[Corinthia]  text-4xl md:text-5xl lg:text-7xl text-center">Hay que valorar el equilibrio de los contrastes, en la cocina y en la vida</p>
        <p className="text-white  text-xl font-normal ">David Sánchez</p>
        </div>

         <section className=" hidden mb-30 mt-[-50px] w-full pb-10 h-110 lg:flex justify-center relative z-10 gap-2 pl-2 pr-3">
        <div className="w-1/3 h-full  flex  items-start">
          <div className="w-full bg-no-repeat bg-cover bg-center bg-stone-500 bg-blend-multiply bg-[url(./assets/collections/licor.jpg)] text-white flex flex-col p-5 h-4/5  rounded-xl">
          <p className="font-[Corinthia] text-4xl font-bold">Licor café</p>
          <p className="text-xl font-extrabold mb-6">El sabor de la tradición</p>
          <a className="self-end font-bold tracking-widest hover:underline underline-offset-4 " href="">DESCUBRIR MÁS &gt;</a>
          </div>
        </div>
        <div className="w-1/3 h-full   flex  items-end">
          <div className="w-full  bg-center bg-no-repeat bg-cover bg-stone-500 bg-blend-multiply bg-[url(./assets/collections/tonic.jpg)] text-white flex flex-col p-5 h-4/5  rounded-xl">
          <p className="font-[Corinthia] text-4xl font-bold">Espresso tonic </p>
          <p className="text-xl font-extrabold mb-6">Para los paladares más curiosos</p>
          <a className="self-end font-bold tracking-widest hover:underline underline-offset-4 " href="">DESCUBRIR MÁS &gt;</a>
          </div>
        </div>
        <div className="w-1/3 h-full  flex  items-start">
          <div className="w-full bg-no-repeat bg-center bg-stone-500 bg-blend-multiply bg-cover bg-[url(./assets/collections/affogato.jpg)] text-white flex flex-col p-5 h-4/5  rounded-xl">
          <p className="font-[Corinthia] text-4xl font-bold">Affogato</p>
          <p className="text-xl font-extrabold mb-6">Un postre a la italiana</p>
          <a className="self-end font-bold tracking-widest hover:underline underline-offset-4 " href="">DESCUBRIR MÁS &gt;</a>
          </div>
        </div>
     </section>

  <aside className="  w-full mt-[-100px] mb-15  ">
     <section className="lg:hidden w-full flex justify-center h-auto">

      <article className="w-8/10  h-100 relative">

          <Slider components={[
              {
                "boxUrl":"./assets/collections/licor.jpg",
                "title":"Licor de café",
                "subtitle":"El sabor de la tradición"
              },
              {
                "boxUrl":'./assets/collections/tonic.jpg',
                "title":"Espresso tonic",
                "subtitle":"Para los paladares más curiosos"
              },
              {
                "boxUrl":'./assets/collections/affogato.jpg',
                "title":"Affogato",
                "subtitle":"Un postre a la italiana"
              }

          ]}/>

      </article>


     </section>
     </aside>

     <section className={`w-full mb-20 h-110 flex flex-row gap-5 bg-stone-500 bg-blend-multiply bg-size-[1600px] bg-center bg-no-repeat  bg-[url(./assets/backgrounds/grass.jpg)]`}>

        <div className="w-8/10 lg:w-1/2 pl-5  text-white flex flex-col lg:pt-0 pt-10 justify-start lg:justify-center items-start">
        <h1 className="font-extrabold text-2xl md:text-5xl mb-8 tracking-wide">Ciao!</h1>
        <p className="md:font-semibold text-lg lg:text-xl mb-4">Sostenible no es solo lo que somos, sino cómo vivimos.</p>
        <p className="md:font-semibold text-lg lg:text-xl mb-4">Gracias a quienes cooperan con nosotros, hemos podido crear un ciclo continuo en el que la innovación en productos y procesos, la excelencia cualitativa y la sostenibilidad se refuerzan mutuamente.</p>
        <p className="md:font-semibold text-lg lg:text-xl mb-4">Únete a nosotros y descubre la alegría de la sostenibilidad.</p>
        </div>

        <div className="hidden relative  w-1/5  lg:flex lg:flex-col">
        <div className="absolute -bottom-10">
        <div className={`w-full h-50 bg-size-[340px] rounded-t-4xl bg-center bg-no-repeat bg-[url(./assets/backgrounds/nature1.jpg)]`}></div>
        <div className="bg-white min-h-50 shadow-sm shadow-stone-900 pt-5 pl-3 pb-5 pr-2 flex flex-col justify-center rounded-b-4xl text-blue-950 w-full">
            <p className="font-[Corinthia] text-4xl mb-4 font-extrabold">Sostenibilidad</p>
            <p className="text-xl mb-5 font-extrabold">Descubrir la sostenibilidad</p>
            <p className="text-sm tracking-widest font-bold">MÁS INFORMACIÓN &gt;</p>
        </div>
        </div>
        </div>
        <div className="hidden w-1/5 relative lg:flex lg:flex-col">
                <div className="absolute -top-10">

        <div className="bg-white rounded-4xl shadow-sm shadow-stone-900 min-h-100 pt-5 pl-3 pb-5 pr-2 flex flex-col justify-center rounded-b-4xl text-blue-950 w-full">
            <p className="font-[Corinthia] text-4xl mb-4 font-extrabold">Productos</p>
            <p className="text-xl mb-5 font-extrabold">Nuestras certificaciones</p>
            <p className="text-sm  font-semibold">Toma una taza de café y disfruta de la Experiencia Lavazza. Tanto si prefieres las cápsulas A Modo Mio como los granos enteros o molidos Qualità Rossa, lo importante es vivir de manera sostenible, incluso mientras saboreas el primer café del día.</p>

        </div>
         </div>
        </div>

        <div className="lg:hidden flex z-30 relative h-150">
            <Slider2 blocks={
                {"content":[<div>
                                <div className={`w-full h-50 bg-size-[340px] rounded-t-4xl bg-center bg-no-repeat bg-[url(./assets/backgrounds/nature1.jpg)]`}></div>
                                <div className="bg-white min-h-50 shadow-sm shadow-stone-900 pt-5 pl-3 pb-5 pr-2 flex flex-col justify-center rounded-b-4xl text-blue-950 w-full">
                                    <p className="font-[Corinthia] text-4xl mb-4 font-extrabold">Sostenibilidad</p>
                                    <p className="text-xl mb-5 font-extrabold">Descubrir la sostenibilidad</p>
                                    <p className="text-sm tracking-widest font-bold">MÁS INFORMACIÓN &gt;</p>
                                </div>
                                </div>,
                                <div className="bg-white rounded-4xl shadow-sm shadow-stone-900 min-h-100 pt-5 pl-3 pb-5 pr-2 flex flex-col justify-center rounded-b-4xl text-blue-950 w-full">
            <p className="font-[Corinthia] text-4xl mb-4 font-extrabold">Productos</p>
            <p className="text-xl mb-5 font-extrabold">Nuestras certificaciones</p>
            <p className="text-sm  font-semibold">Toma una taza de café y disfruta de la Experiencia Lavazza. Tanto si prefieres las cápsulas A Modo Mio como los granos enteros o molidos Qualità Rossa, lo importante es vivir de manera sostenible, incluso mientras saboreas el primer café del día.</p>

        </div>
                                
                            ],
                "widthLeft":"w-100",
                "widthCenter":"w-120",
                "widthLRight":"w-100",
                "heightLeft":"h-50",
                "heightCenter":"h-70",
                "heightRight":"h-50",
                


                }
            }>

            </Slider2>
        </div>
     </section>

     <Footer/>

            
                {menuActive && <Menu handleMenuActive={handleMenuActive}/>}
        </>

}