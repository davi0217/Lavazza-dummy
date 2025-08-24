import { useState, useEffect, useRef } from 'react'
import {useParams, Link} from 'react-router-dom'


import terranaWhite from '../assets/home_img/terrana-white.png'
import terranaBlue from '../assets/home_img/terrana-blue.png'
import backgroundCoffee1 from '../assets/home_img/background-coffee-1.jpg'
import backgroundCoffee2 from '../assets/home_img/background-coffee-2.jpg'
import backgroundCoffee3 from '../assets/home_img/background-coffee-3.jpg'
import splash from '../assets/collections/splash.png'
import woman from '../assets/collections/woman-drinking.jpg'
import licor from '../assets/collections/licor.jpg'
import tonic from '../assets/collections/tonic.jpg'
import affogato from '../assets/collections/affogato.jpg'

import {Footer, Menu, Navigator, Slider, Sustainability, CollectionBlocks, CollectionSlider} from './Utilities.jsx'


import { productsInfo } from '../data/products-info.js'
import {useNavigator} from '../custom-hooks/useNavigator.js'
import { productsDisplay } from '../data/products-display.js'


export function Collections(){

    let params=useParams()

    /* El estado collection contiene la colección a mostrar según el id obtenido de los parámetros a través de useParams
    Se filtra el array productsInfo para obtener la colección correspondiente, que es a su vez un objeto 
    Podrán ser tres : 1 (Atlántica) 2 (Mediterránea) o 3 (Arcana) */

    const [collection, setCollection]=useState(productsInfo.filter((p)=>{
        console.log(p.collection.id==params.id)
       return p.collection.id==params.id
    })[0].collection)

/* 
El hook personalizado nos ofrece estados y handlers:
- scrolled: Si el usuario ha hecho scroll en la web, para cambiar el color del navegador
- menuActive: Estado del menú principal que se despliega del navegador
- handleMenuActive: Activar o desactivar el menú del navegador
- storiesActive: Estado del menú de historias que se despliega del navegador
- handleStoriesActive: Activar o desactivar el menú de historias del navegador
*/
    const {scrolled, menuActive, handleMenuActive,  storiesActive, handleStoriesActive}=useNavigator()


   
    useEffect(()=>{

        /* Cada vez que cambia el id de los parámetros se actualiza el estado con la colección correspondiente  */
       setCollection(productsInfo.filter((p)=>{
       handleMenuActive(false)
       return p.collection.id==params.id
    })[0].collection)

    },[params.id])


    return <>
    
  
            <Navigator transparent={true} scrolled={scrolled} handleMenu={handleMenuActive} handleStories={handleStoriesActive}>

            </Navigator>

{/* El fondo de la colección se obtiene de forma dinámica del estado collection */}
    <div className={`h-200 w-full z-0 absolute top-0 bg-stone-300 bg-blend-multiply ${collection.backgroundSettings} bg-size-[1070px] sm:bg-size-[1200px] md:bg-size-[1370px] bg-no-repeat bg-center`} >

   </div>
    
            {(menuActive || storiesActive) && <Menu handleMenuActive={handleMenuActive} handleStoriesActive ={handleStoriesActive} storiesActive={storiesActive} menuActive={menuActive}/>}

{/* Los datos de la colección se obtiene de forma dinámica del estado collection, y se muestran en este primer contenedor */}

        <div className="w-full mt-20 h-110  text-white flex flex-col justify-center items-center">
            <p className="font-[Corinthia] z-10 text-3xl font-bold text-center w-2/3">Collection</p>
            <p className=" md:text-7xl text-5xl z-10 font-extrabold mt-4 text-center w-3/4">{collection?.name}</p>
            <p className=" text-xl z-10 font-bold mt-4 text-center w-1/2 md:w-3/4">{collection?.description}</p>
        </div>

{/* Tras el nombre y descripción de la colección, se muestra un slider con las tres categorías de la colección, a través del contenedor CollectionSlider
Más información sobre el componente CollectionSlider en Utilities.jsx */}
        <section className="relative w-full mt-5 pb-20 bg-red-900 rounded-b-[200px] rounded-t-[150px] md:rounded-t-[250px] ">
                <CollectionSlider collection={collection}/>
{/* Tras el slider, CollectionBlocks se encarga de organizar la información de la colección en cuatro bloques temáticos diferentes, que se reorganizar con cada breaking point
La complejidad de la reorganización exige recogerlo en otro componente, cuyos detalles se explican en Utilities.jsx */}
                <article className="mt-20 mb-20">
                <CollectionBlocks collection={collection}/>
                </article>
            <div className="w-full text-center ">
            {/* El link con el que termina esta sección lleva a la sección general de productos, es decir, /products/cafe */}
            <Link to="/products/cafe"><button className="text-white border-1 border-white tracking-widest text-sm p-5 rounded-4xl cursor-pointer text-center w-80">VER TODOS LOS PRODUCTOS</button></Link>
            </div>

            <img className="m-auto  w-50 mt-20 mb-[-160px]" src={splash} alt="" />

           
        </section>

{/* Un contenedor accesorio con imagen de fondo y cita */}
        <div className="w-full mt-[-180px] h-210 flex flex-col items-center justify-center bg-stone-500 bg-blend-multiply bg-[url('./assets/collections/woman-drinking.jpg')] bg-cover bg-center md:bg-right">
        <p className="w-2/3 font-bold mb-5 text-white font-[Corinthia] text-4xl md:text-5xl lg:text-7xl text-center">Hay que valorar el equilibrio de los contrastes, en la cocina y en la vida</p>
        <p className="text-white text-xl font-normal ">David Sánchez</p>
        </div>

{/* La siguiente sección, al igual que en el componente Home, muestra tres contenedores que, a partir del breakpoint lg, se desplegan de forma lineal
No obstante, por debajo del breakpoint lg se muestran dentro del componente Slider, que se explica en Utilities.jsx
Esta estructura se repite en varias partes de la aplicación en la que es necesario mostrar varios bloques a la vez en un espacio reducido, con efectos que mejoren la experiencia de lectura del usuario */}
         <section className=" hidden mb-30 mt-[-50px] w-full pb-10 h-110 lg:flex justify-center gap-2 pl-2 pr-3">
        <div className="w-1/3 h-full  flex  items-start">
          <div className="w-full bg-no-repeat bg-cover bg-center bg-stone-500 bg-blend-multiply bg-[url(./assets/collections/licor.jpg)] text-white flex flex-col p-5 h-4/5  rounded-xl">
          <p className="font-[Corinthia] text-4xl font-bold">Licor café</p>
          <p className="text-xl font-extrabold mb-6">El sabor de la tradición</p>
          <a onClick={(e)=>{e.preventDefault}} className="self-end font-bold tracking-widest hover:underline underline-offset-4 "><Link to="/recetas/1">DESCUBRIR MÁS &gt;</Link></a>
          </div>
        </div>
        <div className="w-1/3 h-full   flex  items-end">
          <div className="w-full  bg-center bg-no-repeat bg-cover bg-stone-500 bg-blend-multiply bg-[url(./assets/collections/tonic.jpg)] text-white flex flex-col p-5 h-4/5  rounded-xl">
          <p className="font-[Corinthia] text-4xl font-bold">Espresso tonic </p>
          <p className="text-xl font-extrabold mb-6">Para los paladares más curiosos</p>
          <a onClick={(e)=>{e.preventDefault}} className="self-end font-bold tracking-widest hover:underline underline-offset-4 "><Link to="/recetas/2">DESCUBRIR MÁS &gt;</Link></a>
          </div>
        </div>
        <div className="w-1/3 h-full  flex  items-start">
          <div className="w-full bg-no-repeat bg-center bg-stone-500 bg-blend-multiply bg-cover bg-[url(./assets/collections/affogato.jpg)] text-white flex flex-col p-5 h-4/5  rounded-xl">
          <p className="font-[Corinthia] text-4xl font-bold">Affogato</p>
          <p className="text-xl font-extrabold mb-6">Un postre a la italiana</p>
          <a onClick={(e)=>{e.preventDefault}} className="self-end font-bold tracking-widest hover:underline underline-offset-4 "><Link to="/recetas/3">DESCUBRIR MÁS &gt;</Link></a>
          </div>
        </div>
     </section>

{/* Más información sobre el componente Slider en Utilities.jsx */}

  <aside className="  w-full mt-[-100px] mb-15  ">
     <section className="lg:hidden w-full flex justify-center h-auto">

      <article className="w-8/10  h-100 relative">

          <Slider components={[
              {
                "boxUrl":"./assets/collections/licor.jpg",
                "title":"Licor de café",
                "subtitle":"El sabor de la tradición",
                "link":"/recetas/1"
              },
              {
                "boxUrl":'./assets/collections/tonic.jpg',
                "title":"Espresso tonic",
                "subtitle":"Para los paladares más curiosos",
                "link":"/recetas/2"
              },
              {
                "boxUrl":'./assets/collections/affogato.jpg',
                "title":"Affogato",
                "subtitle":"Un postre a la italiana",
                "link":"/recetas/3"
              }

          ]}/>

      </article>


     </section>
     </aside>

     {/* Esta sección termina con los bloques Sustainability y Footer, que se replican en otras partes de la aplicación
     Más información sobre el funcionamiento de estos componentes en Utilities.jsx */}

    <Sustainability/> 
        
    <Footer/>
    
    </>

}