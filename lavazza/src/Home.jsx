import { useState, useEffect, useRef } from 'react'

import lavazza from './assets/home_img/lavazza-logo-white.png'
import lavazza2 from './assets/home_img/lavazza-2-logo.png'
import block1 from './assets/home_img/first-block-home.png'
import block1shaped from './assets/home_img/first-block-home-2.png'
import block2 from './assets/home_img/second-block-home.png'
import block2shaped from './assets/home_img/second-block-home-2.png'
import block3 from './assets/home_img/third-block.jpg'

import backgroundCoffee1 from './assets/home_img/background-coffee-1.jpg'
import backgroundCoffee2 from './assets/home_img/background-coffee-2.jpg'
import backgroundCoffee3 from './assets/home_img/background-coffee-3.jpg'
import coffeeProduct1 from './assets/home_img/coffee-product-1.png'
import backgroundInspiring from './assets/home_img/background-inspiring.png'

export  function Home() {

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


  return <>

      <div className=" absolute  bg-[url('./assets/home_img/home-background.avif')] text-center bg-no-repeat w-full bg-size-[auto_800px] bg-right lg:bg-size-[auto_800px] lg:bg-center h-200">
        <div className={`flex fixed ${scrolled?"bg-white text-blue-900":"text-white"} transition-colors ease-in flex-nowrap w-full items-center h-20 z-[30] top-0`}>
          {!scrolled && <div className={`  left-2 sm:left-4 absolute h-auto`}>

            <img className=" w-20  sm:min-w-35 sm:max-w-35  z-10  " src={lavazza} alt="" />
            <p className={`mt-1 text-[7px] font-bold sm:text-xs`}>VIGO. SPAGNA. 2001</p>

            </div>}

            {scrolled && <div className={` left-[-10px] sm:left-[-15px] bottom-[0px] sm:bottom-[-30px] absolute h-auto`}>
            <img className=" w-30  sm:min-w-50 sm:max-w-50  z-10  " src={lavazza2} alt="" />
            </div>
        }
          <nav className="hidden  text-sm font-bold  lg:flex gap-8 tracking-widest  md:flex-none absolute left-0 right-0 justify-center z-11">
            <a href="" className={` hover:underline underline-offset-8 ${ scrolled?"decoration-blue-900":"decoration-white"} z-20`}>PRODUCTOS</a>
            <a href=""className={` hover:underline underline-offset-8 ${ scrolled?"decoration-blue-900":"decoration-white"} z-20`}>LAVAZZA STORE</a>
            <a href=""className={` hover:underline underline-offset-8 ${ scrolled?"decoration-blue-900":"decoration-white"} z-20`}>SOSTENIBILIDAD</a>
            <a href=""className={` hover:underline underline-offset-8 ${ scrolled?"decoration-blue-900":"decoration-white"} z-20`}>CONTACTO</a>
          </nav>
          <i className={`fa-solid fa-magnifying-glass flex-none basis-10 text-center text-2xl ${scrolled?"text-blue-900":"text-stone-50"} absolute right-40 lg:right-5  z-10`}></i>
          <i className={`fa-solid fa-bars-staggered flex  ${scrolled?"text-blue-900":"text-stone-50"} absolute right-12 lg:!hidden`}></i>
        </div>

        <p className="text-white font-extrabold w-2xs text-4xl mt-40 mb-30 lg:text-7xl  text-center lg:w-3xl m-auto lg:mt-45">EL PLACER NOS HACE HUMANOS</p>
        <button className=" w-2xs font-semibold  lg:my-0 text-white tracking-widest border-1 p-3 rounded-4xl m-auto text-center">Descubre la campaña</button>
    </div>

    <section className={`flex flex-col w-full gap-15  pr-2 pl-2 pt-20 pb-15 h-auto absolute top-200`}>

     <article className="bg-blue-950 relative w-80 h-90 sm:w-full m-auto sm:h-auto flex flex-col text-center sm:flex-row sm:justify-between">
        <div className="text-white relative z-10  pt-5  sm:w-1/3  sm:pl-5 sm:pt-7 sm:pb-5   sm:h-70">

          <h1 className="text-2xl font-extrabold  sm:text-left m-0  mb-5 sm:mb-3 z-10">La Prima Volta Galicia</h1>
          <h3 className="text-sm sm:mb-10 pr-2 pl-2 sm:p-0 font-semibold mb-7 sm:text-left z-10">El compromiso sincero de Lavazza de empoderar a los jóvenes soñadores continúa con la segunda edición de “La Prima Volta”.</h3>
          <button className=" bg-white  sm:absolute sm:left-3 sm:bottom-5 text-blue-950  tracking-widest font-extrabold text-sm p-3 w-60 rounded-4xl">DESCUBRIR MÁS</button>

        </div>
        <img  className='absolute  h-2/5 object:cover w-full bottom-0 sm:w-125 sm:h-70 sm:object-cover sm:right-0 sm:flex hidden z-0 'src={block2} alt="" />
        <img  className='absolute  h-2/5 object:cover w-full bottom-0 sm:w-120 sm:h-70 sm:object-fill sm:right-0 sm:hidden 'src={block2shaped} alt="" />
     </article>

     <article className="bg-blue-950 relative w-80 h-90 sm:w-full m-auto sm:h-auto flex flex-col text-center sm:flex-row sm:justify-between">
        <div className="text-white relative z-10  pt-5  sm:w-1/3  sm:pl-5 sm:pt-7 sm:pb-5   sm:h-70">

          <h1 className="text-2xl font-extrabold  sm:text-left m-0  mb-5 sm:mb-3 z-10">Un mundo sin café</h1>
          <h3 className="text-sm sm:mb-10 pr-2 pl-2 sm:p-0 font-semibold mb-7 sm:text-left z-10">¿Te imaginas un mundo sin café? Todavía no ha desaparecido, pero es posible que en el futuro ya no sea así.</h3>
          <button className=" bg-white  sm:absolute sm:left-3 sm:bottom-5 text-blue-950  tracking-widest font-extrabold text-sm p-3 w-60 rounded-4xl">DESCUBRIR MÁS</button>

        </div>
        <img  className='absolute  h-2/5 object:cover w-full bottom-0 sm:w-150 sm:h-70 sm:object-cover sm:right-0 sm:flex hidden z-0 'src={block1} alt="" />
        <img  className='absolute  h-2/5 object:cover w-full bottom-0 sm:w-120 sm:h-70 sm:object-fill sm:right-0 sm:hidden 'src={block1shaped} alt="" />
     </article>

     <h1 className='w-full mb-[-30px] text-center font-extrabold text-2xl text-blue-950'>Explora el nuevo calendario Lavazza</h1>

     <article className="bg-stone-900 relative w-80 h-90 sm:w-full m-auto sm:h-auto flex flex-col text-center sm:flex-row sm:justify-between">
        <div className="text-white relative z-10  pt-5  sm:w-1/3  sm:pl-5 sm:pt-7 sm:pb-5   sm:h-70">

          <h1 className="text-2xl font-extrabold  sm:text-left m-0  mb-10 sm:mb-3 z-10">Calendario Lavazza 2025</h1>
          <h3 className="text-sm sm:mb-10 pr-2 pl-2 sm:p-0 font-semibold mb-15 sm:text-left z-10">El Calendario de 2025 es un proyecto colaborativo realizado por varios fotógrafos que transmiten los valores compartidos de Lavazza y la Fundación a través de sus imágenes.</h3>
          <button className=" bg-white  sm:absolute sm:left-3 sm:bottom-5 text-blue-950  tracking-widest font-extrabold text-sm p-3 w-60 rounded-4xl">DESCUBRIR MÁS</button>

        </div>
        <img  className='absolute  h-3/5 object-cover w-full bottom-0  mask-t-from-50% sm:mask-l-from-50% sm:mask-t-from-100% sm:w-150 sm:h-70 sm:object-cover sm:right-0 sm:flex  z-0 'src={block3} alt="" />
        
     </article>
    </section>

      <section className="absolute top-560 sm:top-500 w-full">

        <Collection/>


      </section>

     <section className='w-full h-130 bg-[url("./assets/home_img/background-inspiring.png")] bg-no-repeat bg-center bg-cover absolute top-1170 sm:top-1090 md:top-840 z-0 flex flex-col items-center justify-center'>

          <h1 className=' text-center text-white font-extrabold  text-xl mt-[-30px] sm:mt-0 sm:text-3xl md:w-3/5 w-2/3 font-[Meddon]'>Cada taza es una experiencia que hay que compartir. Deja que nuestras historias te inspiren.</h1>
           <button className=" bg-white   sm:left-3 sm:bottom-5 text-blue-950  tracking-widest font-extrabold text-sm p-3 w-60 rounded-4xl  mt-5 sm:mt-20">DESCUBRIR MÁS</button>

     </section>

     <section className=" hidden lg:absolute lg:top-940 w-full  h-75 lg:flex justify-center gap-2 pl-2 pr-3">
        <div className="w-1/3 h-full  flex  items-start">
          <div className="w-full bg-no-repeat bg-cover bg-center bg-stone-500 bg-blend-multiply bg-[url(./assets/home_img/coffee-pot.png)] text-white flex flex-col p-5 h-4/5  rounded-xl">
          <p className="font-[Corinthia] text-4xl font-bold">Blend for better</p>
          <p className="text-xl font-extrabold mb-6">Descubre nuestras iniciativas sociales y medioambientales</p>
          <a className="self-end font-bold tracking-widest hover:underline underline-offset-4 " href="">DESCUBRIR MÁS &gt;</a>
          </div>
        </div>
        <div className="w-1/3 h-full   flex  items-end">
          <div className="w-full  bg-center bg-no-repeat bg-cover bg-stone-500 bg-blend-multiply bg-[url(./assets/home_img/coffe-plant.jpg)] text-white flex flex-col p-5 h-4/5  rounded-xl">
          <p className="font-[Corinthia] text-4xl font-bold">Historias emblemáticas </p>
          <p className="text-xl font-extrabold mb-6">Participa en las mejores experiencias en nuestras flagship stores</p>
          <a className="self-end font-bold tracking-widest hover:underline underline-offset-4 " href="">DESCUBRIR MÁS &gt;</a>
          </div>
        </div>
        <div className="w-1/3 h-full  flex  items-start">
          <div className="w-full bg-no-repeat bg-center bg-stone-500 bg-blend-multiply bg-cover bg-[url(./assets/home_img/coffee-shop.jpg)] text-white flex flex-col p-5 h-4/5  rounded-xl">
          <p className="font-[Corinthia] text-4xl font-bold">Coffee Hacks </p>
          <p className="text-xl font-extrabold mb-6">Descubre un mundo de orígenes, sabores y preparaciones</p>
          <a className="self-end font-bold tracking-widest hover:underline underline-offset-4 " href="">DESCUBRIR MÁS &gt;</a>
          </div>
        </div>
     </section>

  <aside className=" absolute  w-full top-1270 sm:top-1200 md:top-940 ">
     <section className="lg:hidden w-full flex justify-center h-auto">

      <article className="w-8/10  h-100 relative">

          <Slider components={[
              {
                "boxUrl":"./assets/home_img/coffee-pot.png",
                "title":"Blend for better",
                "subtitle":"Descubre nuestras iniciativas sociales y medioambientales"
              },
              {
                "boxUrl":"./assets/home_img/coffe-plant.jpg",
                "title":"Historias emblemáticas",
                "subtitle":"Participa en las mejores experiencias en nuestras flagship stores"
              },
              {
                "boxUrl":"./assets/home_img/coffee-shop.jpg",
                "title":"Coffee hacks",
                "subtitle":"Descubre un mundo de orígenes, sabores y preparaciones"
              }

          ]}/>

      </article>


     </section>
     </aside>

          <aside className="absolute w-full p-5 top-1370 sm:top-1310 md:top-1050 h-auto ">

            <h1 className=" md:text-4xl text-2xl font-extrabold m-auto md:text-blue-950 w-2/3 mb-10 text-center  ">Explora la experiencia Lavazza</h1>

            <article className=" hidden  lg:grid  lg:grid-cols-3 lg:grid-rows-2 lg:gap-4 lg:w-8/10 lg:h-130 lg:m-auto">
                        <div className="col-span-2 row-span-2  rounded-3xl bg-no-repeat text-white flex flex-col justify-end pb-5 pr-3 pl-5 bg-stone-500 bg-blend-multiply bg-size-[1500px] bg-right bg-[url(./assets/home_img/home-background.avif)]">
                        <p className="text-4xl font-extrabold mb-6">El placer nos hace humanos</p>
                  <a className="self-end text-right  font-bold tracking-widest hover:underline underline-offset-4 " href="">VER EL VÍDEO &gt;</a>
                        </div>
                        <div className="col-span-1 row-span-1 rounded-3xl flex flex-col pt-10 pl-2 text-white content-center pr-2  bg-stone-500 bg-blend-multiply bg-[url(./assets/home_img/third-block.jpg)]  bg-size-[400px] bg-no-repeat bg-center ">
                            <p className="font-[Corinthia] text-3xl font-bold">Calendario 2023</p>
                  <p className="text-md font-extrabold mb-6">Descubre el calendario de 2023 de Alex Prager</p>
                  <a className="self-end text-right  font-bold tracking-widest hover:underline underline-offset-4 " href="">VER EL VÍDEO &gt;</a>
                        </div>
                        <div className="col-span-1 row-span-1 rounded-3xl flex flex-col pr-2 pl-2 text-white justify-center bg-stone-500 bg-blend-multiply bg-[url(./assets/home_img/second-block.png)]  bg-size-[700px] bg-no-repeat bg-center">
                              <p className="font-[Corinthia] text-3xl font-bold">Ayuda</p>
                  <p className="text-md font-extrabold mb-6">Siempre a tu servicio</p>
                  <a className="self-end text-right  font-bold tracking-widest hover:underline underline-offset-4 " href="">VER EL VÍDEO &gt;</a>
                        
                        </div>

            </article>
            
            <article className="lg:hidden relative w-full h-130  m-auto">
            <Slider components={[
              {
                "title":" ",
                "subtitle":"El placer nos hace humanos",
                "boxUrl":"./assets/home_img/home-background.avif"
              },
              {
                "title":"Calendario 2023",
                "subtitle":"Descubre el calendario de 2023 de Alex Prager",
                "boxUrl":"./assets/home_img/third-block.jpg"
              },
              {
                "title":"Ayuda",
                "subtitle":"Siempre a tu servicio",
                "boxUrl":"./assets/home_img/second-block.png"
              },
            ]} addClasses={
              {"widthLeft":"w-3/10 -translate-x-3/5",
              "widthCenter":"w-5/10 -translate-x-1/2",
              "widthRight":"w-3/10 -translate-x-52",
              "bgSize":"bg-size-[1000px]",
              "bgPosition":"bg-right",
              "textPosition":"justify-end"
              }
            }   />

            </article>

          </aside>

        <section className=" absolute text-white flex flex-col justify-center items-center w-full p-5 top-1540 sm:top-1480 md:top-1220 h-150 bg-stone-500 bg-blend-multiply bg-size-[1800px] bg-center bg-[url(./assets/home_img/background-nature.jpg)]">
        
          <p className="font-[Corinthia] text-5xl md:text-6xl">Un viaje lleno de sabor</p>
          <p className="font-extrabold text-center text-3xl mt-10 w-1/3 md:w-2/3 ">Amazonia: la última temporada</p>
          <p className=" font-semibold text-xl text-center w-1/3 md:w-2/3 mt-10 ">Una declaración de amor del agua a la selva amazónica y un llamamiento a su protección.</p>
          <button className=" mt-15 rounded-3xl border-1 p-3 w-50 ">Reproducir vídeo</button>
        </section>

        <section className="absolute overflow-hidden w-full sm:p-5 top-1700 sm:top-1640 md:top-1380 h-auto pt-2">

          <p className="text-blue-950 font-light text-sm mb-3 ">*Lavazza compensa las emisiones provocadas por estos productos para lograr un impacto cero en emisiones de CO₂. </p>
          <article className="bg-stone-200  w-auto sm:gap-5 gap-5  divide-stone-50  divide-x-2 pt-10 pb-10 flex flex-row justify-center items-center">

            <div className="flex flex-col h-65 sm:h-43  gap-2 min-w-20  w-1/5 ">
              <div className=" w-full min-h-22 sm:flex sm:gap-3 sm:min-h-15 sm:items-start  sm:w-8/9">
                <i className="fa-solid fa-headphones text-xl text-blue-950"></i>
              <p className="text-sm font-extrabold text-blue-950 tracking-wide">SERVICIO AL CLIENTE</p>
              </div>
              <p className="text-xs w-7/8 text-blue-950">¿Necesitas ayuda? Consulta nuestras preguntas frecuentes o ponte en contacto con nosotros.</p>


            </div>
            <div className="flex flex-col h-65 sm:h-43 gap-2 min-w-20  w-1/5">
              <div className="  w-full min-h-22 sm:flex sm:gap-3 sm:items-start sm:min-h-15  sm:w-8/9">
                            <i class="fa-solid fa-location-dot text-xl text-blue-950"></i>              
                            <p className="text-sm font-extrabold text-blue-950 tracking-wide">FLAGSHIP STORE</p>
              </div>
              <p className="text-xs w-7/8 text-blue-950">Disfruta de la experiencia Lavazza auténtica en nuestras tiendas.</p>


            </div>


          </article>
        
        
        </section>


            <footer className="absolute top-1800 sm:top-1720 md:top-1450 w-full   ">

                <Footer/>

            </footer>
  
  </>
  
}


function Collection(){

  const [collections, setCollections]=useState([
    {"collection":{
      "active":true,
      "name":"Qualità Oro",
      "description":"Descubre cada mañana la excelencia del blend y saborea la sinfonía perfecta en una taza en casa.",
      "imageUrl":"./assets/home_img/background-coffee-2.jpg",
      "backgroundSettings":"bg-[url(./assets/home_img/background-coffee-1.jpg)]  bg-size-[1500px] bg-no-repeat",
      "products":[
        {
          "imgUrl":"./assets/home_img/coffee-product-1.png",
          "category":"GRANOS DE CAFÉ",
          "name":"Qualità Oro en grano",
          "intensity":"5",
          "format":"pack",
          "quantity":"500g",
        },
        {
          "imgUrl":"./assets/home_img/coffee-product-1.png",
          "category":"CAPSULAS COMPATIBLES",
          "name":"Qualità Oro",
          "intensity":"8",
          "format":"capsule",
          "quantity":"10",
        },
        {
          "imgUrl":"./assets/home_img/coffee-product-1.png",
          "category":"GRANOS DE CAFÉ",
          "name":"Qualità Oro en grano",
          "intensity":"5",
          "format":"pack",
          "quantity":"1kg",
        }
      ]
    }},
    {"collection":{
      "active":true,
      "name":"Espresso",
      "description":"El espresso más auténtico. ¡Descubre el ADN auténticamente italiano con Lavazza!",
      "imageUrl":"./assets/home_img/background-coffee-1.jpg",
       "backgroundSettings":"bg-[url(./assets/home_img/background-coffee-2.jpg)]  bg-size-[1800px] bg-no-repeat",
      "products":[
        {
          "imgUrl":"./assets/home_img/coffee-product-1.png",
          "category":"CAFÉ MOLIDO",
          "name":"Espresso Italiano Classico molido",
          "intensity":"5",
          "format":"pack",
          "quantity":"1kg",
        },
        {
          "imgUrl":"./assets/home_img/coffee-product-1.png",
          "category":"GRANOS DE CAFÉ",
          "name":"Espresso Italiano Classico en grano",
          "intensity":"5",
          "format":"pack",
          "quantity":"1kg",
        }
      ]
    }},
    {"collection":{
      "active":true,
      "name":"Tierra",
      "description":"Disfruta del sabor de cuidar de la naturaleza y de las personas: descubre nuestros blends orgánicos ¡Tierra!",
      "imageUrl":"./assets/home_img/background-coffee-3.jpg",
      "backgroundSettings":"bg-[url(./assets/home_img/background-coffee-3.jpg)]  bg-size-[1500px] bg-no-repeat",

      "products":[
        {
          "imgUrl":"./assets/home_img/coffee-product-1.png",
          "category":"GAPSULAS COMPATIBLES",
          "name":"¡Tierra! For Planet",
          "intensity":"7",
          "format":"capsule",
          "quantity":"10",
        },
        {
          "imgUrl":"./assets/home_img/coffee-product-1.png",
          "category":"GRANOS DE CAFÉ",
          "name":"¡Tierra! Bio-Organic for Planet Café en grano ",
          "intensity":"8",
          "format":"pack",
          "quantity":"1kg",
        }
      ]
    }}

  ])

  const [current, setCurrent]=useState(0)
  
  let blockCurrent=useRef(false)

 useEffect(()=>{
  
   
   
   setTimeout(()=>{
      let newCurrent=current<(collections.length-1)?current+1:0
        if(!blockCurrent.current){
      setCurrent(newCurrent)}
    }, 4000)
  

  },[current]) 

  const handleStopCurrent = function(num){
    setCurrent(num)

   blockCurrent.current=true
  }



  return <div className="relative">

  <section className={`${collections[current].collection.backgroundSettings} pt-15 w-full overflow-hidden h-240  flex flex-col items-center`}>
      
      <div className="p-5 sm:w-auto  w-100 ml-[-10px]  flex justify-around gap-3     sm:flex sm:justify-center sm:gap-4">
          
          <div>
            <img onClick={()=>{
              handleStopCurrent(0)
            }} className={`w-20 cursor-pointer  ${current==0?"border-white border-2":""}  p-1 rounded-full`}src={block3} alt="" />
            <p className="w-20 text-center mt-2 text-xs font-bold text-white">{`${collections[0].collection.name}`}</p>
          </div>
          <div>
            <img onClick={()=>{
              handleStopCurrent(1)
            }} className={`w-20 cursor-pointer  ${current==1?"border-white border-2":""} p-1 rounded-full`}src={block3} alt="" />
            <p className="w-20 text-center mt-2 text-xs font-bold text-white">{`${collections[1].collection.name}`}</p>
          </div>
          <div>
            <img onClick={()=>{
              handleStopCurrent(2)
            }} className={`w-20 cursor-pointer ${current==2?"border-white border-2":""} p-1 rounded-full`} src={block3} alt="" />
            <p className="w-20 text-center mt-2 text-xs font-bold text-white">{`${collections[2].collection.name}`}</p>
          </div>
          

      </div>

      <p className='font-[Corinthia] mt-5 text-4xl text-white w-1/3 text-center md:text-left  '>Collection</p>
      <h1 className="text-white mb-4 font-extrabold text-3xl">{`${collections[current].collection.name}`}</h1>
      <h2 className="text-white w-2/3 sm:w-1/3 text-center font-semibold ">{`${collections[current].collection.description}`}</h2>
        <img className="w-100 mt-15" src={coffeeProduct1} alt="" />
        <button className=" bg-white  text-blue-950  tracking-widest font-extrabold text-sm p-3 w-60 pt-5 pb-5 mt-10 rounded-4xl">DESCUBRIR MÁS</button>

     </section>

    <aside className="overflow-hidden w-full  absolute h-auto md:h-auto  top-230 md:pt-20 md:pb-30  sm:top-220 z-10">
     <div className="w-full z-10 md:h-100 h-auto flex md:flex-row flex-col items-center md:justify-center md:gap-3 gap-0 ">

        {collections[current] && collections[current].collection.products.map((col)=>{

          return <div className="w-90 min-w-90 h-130 rounded-md bg-stone-50 flex flex-col items-center p-5 ">
        <img className="w-50 mt-10"src={coffeeProduct1} alt="" />
        <p className="text-sm text-blue-950 tracking-widest mb-5">{col.category}</p>
        <p className="text-xl text-blue-950 font-extrabold mb-2">{col.name}</p>
        <p className="text-xs text-blue-950 font-semibold">Intensidad {col.intensity}/10</p>    
        <div className="w-19/20 bg-amber-100 rounded-xl mt-10 h-27 pt-8 pl-5">
            <div className="w-1/3 flex items-center gap-2 bg-white rounded-xl h-10 text-blue-950 font-bold text-left pl-2" >
            <i className="fa-solid fa-box text-blue-950"></i>
            <span className=" text-blue-950 " value=""> {col.quantity}</span>        
            </div>
        </div>
            <button className="w-19/20 bg-blue-950 hover:bg-blue-900 transition-colors ease-in text-white rounded-4xl mt-5 p-2 font-extrabold tracking-widest text-sm">COMPRA ONLINE </button>

      </div>
        })}

     </div>
     </aside>
  
  
  </div>
}

function Footer(){

  const [visible, setVisible]=useState({
    "productos":false,
    "ayuda":false,
    "notasLegales":false
  })

  const handleVisible=function(n){

    let newVisibles=visible

    for(let v in newVisibles){
      console.log(v)
      console.log(newVisibles[v])
      v==n && !newVisibles[v]?newVisibles[v]=true:newVisibles[v]=false
    }

    //Hacemos este paso porque al quedar registrado newVisibles en la memoria, no vuelve a hacer el cambio de estado más de una vez. 
    //Con el spread operator salvamos este paso

    newVisibles={...newVisibles} 

    setVisible(newVisibles)
  }


  return <>

     <section className="hidden md:inline-block md:w-full md:pb-6 md:bg-blue-950 md:h-auto">

      <div className="h-20 w-full flex items-start text-left pt-3 pl-10">
        <div className="flex flex-col items-center gap-2">
        <img className="w-40" src={lavazza} alt="" />
        <p className="text-xs text-white tracking-widest font-bold">VIGO,SPAGNA,2025</p>
        </div>
      </div>
      <div className="w-full text-white grid grid-cols-5 p-10">

        <div className="col-span-1 pr-8">
<h1 className=" tracking-widest font-extrabold mb-4 text-sm">PRODUCTOS</h1>
<p className="font-bold text-[14px] mb-3">Café</p>
<p className="font-normal text-[12px] mb-2">Granos de café</p>
<p className="font-normal text-[12px] mb-2">Café molido</p>
<p className="font-normal text-[12px] mb-2">Cápsulas A Modo Mio</p>
<p className="font-normal text-[12px] mb-2">Cápsulas Lavazza compatibles con las máquinas Nespresso*</p>
<p className="font-normal text-[12px] mb-2">Original</p>
<p className="font-normal text-[12px] mb-3">Nescafè® Dolce Gusto®</p>
<p className="font-bold text-[14px] mb-3">Máquinas de café</p>

        </div>
        <div className="col-span-1 ">
<h1 className=" tracking-widest font-extrabold mb-4  text-sm">LAVAZZA STORIES</h1>
<h1 className=" tracking-widest font-extrabold mb-4 text-sm">SOSTENIBILIDAD</h1>
<h1 className=" tracking-widest font-extrabold text-sm">LAVAZZA WORLD</h1>

        </div>
        <div className="col-span-1 pr-8">
<h1 className=" tracking-widest font-extrabold mb-4 text-sm">AYUDA</h1>
<h1 className=" tracking-widest font-extrabold mb-4 text-[12px]">PREGUNTAS FRECUENTES</h1>
<h1 className=" tracking-widest font-extrabold text-[12px]">Contacto</h1>

        </div>
        <div className="col-span-1 pr-8">
<h1 className=" tracking-widest font-extrabold mb-4 text-sm">NOTAS LEGALES</h1>
<h1 className=" tracking-widest font-extrabold mb-4 text-[12px]">Condiciones legales</h1>
<h1 className=" tracking-widest font-extrabold text-[12px]">Bases legales y política privacidad sorteo entradas MMO</h1>

        </div>
        <div>
        <div className="col-span-1 mb-4 flex justify-left gap-3 pr-8"> 
          

          <i class="fa-brands fa-facebook-f text-blue-950 bg-stone-200 rounded-full pt-2 h-9 pr-3 pl-3 text-center items-center "></i>
          <i class="fa-brands fa-youtube text-blue-950  bg-stone-200 rounded-full pt-2 h-9 pr-2 pl-2 text-center items-center"></i>
          <i class="fa-brands fa-instagram text-blue-950 bg-stone-200 rounded-full pt-2 h-9 pr-3 pl-3 text-center items-center"></i>
        </div>

        <div>

          <p className=" text-sm mb-3">ELIJA SU PAÍS</p>
          <select className="p-0 text-sm font-bold tracking-widest"  name="country" id="country">
            <option className="text-blue-950" value="España">ESPAÑA</option>
            <option className="text-blue-950" value="Otros países">OTROS PAÍSES</option>
          </select>
        </div>

        </div>


      </div>

      <div className="mt-5 mb-5 w-full text-white flex justify-center divide-white divide-x-1 h-auto">

        <p className="text-[12px] pr-2 pl-2 font-light">Política de privacidad</p>
        <p className="text-[12px] pr-2 pl-2 font-light">Política de cookies</p>
        <p className="text-[12px] pr-2 pl-2 font-light">Configuración de cookies</p>
        <p className="text-[12px] pr-2 pl-2 font-light">Accessibility Statement</p>


      </div>
      <div className="mt-5 mb-5 w-full text-white flex justify-center h-auto">

        <p className="text-[10px] pr-2 pl-2 font-light">©2022 Luigi Lavazza SPA. Todos los derechos reservados. IVA n.º 00470550013 - Registro Mercantil n.º 257143 - capital social 25 090 000 EUR íntegramente desembolsado</p>


      </div>



     </section>

     <section className="md:hidden pb-8 w-full bg-blue-950 h-auto">

            <div className="h-20 w-full flex items-start text-left pt-3 pl-5">
        <div className="flex flex-col items-center gap-2">
        <img className="w-30" src={lavazza} alt="" />
        
        </div>
      </div>

      <div className="pl-3 pr-3 flex flex-col divide-y-1 divide-white w-full ">
       <div className="flex flex-col h-auto w-full">
          <div className="w-full flex justify-between h-12 items-center ">
       
        <h1 className='text-white text-sm  tracking-widest font-bold'>PRODUCTOS</h1>
        <i className="fa-solid fa-caret-down text-white cursor-pointer " onClick={()=>{

          handleVisible("productos")
        }}></i>
        </div>

        <div className={` ${visible.productos?" ":"hidden"} cursor-pointer transition-all ease-in text-white text-[12px] font-normal`}>

          <p className="mb-2 font-bold">Café</p>
          <p className="mb-3">Granos de café</p>
          <p className="mb-3">Café molido</p>
          <p className="mb-3">Cápsulas A Modo Mio</p>
          <p className="mb-3">Cápsulas Lavazza compatibles con las máquinas Nespresso* Original</p>
          <p className="mb-3">Nescafè® Dolce Gusto® cápsulas compatibles**</p>
          <p className="font-bold mb-3">Máquinas de Café</p>


        </div>
          </div>  


          <div className="w-full flex justify-between h-12 items-center ">
        <h1 className='text-white text-sm  tracking-widest font-bold'>LAVAZZA STORIES</h1>
          </div>  
          <div className="w-full flex justify-between h-12 items-center ">
        <h1 className='text-white text-sm  tracking-widest font-bold'>SOSTENIBILIDAD</h1>
          </div>  
          <div className="w-full flex justify-between h-12 items-center ">
        <h1 className='text-white text-sm  tracking-widest font-bold'>LAVAZZA WORLD</h1>

          </div>  
       <div className="text-white">
          <div className="w-full flex justify-between h-12 items-center ">
        <h1 className='text-white w-full text-sm  tracking-widest font-bold'>AYUDA</h1>
        <i className="fa-solid fa-caret-down text-white cursor-pointer" onClick={()=>{

          handleVisible("ayuda")
        }}></i>
         </div>
         <div className={` ${visible.ayuda?"":"hidden"} transition-all duration-75 ease-in-out`}>
          <p className="w-full text-xs font-bold mb-3">PREGUNTAS FRECUENTES</p>
          <p className=" text-[11px] mb-3">Contacto</p>
         </div>
          </div>  
       <div className="text-white">
          <div className="w-full flex justify-between h-12 items-center ">
        <h1 className='text-white w-full text-sm  tracking-widest font-bold'>NOTAS LEGALES</h1>
        <i className="fa-solid fa-caret-down text-white cursor-pointer" onClick={()=>{

          handleVisible("notasLegales")
        }}></i>
         </div>
         <div className={` ${visible.notasLegales?"":"hidden"} transition-all duration-75 ease-in-out`}>
          <p className="w-full text-xs font-bold mb-3">Condiciones de uso</p>
          <p className=" text-[11px] font-bold mb-3">Bases Legales y Política Privacidad Sorteo Entradas MMO</p>
         </div>
          </div>   
      </div>

       <div className="w-1/2 mb-4 flex mt-5 justify-left gap-3  pl-3 pr-8"> 
          

          <i class="fa-brands fa-facebook-f text-blue-950 bg-stone-200 rounded-full pt-2 h-9 pr-3 pl-3 text-center items-center "></i>
          <i class="fa-brands fa-youtube text-blue-950  bg-stone-200 rounded-full pt-2 h-9 pr-2 pl-2 text-center items-center"></i>
          <i class="fa-brands fa-instagram text-blue-950 bg-stone-200 rounded-full pt-2 h-9 pr-3 pl-3 text-center items-center"></i>
        </div>

        <div>

          <p className=" text-white pl-3 text-sm mb-3">ELIJA SU PAÍS</p>
          <select className="p-0 pl-3 mb-5 text-white text-sm font-bold tracking-widest"  name="country" id="country">
            <option className="text-blue-950" value="España">ESPAÑA</option>
            <option className="text-blue-950" value="Otros países">OTROS PAÍSES</option>
          </select>
        </div>

        <div className="mt-5 mb-5 w-full text-white flex justify-start divide-white divide-x-1 h-auto">

        <p className="text-[12px] pr-2 pl-2 font-light">Política de privacidad</p>
        <p className="text-[12px] pr-2 pl-2 font-light">Política de cookies</p>
        <p className="text-[12px] pr-2 pl-2 font-light">Configuración de cookies</p>
        <p className="text-[12px] pr-2 pl-2 font-light">Accessibility Statement</p>


      </div>
      <div className="mt-5 mb-5 w-full text-white flex justify-start h-auto">

        <p className="text-[10px] pr-2 pl-2 font-light">©2022 Luigi Lavazza SPA. Todos los derechos reservados. IVA n.º 00470550013 - Registro Mercantil n.º 257143 - capital social 25 090 000 EUR íntegramente desembolsado</p>


      </div>


     </section>
  
  
  </>
}




//al slider hay que pasarle el width y el translate-x, translate-y y height se quedan igual
//hay que pasarle el posicionamiento del texto (justify) y el bg-size y bg-position
//el height se regula en el elemento padre, al que hay que poner como relative

function Slider({components, addClasses={}}){

  const [boxes, setBoxes]=useState(components)
  const [positions, setPositions]=useState({

    "left":` ${addClasses.widthLeft?addClasses.widthLeft:"w-6/10 -translate-x-3/5 "}   z10  h-8/12 left-2/5 top-1/2  -translate-y-1/2`,

    "center":` ${addClasses.widthCenter?addClasses.widthCenter:"w-8/10 -translate-x-1/2"}  left-1/2 h-4/5   top-1/2  -translate-y-1/2 z-20`,

    "right":`${addClasses.widthRight?addClasses.widthRight:"w-6/10 -translate-x-12/16"}  z10 left-4/5 h-8/12  top-1/2  -translate-y-1/2`

  })

  const [current,setCurrent]=useState(1)

  const giveClass=function(number){

    if(number==current){
            return positions.center
    }else if(number==current-1){
      return positions.left
    }else if(number==current+1){
      return positions.right
    }else{
      return "hidden"
    }
  }

  const handleCurrent=function(num){

    setCurrent(num)
  }

  return <>

          <div onClick={()=>{
            handleCurrent(0)
          }

          } className={` ${
            giveClass(0)
          }    absolute  transition-all ease-in-out duration-500 bg-no-repeat ${addClasses.bgSize?addClasses.bgSize:"bg-cover"} ${addClasses.bgPosition?addClasses.bgPosition:"bg-center"} bg-stone-500 bg-blend-multiply bg-[url(${boxes[0].boxUrl})] text-white flex flex-col p-5 ${addClasses.textPosition?addClasses.textPosition:" "} rounded-xl`}>
          <p className="font-[Corinthia] text-4xl font-bold">{boxes[0].title}</p>
          <p className="text-2xl font-extrabold mb-6">{boxes[0].subtitle}</p>
          <a className="self-end font-bold tracking-widest hover:underline underline-offset-4 " href="">DESCUBRIR MÁS &gt;</a>
          </div>
  
         <div onClick={()=>{
            handleCurrent(1)
          }

          }  className={`${
          giveClass(1)
         }  absolute transition-all ease-in-out duration-500  bg-no-repeat bg-cover bg-center bg-stone-500 bg-blend-multiply bg-[url(${boxes[1].boxUrl})] text-white flex flex-col ${addClasses.textPosition?addClasses.textPosition:" "} p-5   rounded-xl`}>
          <p className="font-[Corinthia] text-4xl font-bold">{boxes[1].title}</p>
          <p className="text-2xl font-extrabold mb-6">{boxes[1].subtitle}</p>
          <a className="self-end font-bold tracking-widest hover:underline underline-offset-4 " href="">DESCUBRIR MÁS &gt;</a>
          </div>
         
          
          <div onClick={()=>{
            handleCurrent(2)
          }

          }  className={` ${
            giveClass(2)
          } absolute  transition-all ease-in-out duration-500  bg-no-repeat bg-cover bg-center bg-stone-500 bg-blend-multiply bg-[url(${boxes[2].boxUrl})] text-white flex flex-col p-5  ${addClasses.textPosition?addClasses.textPosition:" "} rounded-xl`}>
          <p className="font-[Corinthia] text-4xl font-bold">{boxes[2].title}</p>
          <p className="text-2xl font-extrabold mb-6">{boxes[2].subtitle}</p>
          <a className="self-end font-bold tracking-widest hover:underline underline-offset-4 " href="">DESCUBRIR MÁS &gt;</a>
          </div>

          <div className="flex gap-10 justify-center absolute bottom-0 w-full text-center">
            <button onClick={()=>{
              handleCurrent(0)
            }}><i className={`fa-solid fa-circle text-xs ${current==0?"text-blue-900":"text-blue-500"} cursor-pointer`}></i></button>
            <button onClick={()=>{
              handleCurrent(1)
            }}><i className={`fa-solid fa-circle text-xs cursor-pointer ${current==1?"text-blue-900":"text-blue-500"}`}></i></button>
            <button onClick={()=>{
              handleCurrent(2)
            }}><i className={`fa-solid fa-circle text-xs cursor-pointer ${current==2?"text-blue-900":"text-blue-500"}`}></i></button>
          </div>



</>
}
