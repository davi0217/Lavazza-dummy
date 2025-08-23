import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { useNavigator } from './useNavigator.js'

import terranaWhite from './assets/home_img/terrana-white.png'
import terranaBlue from './assets/home_img/terrana-blue.png'
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
import woman from './assets/collections/woman-drinking.jpg'
import licor from './assets/collections/licor.jpg'
import tonic from './assets/collections/tonic.jpg'
import affogato from './assets/collections/affogato.jpg'


import {Menu} from './Products.jsx'
import {Navigator} from './Collections.jsx'
import { productsInfo } from './products-info.js'

export  function Home() {

   const {scrolled, menuActive, handleMenuActive } = useNavigator()

  return <>

      <div className="absolute bg-[url('./assets/backgrounds/space-bg.jpg')] text-center bg-no-repeat w-full bg-size-[auto_800px] bg-right lg:bg-size-[auto_850px] lg:bg-center h-200">

        <Navigator transparent={true} scrolled={scrolled} handleMenu={handleMenuActive}/>
        

        <p className="text-white font-extrabold w-2xs text-4xl mt-40 mb-30 lg:text-7xl  text-center lg:w-3xl m-auto lg:mt-45">EL AROMA NOS CONECTA</p>
        <Link to="esg/4"><button className=" w-2xs font-semibold  lg:my-0 text-white tracking-widest border-1 p-3 rounded-4xl cursor-pointer m-auto text-center">Descubre la campaña</button></Link>
    </div>

    {menuActive && <Menu handleMenuActive={handleMenuActive}/>}
<article className="absolute top-200">
    <section className={`flex flex-col w-full gap-15  pr-2 pl-2 pt-20 pb-15 h-auto `}>

     <article className="bg-blue-950 relative w-80 h-90 sm:w-full m-auto sm:h-auto flex flex-col text-center sm:flex-row sm:justify-between">
        <div className="text-white relative z-10  pt-5  sm:w-1/3  sm:pl-5 sm:pt-7 sm:pb-5   sm:h-70">

          <h1 className="text-2xl font-extrabold  sm:text-left m-0  mb-5 sm:mb-3 z-10">Terrana del Norte</h1>
          <h3 className="text-sm sm:mb-10 pr-2 pl-2 sm:p-0 font-semibold mb-7 sm:text-left z-10">La fuerza de la ría y las raíces celtas inspiran cada grano de Terrana, despertando sentidos y celebrando la tradición de nuestra tierra.</h3>
          <Link to="/chefs/7"><button className=" bg-white  sm:absolute sm:left-3 sm:bottom-5 text-blue-950  tracking-widest font-extrabold text-sm p-3 w-60 cursor-pointer rounded-4xl">DESCUBRIR MÁS</button></Link>

        </div>
        <img  className='absolute  h-2/5 object:cover w-full bottom-0 sm:w-125 sm:h-70 sm:object-cover sm:right-0 sm:flex hidden z-0 'src={block2} alt="" />
        <img  className='absolute  h-2/5 object:cover w-full bottom-0 sm:w-120 sm:h-70 sm:object-fill sm:right-0 sm:hidden 'src={block2shaped} alt="" />
     </article>

     <article className="bg-blue-950 relative w-80 h-90 sm:w-full m-auto sm:h-auto flex flex-col text-center sm:flex-row sm:justify-between">
        <div className="text-white relative z-10  pt-5  sm:w-1/3  sm:pl-5 sm:pt-7 sm:pb-5   sm:h-70">

          <h1 className="text-2xl font-extrabold  sm:text-left m-0  mb-5 sm:mb-3 z-10">El clima del café</h1>
          <h3 className="text-sm sm:mb-10 pr-2 pl-2 sm:p-0 font-semibold mb-7 sm:text-left z-10">  Cada gota de lluvia, cada rayo de sol y cada brisa marina moldean el sabor de nuestros granos. Descubre cómo el clima de Galicia y su herencia celta dan carácter a Terrana.
</h3>
          <Link to="/esg/3"><button className=" bg-white cursor-pointer  sm:absolute sm:left-3 sm:bottom-5 text-blue-950  tracking-widest font-extrabold text-sm p-3 w-60 rounded-4xl">DESCUBRIR MÁS</button></Link>

        </div>
        <img  className='absolute  h-2/5 object:cover w-full bottom-0 sm:w-150 sm:h-70 sm:object-cover sm:right-0 sm:flex hidden z-0 'src={block1} alt="" />
        <img  className='absolute  h-2/5 object:cover w-full bottom-0 sm:w-120 sm:h-70 sm:object-fill sm:right-0 sm:hidden 'src={block1shaped} alt="" />
     </article>

     <h1 className='w-full mb-[-30px] text-center font-extrabold text-2xl text-blue-950'>Explora el nuevo álbum Terrana</h1>

     <article className="bg-stone-900 relative w-80 h-90 sm:w-full m-auto sm:h-auto flex flex-col text-center sm:flex-row sm:justify-between">
        <div className="text-white relative z-10  pt-5  sm:w-1/3  sm:pl-5 sm:pt-7 sm:pb-5   sm:h-70">

          <h1 className="text-2xl font-extrabold  sm:text-left m-0  mb-10 sm:mb-3 z-10">Álbum Terrana 2025</h1>
          <h3 className="text-sm sm:mb-10 pr-2 pl-2 sm:p-0 font-semibold mb-15 sm:text-left z-10">  El Álbum Terrana 2025 es un proyecto colaborativo con fotógrafos que capturan la esencia de nuestras tierras, la influencia del clima y la tradición en cada grano de café.
</h3>
        <Link to="/esg/1">  <button className=" bg-white  sm:absolute sm:left-3 sm:bottom-5 text-blue-950  tracking-widest font-extrabold text-sm p-3 w-60 cursor-pointer rounded-4xl">DESCUBRIR MÁS</button></Link>

        </div>
        <img  className='absolute  h-3/5 object-cover w-full bottom-0  mask-t-from-50% sm:mask-l-from-50% sm:mask-t-from-100% sm:w-150 sm:h-70 sm:object-cover sm:right-0 sm:flex  z-0 'src={block3} alt="" />
        
     </article>
    </section>

      <section className="w-full  ">

        <Collection/>


      </section>

     <section className='w-full h-130 bg-[url("./assets/home_img/background-inspiring.png")] bg-no-repeat bg-center bg-cover z-0 flex flex-col items-center justify-center'>

          <h1 className=' text-center text-white font-extrabold  text-xl mt-[-30px] sm:mt-0 sm:text-3xl md:w-3/5 w-2/3 font-[Meddon]'>Cada taza de Terrana es un viaje por sabores y paisajes únicos. Deja que la tierra, la luz  y los secretos despierten tus sentidos.
</h1>

     </section>

     <section className=" hidden mt-[-50px] w-full  h-75 lg:flex justify-center gap-2 pl-2 pr-3">
        <div className="w-1/3 h-full  flex  items-start">
          <div className="w-full bg-no-repeat bg-cover bg-center bg-stone-500 bg-blend-multiply bg-[url(./assets/home_img/coffee-pot.png)] text-white flex flex-col p-5 h-4/5  rounded-xl">
          <p className="font-[Corinthia] text-4xl font-bold">Raíces Responsables</p>
          <p className="text-xl font-extrabold mb-6">Descubre cómo cuidamos la tierra y apoyamos a nuestras comunidades</p>
          <a onClick={(e)=>{e.preventDefault()}} className="self-end font-bold tracking-widest hover:underline underline-offset-4 "><Link to="/esg">DESCUBRIR MÁS &gt;</Link></a>
          </div>
        </div>
        <div className="w-1/3 h-full   flex  items-end">
          <div className="w-full  bg-center bg-no-repeat bg-cover bg-stone-500 bg-blend-multiply bg-[url(./assets/home_img/coffe-plant.jpg)] text-white flex flex-col p-5 h-4/5  rounded-xl">
          <p className="font-[Corinthia] text-4xl font-bold">Momentos Terrana</p>
          <p className="text-xl font-extrabold mb-6">Vive experiencias únicas con nuestros chefs</p>
          <a onClick={(e)=>{e.preventDefault()}} className="self-end font-bold tracking-widest hover:underline underline-offset-4 " ><Link to="/chefs">DESCUBRIR MÁS &gt;</Link></a>
          </div>
        </div>
        <div className="w-1/3 h-full  flex  items-start">
          <div className="w-full bg-no-repeat bg-center bg-stone-500 bg-blend-multiply bg-cover bg-[url(./assets/home_img/coffee-shop.jpg)] text-white flex flex-col p-5 h-4/5  rounded-xl">
          <p className="font-[Corinthia] text-4xl font-bold">A tu modo </p>
          <p className="text-xl font-extrabold mb-6">Permítete sorprenderte por las posibilidades del café</p>
          <a onClick={(e)=>{e.preventDefault()}} className="self-end font-bold tracking-widest hover:underline underline-offset-4 "><Link to="/recetas">DESCUBRIR MÁS &gt;</Link></a>
          </div>
        </div>
     </section>

  <aside className="  w-full mt-20  ">
     <section className="lg:hidden w-full flex justify-center h-auto">

      <article className="w-8/10  h-100 relative">

          <Slider components={[
              {
                "boxUrl":"./assets/home_img/coffee-pot.png",
                "title":"Raíces responsables",
                "subtitle":"Descubre cómo cuidamos la tierra y apoyamos a nuestras comunidades",
                "link":"/esg"
              },
              {
                "boxUrl":"./assets/home_img/coffe-plant.jpg",
                "title":"Momentos Terrana",
                "subtitle":"Vive experiencias únicas con nuestros chefs",
                "link":"/chefs"
              },
              {
                "boxUrl":"./assets/home_img/coffee-shop.jpg",
                "title":"A tu modo",
                "subtitle":"Permítete sorprenderte por las posibilidades del café",
                "link":"/recetas"
              }

          ]}/>

      </article>


     </section>
     </aside>

          <aside className=" w-full p-5  h-auto ">

            <h1 className=" md:text-4xl text-2xl font-extrabold m-auto md:text-blue-950 w-2/3 mb-10 text-center  ">Descubre la experiencia Terrana</h1>

            <article className=" hidden  lg:grid  lg:grid-cols-3 lg:grid-rows-2 lg:gap-4 lg:w-8/10 lg:h-130 lg:m-auto">
                        <div className="col-span-2 row-span-2  rounded-3xl bg-no-repeat text-white flex flex-col justify-end pb-5 pr-3 pl-5 bg-stone-500 bg-blend- bg-bottom-right bg-size-[1500px]  bg-[url(./assets/backgrounds/space-bg.jpg)]">
                        <p className="text-4xl font-extrabold mb-6">El aroma nos conecta</p>
                  <a onClick={(e)=>{e.preventDefault()}}  className="self-end text-right  font-bold tracking-widest hover:underline underline-offset-4 " ><Link to="/esg/4">VER EL VÍDEO &gt;</Link></a>
                        </div>
                        <div className="col-span-1 row-span-1 rounded-3xl flex flex-col pt-10 pl-2 text-white content-center pr-2  bg-stone-500 bg-blend-multiply bg-[url(./assets/home_img/third-block.jpg)]  bg-size-[400px] bg-no-repeat bg-center ">
                            <p className="font-[Corinthia] text-3xl font-bold">Álbum 2025</p>
                  <p className="text-md font-extrabold mb-6">Descubre el calendario de 2025 de David Sánchez</p>
                  <a onClick={(e)=>{e.preventDefault()}} className="self-end text-right  font-bold tracking-widest hover:underline underline-offset-4 " ><Link to="/esg/1">DESCÚBRELO &gt;</Link></a>
                        </div>
                        <div className="col-span-1 row-span-1 rounded-3xl flex flex-col pr-2 pl-2 text-white justify-center bg-stone-500 bg-blend-multiply bg-[url(./assets/home_img/second-block.png)]  bg-size-[700px] bg-no-repeat bg-center">
                              <p className="font-[Corinthia] text-3xl font-bold">Ayuda</p>
                  <p className="text-md font-extrabold mb-6">Siempre cerca de ti</p>
                  <a onClick={(e)=>{e.preventDefault()}} className="self-end text-right  font-bold tracking-widest hover:underline underline-offset-4 "><Link to="/contact">CONTACTA &gt;</Link></a>
                        
                        </div>

            </article>
            
            <article className="lg:hidden relative w-full h-130  m-auto">
            <Slider components={[
              {
                "title":" ",
                "subtitle":"El aroma nos conecta",
                "boxUrl":"./assets/backgrounds/space-bg.jpg",
                "link":"/esg/4"
              },
              {
                "title":"Calendario 2023",
                "subtitle":"Descubre el álbum de 2025 de David Sánchez",
                "boxUrl":"./assets/home_img/third-block.jpg",
                "link":"esg/1"
              },
              {
                "title":"Ayuda",
                "subtitle":"Siempre cerca de ti",
                "boxUrl":"./assets/home_img/second-block.png",
                "link":"/contact"
              },
            ]} addClasses={
              {"widthLeft":"w-3/10 -translate-x-3/5",
              "widthCenter":"w-5/10 -translate-x-1/2",
              "widthRight":"w-3/10 -translate-x-52",
              "bgSize":"bg-size-[1000px]",
              "bgPosition":"bg-bottom-right",
              "textPosition":"justify-end"
              }
            }   />

            </article>

          </aside>

        <section className=" text-white py-5 flex flex-col justify-center items-center w-full p-5  h-150 bg-stone-500 bg-blend-multiply bg-size-[1800px] bg-center bg-[url(./assets/home_img/background-nature.jpg)]">
        
          <p className="font-[Corinthia] text-5xl md:text-6xl">Un viaje lleno de aromas</p>
          <p className="font-extrabold text-center text-3xl mt-10 w-2/3 md:w-2/3 ">Canarias: la temporada del café</p>
          <p className=" font-semibold text-xl text-center w-2/3 md:w-2/3 mt-10 ">Explora los cafetales bañados por el sol atlántico y descubre cómo el clima y la tierra volcánica dan carácter a cada grano.
</p>
         <Link to="esg/2"> <button className=" mt-10 rounded-3xl border-1 cursor-pointer p-3 w-50 ">Descubre más</button></Link>
        </section>

            <footer className=" w-full   ">

                <Footer/>

            </footer>

            </article>
  
  </>
  
}


function Collection(){

  const [collections, setCollections]=useState(productsInfo)

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



  return <div >

  <section className={`${collections[current].collection.backgroundSettings} pt-15  h-240  flex flex-col items-center`}>
      
      <div className="p-5 sm:w-auto  w-100 ml-[-10px]  flex justify-around gap-3     sm:flex sm:justify-center sm:gap-4">
          
          <div>
            <img onClick={()=>{
              handleStopCurrent(0)
            }} className={`w-20 h-20 bg-[url(./assets/home_img/background-coffee-1.jpg)] cursor-pointer object-contain   ${current==0?"border-white border-2":""}  p-1 rounded-full`}src={productsInfo[0].collection.products[0].imgUrl} alt="" />
            <p className="w-20 text-center mt-2 text-xs font-bold text-white">{`${collections[0].collection.name}`}</p>
          </div>
          <div>
            <img onClick={()=>{
              handleStopCurrent(1)
            }} className={`w-20 h-20 bg-[url(./assets/home_img/background-coffee-2.jpg)] cursor-pointer object-contain   ${current==1?"border-white border-2":""}  p-1 rounded-full`}src={productsInfo[1].collection.products[1].imgUrl} alt="" />
            <p className="w-20 text-center mt-2 text-xs font-bold text-white">{`${collections[1].collection.name}`}</p>
          </div>
          <div>
            <img onClick={()=>{
              handleStopCurrent(2)
            }} className={`w-20 h-20 bg-[url(./assets/home_img/background-coffee-3.jpg)] cursor-pointer object-contain   ${current==2?"border-white border-2":""}  p-1 rounded-full`}src={productsInfo[2].collection.products[2].imgUrl} alt="" />
            <p className="w-20 text-center mt-2 text-xs font-bold text-white">{`${collections[2].collection.name}`}</p>
          </div>
          

      </div>

      <p className='font-[Corinthia] mt-5 text-4xl text-white w-1/3 text-center md:text-left  '>Collection</p>
      <h1 className="text-white mb-4 font-extrabold text-3xl">{`${collections[current].collection.name}`}</h1>
      <h2 className="text-white w-2/3 sm:w-1/3 text-center font-semibold ">{`${collections[current].collection.description}`}</h2>
        <img className="w-100 h-90 mt-5" src={collections[current].collection.products[0].imgUrl} alt="" />
       <Link to={`collections/${collections[current].collection.id}`}><button className=" bg-white cursor-pointer text-blue-950  tracking-widest font-extrabold text-sm p-3 w-60 pt-5 pb-5 mt-10 rounded-4xl">DESCUBRIR MÁS</button></Link> 

     </section>

    <aside className="   m-auto  mt-[-50px] mb-[-100px]   h-auto lg:h-auto   lg:pt-20 lg:pb-30   z-10">
        <div className="  z-10 lg:h-100 h-auto flex lg:flex-row flex-col items-center lg:justify-center lg:gap-3 gap-0 ">

        {collections[current] && collections[current].collection.products.slice(0,collections.indexOf(collections[current])%2==0?3:2).map((col)=>{

          return <div className=" w-80 shrink-0 h-130 rounded-md bg-stone-50 flex flex-col items-center p-5 ">
        <img className="w-40 h-40 mt-10"src={col.imgUrl} alt="" />
        <p className="text-sm text-blue-950 tracking-widest mb-5">{col.category}</p>
        <p className="text-xl text-blue-950 font-extrabold mb-2">{col.name}</p>
        <p className="text-xs text-blue-950 font-semibold">Intensidad {col.intensity}/10</p>    
        <div className="w-19/20 bg-amber-100 rounded-xl  mt-10 h-27 flex flex-row items-center justify-start pl-5">
            <div className="w-1/3 flex items-center gap-2 bg-white rounded-xl h-10 text-blue-950 font-bold text-left pl-2" >
            <i className="fa-solid fa-box text-blue-950"></i>
            <span className=" text-blue-950 " value=""> {col.quantity}</span>        
            </div>
        </div>
            <Link to={`detail/${col.collectionId}/${col.id}`}><button className="w-full bg-blue-950 hover:bg-blue-900 transition-colors ease-in text-white rounded-4xl mt-5 p-2 font-extrabold tracking-widest cursor-pointer text-sm">DESCUBRE MÁS</button></Link>

      </div>
        })}

     </div>
     </aside>
  
  
  </div>
}

 export function Footer(){

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

   <section className=" overflow-hidden w-full sm:p-5  h-auto pt-2">

          <p className="text-blue-950 font-light text-sm mb-3 ">*Terrana compensa las emisiones provocadas por estos productos para lograr un impacto cero en emisiones de CO₂. </p>
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
                            <p className="text-sm font-extrabold text-blue-950 tracking-wide">NUESTROS LOCALES</p>
              </div>
              <p className="text-xs w-7/8 text-blue-950">Disfruta de la experiencia Terrana auténtica en nuestras tiendas.</p>


            </div>


          </article>
        
        
        </section>

     <section className="hidden md:inline-block md:w-full md:pb-6 md:bg-blue-950 md:h-auto">

      <div className="h-20  pl-10 w-full flex items-start text-left pt-3 ">
        <div className="flex flex-col items-center ">
        <img className="w-40 h-15 object-cover " src={terranaWhite} alt="" />
        <p className="text-[10px] text-white tracking-widest font-bold">VIGO,SPAGNA,2025</p>
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
<h1 className=" tracking-widest font-extrabold mb-4  text-sm">TERRANA STORIES</h1>
<h1 className=" tracking-widest font-extrabold mb-4 text-sm">SOSTENIBILIDAD</h1>
<h1 className=" tracking-widest font-extrabold text-sm">TERRANA WORLD</h1>

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

            <div className="h-20 w-full flex items-start text-left pt-3 pl-2">
        <div className="flex flex-col items-center">
        <img className="w-30 h-15 object-cover" src={terranaWhite} alt="" />
        
        </div>
      </div>

      <div className="pl-3 pr-3 flex flex-col divide-y-1 divide-white w-full ">
       <div className="flex flex-col h-auto w-full">
          <div className="w-full flex justify-between h-12 items-center ">
       
        <h1 className='text-white text-sm  tracking-widest font-bold'>PRODUCTOS</h1>
        <i className={`fa-solid fa-caret fa-caret-${visible.productos?"up":"down"} text-white cursor-pointer`} onClick={()=>{

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
        <h1 className='text-white text-sm  tracking-widest font-bold'>TERRANA STORIES</h1>
          </div>  
          <div className="w-full flex justify-between h-12 items-center ">
        <h1 className='text-white text-sm  tracking-widest font-bold'>SOSTENIBILIDAD</h1>
          </div>  
          <div className="w-full flex justify-between h-12 items-center ">
        <h1 className='text-white text-sm  tracking-widest font-bold'>TERRANA WORLD</h1>

          </div>  
       <div className="text-white">
          <div className="w-full flex justify-between h-12 items-center ">
        <h1 className='text-white w-full text-sm  tracking-widest font-bold'>AYUDA</h1>
        <i className={`fa-solid fa-caret fa-caret-${visible.ayuda?"up":"down"} text-white cursor-pointer`} onClick={()=>{

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
        <i className={`fa-solid fa-caret-${visible.notasLegales?"up":"down"} text-white cursor-pointer`} onClick={()=>{

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

export function Slider({components, addClasses={}}){

  const [boxes, setBoxes]=useState(components)
  const [positions, setPositions]=useState({

    "left":` ${addClasses.widthLeft?addClasses.widthLeft:"w-6/10 -translate-x-3/5 "}   z10  h-8/12 left-2/5 top-1/2  -translate-y-1/2`,

    "center":` ${addClasses.widthCenter?addClasses.widthCenter:"w-8/10 -translate-x-1/2"}  left-1/2 h-4/5   top-1/2  -translate-y-1/2 z-20`,

    "right":`${addClasses.widthRight?addClasses.widthRight:"w-6/10 -translate-x-12/16"}  z10 left-4/5 h-8/12  top-1/2  -translate-y-1/2`

  })

  const [current,setCurrent]=useState(1)

  const giveClass=function(number){

    if(components.length==2){
      if(number==current){
            return positions.center
    }else if(number!=current){
      return positions.left
    }else{  
      return "hidden"
    }

    }else if(number==current){
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
          <a onClick={(e)=>e.preventDefault()} className="self-end font-bold tracking-widest hover:underline underline-offset-4 " href=""><Link to={components[0].link}>DESCUBRIR MÁS &gt;</Link></a>
          </div>
  
         <div onClick={()=>{
            handleCurrent(1)
          }

          }  className={`${
          giveClass(1)
         }  absolute transition-all ease-in-out duration-500  bg-no-repeat bg-cover bg-center bg-stone-500 bg-blend-multiply bg-[url(${boxes[1].boxUrl})] text-white flex flex-col ${addClasses.textPosition?addClasses.textPosition:" "} p-5   rounded-xl`}>
          <p className="font-[Corinthia] text-4xl font-bold">{boxes[1].title}</p>
          <p className="text-2xl font-extrabold mb-6">{boxes[1].subtitle}</p>
            <a onClick={(e)=>e.preventDefault()} className="self-end font-bold tracking-widest hover:underline underline-offset-4 " href=""><Link to={components[1].link}>DESCUBRIR MÁS &gt;</Link></a>
          </div>
         
          
          {components.length==3 && <div onClick={()=>{
            handleCurrent(2)
          }

          }  className={` ${
            giveClass(2)
          } absolute  transition-all ease-in-out duration-500  bg-no-repeat bg-cover bg-center bg-stone-500 bg-blend-multiply bg-[url(${boxes[2].boxUrl})] text-white flex flex-col p-5  ${addClasses.textPosition?addClasses.textPosition:" "} rounded-xl`}>
          <p className="font-[Corinthia] text-4xl font-bold">{boxes[2].title}</p>
          <p className="text-2xl font-extrabold mb-6">{boxes[2].subtitle}</p>
           <a onClick={(e)=>{e.preventDefault()}} className="self-end font-bold tracking-widest hover:underline underline-offset-4 "><Link to={components[2].link}>DESCUBRIR MÁS &gt;</Link></a>
          </div>}

          <div className="flex gap-10 justify-center absolute bottom-0 w-full text-center">
            <button onClick={()=>{
              handleCurrent(0)
            }}><i className={`fa-solid fa-circle text-xs ${current==0?"text-blue-900":"text-blue-500"} cursor-pointer`}></i></button>
            <button onClick={()=>{
              handleCurrent(1)
            }}><i className={`fa-solid fa-circle text-xs cursor-pointer ${current==1?"text-blue-900":"text-blue-500"}`}></i></button>
          { components.length==3 && <button onClick={()=>{
              handleCurrent(2)
            }}><i className={`fa-solid fa-circle text-xs cursor-pointer ${current==2?"text-blue-900":"text-blue-500"}`}></i></button>}
         
          </div>



</>
}


export function Slider2({blocks}){

  const [boxes, setBoxes]=useState(blocks)
  const [positions, setPositions]=useState({

    "left":` ${boxes.widthLeft} z-0 -translate-x-3/5      ${boxes.heightLeft} left-2/5   `,

    "center":` ${boxes.widthCenter} z-10 -translate-x-1/2  left-1/2 ${boxes.heightCenter}     `,

    "right":`${boxes.widthRight} z-0 -translate-x-12/16   left-4/5 ${boxes.heightRight}  `

  })

  console.log(boxes.content)

  const [current,setCurrent]=useState(1)

  const giveClass=function(number){

    if(boxes.content.length==2){
      if(number==current){
            return positions.center
    }else if(number!=current){
      return positions.left
    }else{  
      return "hidden"
    }

    }else if(number==current){
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

   

    {boxes.content.map((b, index)=>{

       return <div key={index} onClick={()=>{
            handleCurrent(index)
          }

          } className={` ${
            giveClass(index)
          }    absolute transition-all ease-in-out duration-500`}>

            {b}
            
          </div>

    })}

    <div className='z-40 absolute bottom-0 flex gap-10'>

    {boxes.content.map((b, index)=>{
      return <button onClick={()=>{
              handleCurrent(index)
            }}><i className={`fa-solid fa-circle text-xs ${current==index?"text-blue-900":"text-blue-500"} m-auto cursor-pointer`}></i></button>
          
    })}
    </div>

          

</>

}