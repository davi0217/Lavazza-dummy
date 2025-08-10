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
        <div className={`flex fixed ${scrolled?"bg-white text-blue-900":"text-white"} transition-colors ease-in flex-nowrap w-full items-center h-20 z-20 top-0`}>
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


     <section className={`bg-[url("./assets/home_img/background-coffee-1.jpg")] bg-size-[1500px] bg-no-repeat   absolute pt-15 w-full overflow-hidden h-240 top-560 sm:top-500 flex flex-col items-center`}>
      
      <div className="p-5 sm:w-auto  w-100 ml-[-10px]  flex justify-around gap-3     sm:flex sm:justify-center sm:gap-4">
          
          <div>
            <img className="w-20 border-1 p-1 rounded-full"src={block3} alt="" />
            <p className="w-20 text-center mt-2 text-xs font-bold text-white">Qualità Oro</p>
          </div>
          <div>
            <img className="w-20 border-1 p-1 rounded-full"src={block3} alt="" />
            <p className="w-20 text-center mt-2 text-xs font-bold text-white">Qualità Oro</p>
          </div>
          <div>
            <img className="w-20 border-1 p-1 rounded-full"src={block3} alt="" />
            <p className="w-20 text-center mt-2 text-xs font-bold text-white">Qualità Oro</p>
          </div>
          <div>
            <img className="w-20 border-1 p-1 rounded-full"src={block3} alt="" />
            <p className="w-20 text-center mt-2 text-xs font-bold text-white">Qualità Oro</p>
          </div>
          <div>
            <img className="w-20 border-1 p-1 rounded-full"src={block3} alt="" />
            <p className="w-20 text-center mt-2 text-xs font-bold text-white">Qualità Oro</p>
          </div>

      </div>

      <p className='font-[Corinthia] mt-5 text-4xl text-white w-1/3 text-center md:text-left  '>Collection</p>
      <h1 className="text-white mb-4 font-extrabold text-3xl">Qualità Oro</h1>
      <h2 className="text-white w-2/3 sm:w-1/3 text-center font-semibold ">Descubre cada mañana la excelencia del blend y saborea la sinfonía perfecta en una taza en casa.</h2>
        <img className="w-100 mt-15" src={coffeeProduct1} alt="" />
        <button className=" bg-white  text-blue-950  tracking-widest font-extrabold text-sm p-3 w-60 pt-5 pb-5 mt-10 rounded-4xl">DESCUBRIR MÁS</button>

     </section>

    <aside className="overflow-hidden w-full  h-auto md:h-auto absolute top-790 md:pt-20 md:pb-30  sm:top-720 z-10">
     <div className="w-full md:min-w-300  z-10 md:h-100 h-auto flex md:flex-row flex-col items-center md:justify-center md:gap-3 gap-0 ">

      <div className="w-90 min-w-90 h-130 rounded-md bg-stone-50 flex flex-col items-center p-5 ">
        <img className="w-50 mt-10"src={coffeeProduct1} alt="" />
        <p className="text-sm text-blue-950 tracking-widest mb-5">GRANOS DE CAFÉ</p>
        <p className="text-xl text-blue-950 font-extrabold mb-2">Qualitá Oro en Grano</p>
        <p className="text-xs text-blue-950 font-semibold">Intensidad 7/10</p>    
        <div className="w-19/20 bg-amber-100 rounded-xl mt-10 h-27 pt-8 pl-5">
            <div className="w-1/3 flex items-center gap-2 bg-white rounded-xl h-10 text-blue-950 font-bold text-left pl-2" >
            <i className="fa-solid fa-box text-blue-950"></i>
            <span className=" text-blue-950 " value=""> 500g</span>        
            </div>
        </div>
            <button className="w-19/20 bg-blue-950 hover:bg-blue-900 transition-colors ease-in text-white rounded-4xl mt-5 p-2 font-extrabold tracking-widest text-sm">COMPRA ONLINE </button>

      </div>
      <div className="w-90 min-w-90 h-130 rounded-md bg-stone-50 flex flex-col items-center p-5 ">
        <img className="w-50 mt-10"src={coffeeProduct1} alt="" />
        <p className="text-sm text-blue-950 tracking-widest mb-5">GRANOS DE CAFÉ</p>
        <p className="text-xl text-blue-950 font-extrabold mb-2">Qualitá Oro en Grano</p>
        <p className="text-xs text-blue-950 font-semibold">Intensidad 7/10</p>    
        <div className="w-19/20 bg-amber-100 rounded-xl mt-10 h-27 pt-8 pl-5">
            <div className="w-1/3 flex items-center gap-2 bg-white rounded-xl h-10 text-blue-950 font-bold text-left pl-2" >
            <i class="fa-solid fa-box text-blue-950"></i>
            <span className=" text-blue-950 " value=""> 500g</span>        
            </div>
        </div>
            <button className="w-19/20 bg-blue-950 hover:bg-blue-900 transition-colors ease-in text-white rounded-4xl mt-5 p-2 font-extrabold tracking-widest text-sm">COMPRA ONLINE </button>

      </div>
      <div className="w-90 min-w-90 h-130 rounded-md bg-stone-50 flex flex-col items-center p-5 ">
        <img className="w-50 mt-10"src={coffeeProduct1} alt="" />
        <p className="text-sm text-blue-950 tracking-widest mb-5">GRANOS DE CAFÉ</p>
        <p className="text-xl text-blue-950 font-extrabold mb-2">Qualitá Oro en Grano</p>
        <p className="text-xs text-blue-950 font-semibold">Intensidad 7/10</p>    
        <div className="w-19/20 bg-amber-100 rounded-xl mt-10 h-27 pt-8 pl-5">
            <div className="w-1/3 flex items-center gap-2 bg-white rounded-xl h-10 text-blue-950 font-bold text-left pl-2" >
            <i class="fa-solid fa-box text-blue-950"></i>
            <span className=" text-blue-950 " value=""> 500g</span>        
            </div>
        </div>
            <button className="w-19/20 bg-blue-950 hover:bg-blue-900 transition-colors ease-in text-white rounded-4xl mt-5 p-2 font-extrabold tracking-widest text-sm">COMPRA ONLINE </button>

      </div>

     </div>
     </aside>

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
         {/*  <div className=" w-8/10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20  bg-no-repeat bg-cover bg-center bg-stone-500 bg-blend-multiply bg-[url(./assets/home_img/coffee-pot.png)] text-white flex flex-col p-5 h-4/5  rounded-xl">
          <p className="font-[Corinthia] text-4xl font-bold">Blend for better</p>
          <p className="text-xl font-extrabold mb-6">Descubre nuestras iniciativas sociales y medioambientales</p>
          <a className="self-end font-bold tracking-widest hover:underline underline-offset-4 " href="">DESCUBRIR MÁS &gt;</a>
          </div>
          <div className=" z-10 w-6/10   absolute left-2/5 top-1/2 -translate-x-3/5 -translate-y-1/2  bg-no-repeat bg-cover bg-center bg-stone-500 bg-blend-multiply bg-[url(./assets/home_img/coffe-plant.jpg)] text-white flex flex-col p-5 h-8/12  rounded-xl">
          <p className="font-[Corinthia] text-4xl font-bold">Blend for better</p>
          <p className="text-xl font-extrabold mb-6">Descubre nuestras iniciativas sociales y medioambientales</p>
          <a className="self-end font-bold tracking-widest hover:underline underline-offset-4 " href="">DESCUBRIR MÁS &gt;</a>
          </div>
          <div className=" z-10 w-6/10  absolute left-4/5 top-1/2 -translate-x-12/16 -translate-y-1/2  bg-no-repeat bg-cover bg-center bg-stone-500 bg-blend-multiply bg-[url(./assets/home_img/coffee-shop.jpg)] text-white flex flex-col p-5 h-8/12  rounded-xl">
          <p className="font-[Corinthia] text-4xl font-bold">Blend for better</p>
          <p className="text-xl font-extrabold mb-6">Descubre nuestras iniciativas sociales y medioambientales</p>
          <a className="self-end font-bold tracking-widest hover:underline underline-offset-4 " href="">DESCUBRIR MÁS &gt;</a>
          </div>

          <div className="text-blue-500 flex gap-10 justify-center absolute bottom-0 w-full text-center">
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div> */}

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


  
  </>
  
}

function Slider({components}){

  const [boxes, setBoxes]=useState(components)
  const [positions, setPositions]=useState({

    "left":"z10 w-6/10 h-8/12 left-2/5 top-1/2 -translate-x-3/5 -translate-y-1/2",

    "center":"left-1/2 h-4/5  w-8/10 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20",

    "right":"z10 left-4/5 h-8/12 w-6/10 top-1/2 -translate-x-12/16 -translate-y-1/2"

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
          }    absolute  transition-all ease-in-out duration-500 bg-no-repeat bg-cover bg-center bg-stone-500 bg-blend-multiply bg-[url(${boxes[0].boxUrl})] text-white flex flex-col p-5  rounded-xl`}>
          <p className="font-[Corinthia] text-4xl font-bold">{boxes[0].title}</p>
          <p className="text-xl font-extrabold mb-6">{boxes[0].subtitle}</p>
          <a className="self-end font-bold tracking-widest hover:underline underline-offset-4 " href="">DESCUBRIR MÁS &gt;</a>
          </div>
  
         <div onClick={()=>{
            handleCurrent(1)
          }

          }  className={`${
          giveClass(1)
         }  absolute transition-transform ease-in-out duration-500  bg-no-repeat bg-cover bg-center bg-stone-500 bg-blend-multiply bg-[url(${boxes[1].boxUrl})] text-white flex flex-col p-5   rounded-xl`}>
          <p className="font-[Corinthia] text-4xl font-bold">{boxes[1].title}</p>
          <p className="text-xl font-extrabold mb-6">{boxes[1].subtitle}</p>
          <a className="self-end font-bold tracking-widest hover:underline underline-offset-4 " href="">DESCUBRIR MÁS &gt;</a>
          </div>
         
          
          <div onClick={()=>{
            handleCurrent(2)
          }

          }  className={` ${
            giveClass(2)
          } absolute  transition-transform ease-in-out duration-500  bg-no-repeat bg-cover bg-center bg-stone-500 bg-blend-multiply bg-[url(${boxes[2].boxUrl})] text-white flex flex-col p-5   rounded-xl`}>
          <p className="font-[Corinthia] text-4xl font-bold">{boxes[2].title}</p>
          <p className="text-xl font-extrabold mb-6">{boxes[2].subtitle}</p>
          <a className="self-end font-bold tracking-widest hover:underline underline-offset-4 " href="">DESCUBRIR MÁS &gt;</a>
          </div>

          <div className="text-blue-500 flex gap-10 justify-center absolute bottom-0 w-full text-center">
            <button onClick={()=>{
              handleCurrent(0)
            }}><i className={`fa-solid fa-circle ${current==0?"text-blue-900":"text-blue-500"}`}></i></button>
            <button onClick={()=>{
              handleCurrent(1)
            }}><i className={`fa-solid fa-circle ${current==1?"text-blue-900":"text-blue-500"}`}></i></button>
            <button onClick={()=>{
              handleCurrent(2)
            }}><i className={`fa-solid fa-circle ${current==2?"text-blue-900":"text-blue-500"}`}></i></button>
          </div>



</>


}