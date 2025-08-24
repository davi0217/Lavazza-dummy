import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { useNavigator } from '../custom-hooks/useNavigator.js'

import terranaWhite from '../assets/home_img/terrana-white.png'
import terranaBlue from '../assets/home_img/terrana-blue.png'
import block1 from '../assets/home_img/first-block-home.png'
import block1shaped from '../assets/home_img/first-block-home-2.png'
import block2 from '../assets/home_img/second-block-home.png'
import block2shaped from '../assets/home_img/second-block-home-2.png'
import block3 from '../assets/home_img/third-block.jpg'
import backgroundCoffee1 from '../assets/home_img/background-coffee-1.jpg'
import backgroundCoffee2 from '../assets/home_img/background-coffee-2.jpg'
import backgroundCoffee3 from '../assets/home_img/background-coffee-3.jpg'
import coffeeProduct1 from '../assets/home_img/coffee-product-1.png'
import backgroundInspiring from '../assets/home_img/background-inspiring.png'
import woman from '../assets/collections/woman-drinking.jpg'
import licor from '../assets/collections/licor.jpg'
import tonic from '../assets/collections/tonic.jpg'
import affogato from '../assets/collections/affogato.jpg'


import {Menu, Navigator, Footer, Collection, Slider} from './Utilities.jsx'
import { productsInfo } from '../data/products-info.js'

export  function Home() {

 
/* 
El hook personalizado nos ofrece estados y handlers:
- scrolled: Si el usuario ha hecho scroll en la web, para cambiar el color del navegador
- menuActive: Estado del menú principal que se despliega del navegador
- handleMenuActive: Activar o desactivar el menú del navegador
- storiesActive: Estado del menú de historias que se despliega del navegador
- handleStoriesActive: Activar o desactivar el menú de historias del navegador
*/
   const {scrolled, menuActive, handleMenuActive, storiesActive, handleStoriesActive } = useNavigator()


  return <>

{/* Bloque de bienvenida a la web, con el contenedor que agrupa el navegador y el mensaje de bienvenida con link a la campaña */}
      <div className="absolute bg-[url('./assets/backgrounds/space-bg.jpg')] text-center bg-no-repeat w-full bg-size-[auto_800px] bg-right lg:bg-size-[auto_850px] lg:bg-center h-200">

<Navigator transparent={true} scrolled={scrolled} handleMenu={handleMenuActive} handleStories={handleStoriesActive}>

            </Navigator>        

        <p className="text-white font-extrabold w-2xs text-4xl mt-40 mb-30 lg:text-7xl  text-center lg:w-3xl m-auto lg:mt-45">EL AROMA NOS CONECTA</p>
        <Link to="esg/4"><button className=" w-2xs font-semibold  lg:my-0 text-white tracking-widest border-1 p-3 rounded-4xl cursor-pointer m-auto text-center">Descubre la campaña</button></Link>
    </div>

            {(menuActive || storiesActive) && <Menu handleMenuActive={handleMenuActive} handleStoriesActive ={handleStoriesActive} storiesActive={storiesActive} menuActive={menuActive}/>}


<article className="absolute top-200">
    <section className={`flex flex-col w-full gap-15  pr-2 pl-2 pt-20 pb-15 h-auto `}>

 {/* Cada uno de los siguientes artículos es un CTA a alguno de los artículos de la web
 Se adapta a la anchura total, la imagen se sitúa a la derecha a partir del breakpoint md y, más allá, en la parte inferior */}

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

          <h1 className="text-2xl font-extrabold  sm:text-left m-0  mb-0 sm:mb-3 z-10">El clima del café</h1>
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

    {/* Se utiliza el componente Collection para mostrar las diferentes colecciones en intervalos de seis segundos
    Más información en la documentación del componente en Utilities.jsx */}

      <section className="w-full  ">

        <Collection/>


      </section>

     <section className='w-full h-130 bg-[url("./assets/home_img/background-inspiring.png")] bg-no-repeat bg-center bg-cover z-0 flex flex-col items-center justify-center'>

          <h1 className=' text-center text-white font-extrabold  text-xl mt-[-30px] sm:mt-0 sm:text-3xl md:w-3/5 w-2/3 font-[Meddon]'>Cada taza de Terrana es un viaje por sabores y paisajes únicos. Deja que la tierra, la luz  y los secretos despierten tus sentidos.
</h1>

     </section>

     {/* A partir del breakpoint lg, se muestran tres bloques de información con tres CTA distintos
     Aparecen de forma linear, en display flex, y se ocultan más abajo del breakpoint lg para dar lugar a un Slider, que se muestra más adelante */}

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

  {/* El siguiente bloque contiene un Slider que solo se muestra por debajo del breakpoint lg
  Se pasa toda la información a través del atributo components
  Más información en la descripción de Slider en Utilities.jsx */}

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

     {/* Se repite la estructura anterior, con tres bloques que, por debajo del breakpoint lg, se muestran con el componente Slider */}
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
              {"widthLeft":"w-5/10 -translate-x-3/5",
              "widthCenter":"w-7/10 -translate-x-1/2",
              "widthRight":"w-5/10 -translate-x-45 sm_-translate-x-59 md:-translate-x-82",
              "bgSize":"bg-size-[1000px]",
              "bgPosition":"bg-bottom-right",
              "textPosition":"justify-end"
              }
            }   />

            </article>

          </aside>

    {/* Sección descriptiva que inclue un CTA al artículo de Sostenibilidad */}

        <section className=" text-white py-5 flex flex-col justify-center items-center w-full p-5  h-150 bg-stone-500 bg-blend-multiply bg-size-[1800px] bg-center bg-[url(./assets/home_img/background-nature.jpg)]">
        
          <p className="font-[Corinthia] text-5xl md:text-6xl">Un viaje lleno de aromas</p>
          <p className="font-extrabold text-center text-3xl mt-10 w-2/3 md:w-2/3 ">Canarias: la temporada del café</p>
          <p className=" font-semibold text-xl text-center w-2/3 md:w-2/3 mt-10 ">Explora los cafetales bañados por el sol atlántico y descubre cómo el clima y la tierra volcánica dan carácter a cada grano.
</p>
         <Link to="esg/2"> <button className=" mt-10 rounded-3xl border-1 cursor-pointer p-3 w-50 ">Descubre más</button></Link>
        </section>

        {/* Se cierra la sección con un Footer personalizado
        Más información sobre el componente Footer en Utilities.jsx */}

            <footer className=" w-full   ">

                <Footer/>

            </footer>

            </article>
  
  </>
  
}

