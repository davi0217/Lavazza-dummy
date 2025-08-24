import {useEffect, useState, useContext, useRef} from 'react'
import {useParams, Link} from 'react-router-dom'

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

import {productsInfo} from '../data/products-info.js'


/* Se trata de un componente que ocupa la anchura total disponible
Se ubica al final de todas las secciones
Se comporta de forma estática, no recibe parámetros y actúa como puente entre diferentes secciones con los enlaces que ofrece */
export function Footer(){


    /* El estado visible indice las secciones del Footer que, en su versión para pantallas pequeñas, deben desplegarse
    A través del valor booleano para cada key, se decide si la sección se muestra o no a partir de operadores ternarios en el layout */

  const [visible, setVisible]=useState({
    "productos":false,
    "ayuda":false,
    "notasLegales":false
  })

  /* A partir de handleVisible se decide que nuevos apartados serán visibles */

  const handleVisible=function(n){

    /* Se crea una variable temporal para guardar el objeto visible del estado visible */

    let newVisibles=visible

    /* Se recorrde cada valor del objeto visible
    Si el parámetro que se envía coincide con el valor y el valor en newVisible es false, se añade como verdadero al nuevo objeto
    Si era verdadero, no obstante, pasará a ser falso */

    for(let v in newVisibles){
      v==n && !newVisibles[v]?newVisibles[v]=true:newVisibles[v]=false
    }

    //Hacemos este paso porque al quedar registrado newVisibles en la memoria, no vuelve a hacer el cambio de estado más de una vez. 
    //Con el spread operator salvamos este paso

    newVisibles={...newVisibles} 

    setVisible(newVisibles)
  }


  return <>

  {/* Esta sección contiene info general que simplemente se adapta a los breakpoints más pequeños modificando la altura de los contenedores y el tamaño de la fuente */}

   <section className=" overflow-hidden w-full sm:p-5  h-auto pt-2">

          <p className="text-blue-950 font-light text-sm mb-3 ">*Terrana compensa las emisiones provocadas por estos productos para lograr un impacto cero en emisiones de CO₂. </p>
          <article className="bg-stone-200  w-auto sm:gap-5 gap-15  md:divide-stone-50  md:divide-x-2 pt-10 pb-10 flex flex-row justify-center items-center">

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

{/* La siguiente sección se muestra únicamente a partir del breakpoint md, desplegando todas los apartados en cinco columnas organizadas en grid
Cuenta con un div inicial en el que se recoge el logo de la empresa  */}

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
<p className="font-bold text-[14px]  mb-3"><Link to="/products/cafe">Café</Link></p>
<p className="font-normal text-[12px] mb-2"><Link to="/products/grano">Granos de café</Link></p>
<p className="font-normal text-[12px] mb-2"><Link to="/products/molido">Café molido</Link></p>
<p className="font-normal text-[12px] mb-2"><Link to="/products/capsula">Cápsulas</Link></p>

<p className="font-bold text-[14px] mb-3">Máquinas de café</p>

        </div>
        <div className="col-span-1 ">
<h1 className=" tracking-widest font-extrabold mb-4  text-sm">TERRANA STORIES</h1>
<h1 className=" tracking-widest font-extrabold mb-4 text-sm"><Link to="/esg">SOSTENIBILIDAD</Link></h1>
<h1 className=" tracking-widest font-extrabold text-sm"><Link to="/chefs">BON APPETIT</Link></h1>
<h1 className=" tracking-widest font-extrabold text-sm"><Link to="/recetas">A TU MODO</Link></h1>

        </div>
        <div className="col-span-1 pr-8">
<h1 className=" tracking-widest font-extrabold mb-4 text-sm">AYUDA</h1>
<h1 className=" tracking-widest font-extrabold mb-4 text-[12px]"><Link to="/contact">PREGUNTAS FRECUENTES</Link></h1>
<h1 className=" tracking-widest font-extrabold text-[12px]"><Link to="/contact">Contacto</Link></h1>

        </div>
        <div className="col-span-1 pr-8">
<h1 className=" tracking-widest font-extrabold mb-4 text-sm">NOTAS LEGALES</h1>
<h1 className=" tracking-widest font-extrabold mb-4 text-[12px]">Condiciones legales</h1>
<h1 className=" tracking-widest font-extrabold text-[12px]">Bases legales y política privacidad</h1>

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


{/* La siguiente sección se muestra por debajo del breakpoint md, y organiza los apartados con una columna de flex */}
     <section className="md:hidden pb-8 w-full bg-blue-950 h-auto">

            <div className="h-20 w-full flex items-start text-left pt-3 pl-2">
        <div className="flex flex-col items-center">
        <img className="w-30 h-15 object-cover" src={terranaWhite} alt="" />
        
        </div>
      </div>

      <div className="pl-3 pr-3 flex flex-col divide-y-1 divide-white w-full ">
      
      {/* Cada apartado se recoge en un div de anchura maxima
      Si el apartado tiene la función handleVisible en OnClick, cambiará la visibilidad del bloque que se pase, recogido en el objecto visible */}
       <div className="flex flex-col h-auto w-full">
          <div onClick={()=>{

          handleVisible("productos")
        }} className="w-full flex justify-between h-12 items-center ">
       
        <h1 className='text-white text-sm  tracking-widest font-bold'>PRODUCTOS</h1>
        <i className={`fa-solid fa-caret fa-caret-${visible.productos?"up":"down"} text-white cursor-pointer`} ></i>
        </div>

        <div className={` ${visible.productos?" ":"hidden"} cursor-pointer transition-all ease-in text-white text-[12px] font-normal`}>

          <p className="mb-2 font-bold"><Link to="/products/cafe">Café</Link></p>
          <p className="mb-3"><Link to="/products/grano">Granos de café</Link></p>
          <p className="mb-3"><Link to="/products/molido">Café molido</Link></p>
          <p className="mb-3"><Link to="/products/capsula">Cápsulas</Link></p>
          <p className="font-bold mb-3">Máquinas de Café</p>


        </div>
          </div>  


          <div className="w-full flex justify-between h-12 items-center ">
        <h1 className='text-white text-sm  tracking-widest font-bold'><Link to="/esg">TERRANA STORIES</Link></h1>
          </div>  
          
       <div className="text-white">
          <div onClick={()=>{

          handleVisible("ayuda")
        }} className="w-full flex justify-between h-12 items-center ">
        <h1 className='text-white w-full text-sm  tracking-widest font-bold'>AYUDA</h1>
        <i className={`fa-solid fa-caret fa-caret-${visible.ayuda?"up":"down"} text-white cursor-pointer`} ></i>
         </div>
         <div className={` ${visible.ayuda?"":"hidden"} transition-all duration-75 ease-in-out`}>
          <p className="w-full text-xs font-bold mb-3"><Link to="/contact">PREGUNTAS FRECUENTES</Link></p>
          <p className=" text-[11px] mb-3"><Link to="/contact">Contacto</Link></p>
         </div>
          </div>  
       <div className="text-white">
          <div onClick={()=>{

          handleVisible("notasLegales")
        }} className="w-full flex justify-between h-12 items-center ">
        <h1 className='text-white w-full text-sm  tracking-widest font-bold'>NOTAS LEGALES</h1>
        <i className={`fa-solid fa-caret-${visible.notasLegales?"up":"down"} text-white cursor-pointer`} ></i>
         </div>
         <div className={` ${visible.notasLegales?"":"hidden"} transition-all duration-75 ease-in-out`}>
          <p className="w-full text-xs font-bold mb-3">Condiciones de uso</p>
          <p className=" text-[11px] font-bold mb-3">Bases Legales y Política Privacidad</p>
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


/* Navigator es el componente que aparece al principio de todas las secciones
Su posición es fixed y estable en la parte superior, indexado en z por encima de todo el resto de componentes
Acepta varios parámetros:
-transparent: decide si al principio el navegador tiene fondo azul o transparente (cuando hay una imagen que hará de fondo)
-scrolled: si es verdadero, cambia el color según corresponda
-handleMenu:  método para activar el menú principal
-handleStories: método para activar el menú de histories */
export function Navigator({transparent, scrolled, handleMenu, handleStories}){

    

    return <>

    {/* El fondo del navegador en su totalidad se decide a través de scrolled
    Si scrolled es verdadero  el fondo será blanco
    Si además transparent es verdadero, el fondo al principio será transparente
    Si por el contrario transparente es falso, al principio será azul */}
     <div className={`flex fixed ${scrolled?"bg-white text-blue-900":""} ${(!scrolled && transparent)?"text-white":""} ${!scrolled && !transparent?"bg-blue-950 text-white":""} transition-colors ease-in flex-nowrap w-full items-center h-20 z-[30] top-0`}>
              
              {/* El logo, que se posicione de forma absoluta, dependerá también del estado de scrolled */}
              
              {!scrolled && <div className={`  left-2 sm:left-4  z-30 absolute h-auto`}>
    
                <Link to="/"><img  className=" w-35  h-11 object-cover  cursor-pointer  z-30  " src={terranaWhite} alt="" /></Link>
                <p className={` text-[7px] text-center font-bold sm:text-xs`}>VIGO. SPAGNA. 2001</p>
    
                </div>}
    
                {scrolled && <div className={`  left-2 bottom-[20px] sm:bottom-[25px] absolute `}>
               <Link to="/"><img className=" w-35 h-13 object-cover   sm:w-50   z-30 cursor-pointer relative   " src={terranaBlue} alt="" /></Link> 
                </div>
            }

            {/* Los enlaces del navegador se posicionan de forma absoluta y se organizan en flex, justificados al centro */}
              <nav className="hidden  text-sm font-bold  lg:flex gap-8 tracking-widest  md:flex-none absolute left-0 right-0 justify-center z-11">
                <a href="" className={` hover:underline underline-offset-8 ${ scrolled?"decoration-blue-900":"decoration-white"} z-20`} onClick={(e)=>{
                        e.preventDefault()
                        handleMenu(true)
                    }}>PRODUCTOS</a>
                <a href=""className={` hover:underline underline-offset-8 ${ scrolled?"decoration-blue-900":"decoration-white"} z-20`} onClick={(e)=>{
                        e.preventDefault()
                        handleMenu(false)
                        handleStories(true)
                    }}>TERRANA STORIES</a>
                <a href=""className={` hover:underline underline-offset-8 ${ scrolled?"decoration-blue-900":"decoration-white"} z-20`} onClick={(e)=>{
                        e.preventDefault()
                        handleMenu(false)
                       
                
                    }}><Link to="/esg">SOSTENIBILIDAD</Link></a>
                <a href=""className={` hover:underline underline-offset-8 ${ scrolled?"decoration-blue-900":"decoration-white"} z-20`} onClick={(e)=>{
                        e.preventDefault()
                        handleMenu(false)
                    }}><Link to="/contact">CONTACTO</Link></a>
              </nav>
              {/* El icono de carrito lleva a la sección Cart
              El icono de barras despliega el menú principal, pero solo aparece por debajo del breakpoint lg, cuando desaparecen los enlaces */}
              <Link to="/cart"><i className={`fa-solid fa-cart-shopping z-30 flex-none basis-10 text-center text-2xl ${scrolled?"text-blue-900":"text-stone-50"} absolute right-40 top-[25px] lg:right-5  z-10`}></i></Link>
              <i className={`fa-solid fa-bars-staggered cursor-pointer flex  ${scrolled?"text-blue-900":"text-stone-50"} absolute right-12 lg:!hidden`} onClick={(e)=>{
                        e.preventDefault()
                 
                        handleMenu(true)
                    }}></i>
            </div>
</>
}



//El componente Slider define un estilo muy concreto de carrusel al que se le envían dos parámetros, components y addClasses, que por defecto es un objeto vacío
//components es un objeto que lleva las claves: title, subtitle, boxUrl y link
//al slider hay que pasarle el width y el translate-x, translate-y y height se quedan igual
//hay que pasarle el posicionamiento del texto (justify) y el bg-size y bg-position
//el height se regula en el elemento padre, al que hay que poner como relative

export function Slider({components, addClasses={}}){

/* El estado boxes contiene la información pasada a través de components, es un objeto que contiene las claves title, subtitle, boxUrl y link
De esta forma, se devuelve un carrusel con un estilo muy marcado y del que pueden variar algunos indicadores muy concretos recogidos en addClasses, que es opcional */

  const [boxes, setBoxes]=useState(components)

  /* El estado positions indica el estilo que adoptará cada contenedor según su posición en el carrusel */
  const [positions, setPositions]=useState({

    "left":` ${addClasses.widthLeft?addClasses.widthLeft:"w-6/10 -translate-x-3/5 "}   z10  h-8/12 left-2/5 top-1/2  -translate-y-1/2`,

    "center":` ${addClasses.widthCenter?addClasses.widthCenter:"w-8/10 -translate-x-1/2"}  left-1/2 h-4/5   top-1/2  -translate-y-1/2 z-20`,

    "right":`${addClasses.widthRight?addClasses.widthRight:"w-6/10 -translate-x-12/16"}  z10 left-4/5 h-8/12  top-1/2  -translate-y-1/2`

  })

  /* El estado current indica qué elemento de boxes se debe mostrar en el centro,
  por defecto se establece en 1 */

  const [current,setCurrent]=useState(1)


  /* La función giveClass regula qué posición del estado positions debe darse el componente */
  const giveClass=function(number){

    /* Cuando solo se pasan dos objetos, las posiciones que se intercambian son center y left */
    if(components.length==2){
      if(number==current){
            return positions.center
    }else if(number!=current){
      return positions.left
    }else{  
      return "hidden"
    }
/* Cuando se pasan más de dos objetos, las posiciones que se intercambian son center, left y right */
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

  /* La función handleCurrent sirve para qué un determinado bloque se establezca como central */
  const handleCurrent=function(num){

    setCurrent(num)
  }

  return <>

{/* Por defecto, cada vez que se haga click en un contenedor, se marcará como current */}
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
         

     {/* Si hay más de dos componentes, entonces se permitirá la inclusión de un tercer bloque
     Por cuestión de estilo, este carrusel no admite más de tres bloques */}     
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

/* Slider2 funciona con una lógica similar a Slider, pero no restringe los estilos que adoptarán los contenedores a posicionar
Recibe componentes jsx, y los aplica utilizando la misma lógica que Slider */
export function Slider2({blocks}){

/* El estado boxes contiene la información pasada a través de components, es un objeto que contiene las claves title, subtitle, boxUrl y link
De esta forma, se devuelve un carrusel con un estilo muy marcado y del que pueden variar algunos indicadores muy concretos recogidos en addClasses, que es opcional */
  const [boxes, setBoxes]=useState(blocks)

  /* El estado positions indica el estilo que adoptará cada contenedor según su posición en el carrusel */

  const [positions, setPositions]=useState({

    "left":` ${boxes.widthLeft} z-0 -translate-x-3/5      ${boxes.heightLeft} left-2/5   `,

    "center":` ${boxes.widthCenter} z-10 -translate-x-1/2  left-1/2 ${boxes.heightCenter}     `,

    "right":`${boxes.widthRight} z-0 -translate-x-12/16   left-4/5 ${boxes.heightRight}  `

  })

  /* El estado current indica qué elemento de boxes se debe mostrar en el centro,
  por defecto se establece en 1 */

  const [current,setCurrent]=useState(1)

  /* La función giveClass regula qué posición del estado positions debe darse el componente */
  const giveClass=function(number){

    /* Cuando solo se pasan dos objetos, las posiciones que se intercambian son center y left */

    if(boxes.content.length==2){
      if(number==current){
            return positions.center
    }else if(number!=current){
      return positions.left
    }else{  
      return "hidden"
    }
/* Cuando se pasan más de dos objetos, las posiciones que se intercambian son center, left y right */

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

/* La función handleCurrent sirve para qué un determinado bloque se establezca como central */

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

/* Collection es un componente que ocupa la totalidad de la anchura
Procesa un conjunto de colecciones, mostrándolas en intervalos de seis segundos, junto con algunos productos de la coleccion */
export function Collection(){

/* El estado collections recibe la información directaemente de productsInfo, es decir, un array de objetos */

  const [collections, setCollections]=useState(productsInfo)

/* El estado current establece la colección que se muestra, marcada por defecto a 0, es decir, la primera, ya que indica el índice del array */
  const [current, setCurrent]=useState(0)
  
/* blockCurrent es un valor guardado en useRef que indica que deberían dejar de sucederse las colecciones de forma automática */
  let blockCurrent=useRef(false)

  useEffect(()=>{
  
   /* Al renderizarse el componente, se marca un timeout de 6 segundos, a partir de los cuales
   si blockCurrent sigue siendo falso,
   el nuevo current será el siguiente al actual */
   
   setTimeout(()=>{
      let newCurrent=current<(collections.length-1)?current+1:0
        if(!blockCurrent.current){
      setCurrent(newCurrent)}
    }, 6000)
  

  },[current]) 


  /* Con handleStopCurrent se marca como current el index pasado como parámetro y se detiene el flujo automático de colecciones */
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
        <div className=" min-h-400 max-h-400  lg:min-h-0 z-10 lg:h-100 h-auto flex lg:flex-row flex-col items-center justify-center lg:justify-center lg:gap-3 gap-0 ">

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

/* CollectionSlider es un componente utilizado, de momento, solo en la seccion Collections
Se utiliza para crear un carrusel entre los productos de la colección de diferentes categorías  */
export function CollectionSlider({collection}){

    const [productsToShow, setProductsToShow]=useState([])

    const params =useParams()

   

    useEffect(()=>{

        let newProducts=[]
        let position=0

        collection?.products.forEach((product)=>{
            let included=false
            
            newProducts.forEach((p)=>{
                if(p.category==product.category){
                    included=true        
                }
            })

            if (!included){
                newProducts.push({...product, "position":position})
                position++
            }
        })

        if(newProducts.length<3){
            newProducts.push({...newProducts[0], "position":2})
            newProducts.push({...newProducts[1], "position":3})            
        }

       

        setProductsToShow(newProducts)

    },[ collection])

    const handleMoveProduct=function(movement){

        let newProducts;

        if(movement=="left"){
            newProducts=productsToShow.map((p)=>{
                if(p.position==0){
                    p.position=productsToShow.length-1
                }else{
                    p.position=p.position-1
                }

                return p
            })
        }
        if(movement=="right"){
            newProducts=productsToShow.map((p)=>{
                if(p.position==productsToShow.length-1){
                    p.position=0
                }else{
                    p.position=p.position+1
                }

                return p
            })
        }

        setProductsToShow(newProducts)
  
    }

    const givePosition=function(status){
        if(status==0){
            return " left-[-160px] sm:left-[-200px]"
        }else if(status==1){
            return "right-1/2 translate-x-1/2"
        }else if(status==2){
            return "right-[-160px] sm:right-[-200px]"
        }else if(status>2){
            return "right-[-700px]"
        }
    }

    const giveText=function(category){

        if(category=="GRANOS DE CAFÉ"){
            return {"title":"Granos de café",
                "subtitle":collection.granoClaim
            }
        }else if(category=="CAFÉ MOLIDO"){
            return {
                "title":"Tostado y molido",
                "subtitle":collection.molidoClaim
            }
        }else if(category=="CAPSULAS COMPATIBLES"){
            return {
                "title":"Cápsulas compatibles con máquinas",
                "subtitle":collection.capsulaClaim
            }
        }
    }



    return <article className="relative w-full h-auto py-2 ">

       {productsToShow && productsToShow.map((p)=>{
        console.log(p)
            return <>

            <img onClick={()=>{
                if(p.position==0){
                    handleMoveProduct("right")
                }else if(p.position==2){
                    handleMoveProduct("left")
                }
            }} className={`cursor-pointer w-70 sm:w-100  absolute top-[-80px] ${givePosition(p.position)} `} src={p.imgUrl} alt="" />
            
            </>
        })} 

        <div className="w-1/2 text-center   absolute top-[30px]">
            <button onClick={()=>{
                handleMoveProduct("left")
            }} className="px-4 hidden sm:inline z-10 cursor-pointer py-2 rounded-full border-1 border-white text-white text-lg">&lt;</button>
        </div>



        <div className="w-1/2 text-center   absolute right-0 top-[30px]">
            <button onClick={()=>{
                handleMoveProduct("right")
            }} className=" z-10 hidden sm:inline cursor-pointer px-4 py-2 rounded-full border-1 border-white text-white text-lg">&gt;</button>
        </div>
            {productsToShow && productsToShow.map((p)=>{
    
                if(p.position==1){
            return  <div className="w-full flex flex-col text-white justify-center items-center mt-30 sm:mt-60 h-auto">
            <p className=" md:text-4xl text-3xl z-10 font-extrabold mt-18 text-center w-3/4">{giveText(p.category).title}</p>
            <p className=" text-xl z-10 font-bold mt-5 text-center w-3/4">{giveText(p.category).subtitle}</p> 
            <Link to={`/detail/${p.collectionId}/${p.id}`}><button className=" w-2xs font-semibold mt-10   text-white tracking-widest border-1 p-3 cursor-pointer rounded-4xl  text-center">DESCUBRIR MÁS</button></Link>

            </div>
                }
            })}
      
            


    </article>
}

/* CollectionBlocks se utiliza en la sección Collections para distribuir los datos de la colección 
en cuatro secciones temáticas diferentes, 
adaptándose a los diferentes breakpoints */
export function CollectionBlocks({collection}){

    const [positions, setPositions]=useState([
       { "block":{
            "id":1,
            "hidden":false,
            "position":0
        }},
        {"block":{
            "id":2,
            "hidden":true,
            "position":1
        }}
    ])

    const givePosition=function(state){

            if(state==0){
                return "relative translate-x-[0]"
            }else if(state==-1){
                return "translate-x-[-100%] absolute top-0"
            }else if(state==1){
                return "translate-x-[100%] absolute top-0"
            }

    }

    const makeAppear=function(id, state){

        let newPositions;
        if(state=="toHidden"){

            newPositions=positions.map((p)=>{
                if(p.block.id==id){
                    p.hidden=true
                }
                return p
            })

            setPositions(newPositions)       
        }else if(state=="toAppear"){

            newPositions=positions.map((p)=>{
                if(p.block.id==id){
                    p.hidden=false
                }
                return p
            })

            setPositions(newPositions)


        }
           
        }
    

    const handleMovement= function(movement){

        let newPositions;

        if(movement=="left"){
            newPositions=[

                {"block":{...positions[0], "position":-1}},

                {"block":{...positions[0], "position":0}}
            ]   
        }else if(movement=="right"){
            newPositions=[

                {"block":{...positions[0], "position":0}},

                {"block":{...positions[0], "position":1}}
            ]   
        }

        setPositions(newPositions)

    }



    
    return <article className="relative  w-full h-auto">

        <section className=" hidden lg:flex lg:flex-row lg:gap-2 lg:w-full lg:justify-center lg:h-auto ">
            <div className="w-2/5 grid grid-cols-2 gap-0 h-auto ">
                <div className="col-span-1 ">
                    <img className="mb-4 min-h-2/5 rounded-md max-w-4/5 m-auto object-cover" src={collection?.blocks[0].imgUrl} alt="" />
                    <img className="min-h-2/5 rounded-md max-w-4/5 m-auto object-cover" src={collection?.blocks[1].imgUrl} alt="" />
                </div>
                <div className="col-span-1 gap-2 items-end content-end">
                    <img className="mb-4 min-h-2/5 rounded-md max-w-4/5 m-auto object-cover" src={collection?.blocks[2].imgUrl} alt="" />
                    <img  className="min-h-2/5 rounded-md max-w-4/5 m-auto object-cover" src={collection?.blocks[3].imgUrl} alt="" />
                </div>
            </div>
            <div className="flex flex-wrap pl-10 h-auto w-3/5 gap-4">
            <div className="w-full text-white ">
                <p className="font-[Corinthia] text-6xl ">{collection.name}</p>
                <p className="font-extrabold text-6xl ">{collection.claim}</p>

            </div>

            <div className="flex w-full flex-wrap gap-4 ">

                {collection && collection?.blocks.map((block)=>{
                    return <div className="w-full max-w-3/8 text-white">
                        <p className=" font-bold mb-1 text-sm tracking-widest">{block.title}</p>
                        <p className="text-sm font-thin tracking-wide ">{block.description}</p>



                    </div>
                })}

            </div>

            </div>



        </section>

                <p className=" lg:hidden  w-8/10 m-auto font-[Corinthia] text-white text-3xl ">{collection.name}</p>
                <p className="lg:hidden w-8/10 m-auto  text-white font-extrabold mb-10 text-xl ">{collection.claim}</p>

            <div className=" hidden md:grid md:grid-cols-2 md:w-8/10 md:m-auto md:h-auto lg:hidden ">
            
                    <div className="col-span-1 h-auto  ">
                        {collection?.blocks.slice(0,2).map((block)=>{
                            return <div className="flex flex-row gap-5  flex-nowrap w-full mb-8">
                                <img className="w-20 h-30 rounded-md object-cover" src={block.imgUrl} alt="" />
                                <div className="w-4/7 text-white">
                                    <p className="text-sm font-extrabold mb-3 tracking-widest">{block.title}</p>
                                    <p className="text-sm font-thin tracking-wide">{block.description}</p>
                                </div>


                            </div>
                        })}
                    </div>
                    <div className="col-span-1 h-auto  ">
                        {collection?.blocks.slice(2,4).map((block)=>{
                            return <div className="flex flex-row gap-5 flex-nowrap w-full mb-8">
                                <img className="w-20 h-30 rounded-md object-cover" src={block.imgUrl} alt="" />
                                <div className="w-4/7 text-white">
                                    <p className="text-sm font-extrabold mb-3 tracking-widest">{block.title}</p>
                                    <p className="text-sm font-thin tracking-wide">{block.description}</p>
                                </div>


                            </div>
                        })}
                    </div>

            </div>

            <div className="relative w-full h-auto md:hidden ">
                    
                    <div className={`transition-transform ${givePosition(positions[0].block.position)} duration-500 ease-in-out text-white w-full top-0 flex gap-5 flex-row flex-wrap`}>
                        

                         <div className="flex p-6 px-15 w-full gap-4">

                                <img className="w-20 h-25 rounded-md object-cover" src={collection?.blocks[2].imgUrl} alt="" />
                                <div className="w-4/5">
                                      <p className="text-sm font-extrabold mb-3 tracking-widest">{collection?.blocks[2].title}</p>
                                    <p className="text-sm font-thin tracking-wide">{collection?.blocks[2].description}</p>
                                </div>

                            </div>

                         <div className="flex p-6 px-15 w-full gap-4">

                                <div className="w-4/5">
                                      <p className="text-sm font-extrabold mb-3 tracking-widest">{collection?.blocks[3].title}</p>
                                    <p className="text-sm font-thin tracking-wide">{collection?.blocks[3].description}</p>
                                </div>
                                <img className="w-20 h-25 rounded-md object-cover" src={collection?.blocks[3].imgUrl} alt="" />

                            </div>
                        

                    </div>
                    <div className={` text-white w-full ${givePosition(positions[1].block.position)} transition-transform ease-in-out duration-500  gap-5 flex-row flex-wrap`}>
                        

                         <div className="flex p-6 px-15 w-full gap-4">

                                <img className="w-20 h-25 rounded-md object-cover" src={collection?.blocks[0].imgUrl} alt="" />
                                <div className="w-4/5">
                                      <p className="text-sm font-extrabold mb-3 tracking-widest">{collection?.blocks[0].title}</p>
                                    <p className="text-sm font-thin tracking-wide">{collection?.blocks[0].description}</p>
                                </div>

                            </div>

                         <div className="flex p-6 px-15 w-full gap-4">

                                <div className="w-4/5">
                                      <p className="text-sm font-extrabold mb-3 tracking-widest">{collection?.blocks[1].title}</p>
                                    <p className="text-sm font-thin tracking-wide">{collection?.blocks[1].description}</p>
                                </div>
                                <img className="w-20 h-25 rounded-md object-cover" src={collection?.blocks[1].imgUrl} alt="" />

                            </div>
                        

                    </div>

                    <div className="flex w-full justify-center gap-10">

                        <button onClick={()=>{

                            handleMovement("right")
                        }}><i className={`fa-solid fa-circle text-xs cursor-pointer ${positions[0].block.position==0?"text-blue-950":"text-blue-200"} `}></i></button>

                      
                        <button onClick={()=>{

                            handleMovement("left")
                        }}><i className={`fa-solid fa-circle text-xs cursor-pointer ${positions[1].block.position==0?"text-blue-950":"text-blue-200"} `}></i></button>
                    </div>

                    


            </div>



    </article>
}

/* Un componente fácilmente reutilizable que se utiliza como cierre de las secciones Collection y Detail
Recoge una introducción sobre la responsabilidad social-corporativa de la empresa e incluye un CTA a la sección Environement
Al igual que Footer, es estática y no recibe parámetros */
export function Sustainability(){

    return <>
     <section className={`w-full mb-20 h-110 flex flex-row gap-5 bg-stone-500 bg-blend-multiply bg-size-[1600px] bg-center bg-no-repeat  bg-[url(./assets/backgrounds/grass.jpg)]`}>

    {/* Contenedor que ocupa la anchura total disponible y que recoge información general sobre ESG */}
        <div className="w-8/10 lg:w-1/2 pl-5  text-white flex flex-col lg:pt-0 pt-10 justify-start lg:justify-center items-start">
        <h1 className="font-extrabold text-2xl md:text-5xl mb-8 tracking-wide">Hola, Terrana</h1>
        <p className="md:font-semibold text-md lg:text-xl mb-4">La sostenibilidad no es solo un valor, es la forma en que cultivamos cada paso.</p>
        <p className="md:font-semibold text-sm lg:text-xl mb-4">Gracias a la colaboración con quienes creen en este viaje, hemos creado un ciclo vivo en el que innovación, calidad y respeto por la tierra se encuentran y se fortalecen mutuamente.
</p>
        <p className="md:font-semibold text-sm lg:text-xl mb-4">Súmate y descubre el placer de un café que cuida tanto como inspira.
</p>
        </div>

    {/*A partir del breakpoint lg se muestran dos divs organizados en flex, cada uno contiene una columna
    Se definen como absolutos para posicionarse fuera de los márgenes del div padre  */}

        <div className="hidden relative  w-1/5  lg:flex lg:flex-col">
        <div className="absolute -bottom-10">
        <div className={`w-full h-50 bg-size-[340px] rounded-t-4xl bg-center bg-no-repeat bg-[url(./assets/backgrounds/nature1.jpg)]`}></div>
        <div className="bg-white min-h-50 shadow-sm shadow-stone-900 pt-5 pl-3 pb-5 pr-2 flex flex-col justify-center rounded-b-4xl text-blue-950 w-full">
            <p className="font-[Corinthia] text-4xl mb-4 font-extrabold">Sostenibilidad</p>
            <p className="text-xl mb-5 font-extrabold">Descubrir la sostenibilidad</p>
           <Link to="/esg"> <p className="text-sm  cursor-pointer tracking-widest font-bold">MÁS INFORMACIÓN &gt;</p></Link>
        </div>
        </div>
        </div>
        <div className="hidden w-1/5 relative lg:flex lg:flex-col">
                <div className="absolute -top-10">

        <div className="bg-white rounded-4xl shadow-sm shadow-stone-900 min-h-100 pt-5 pl-3 pb-5 pr-2 flex flex-col justify-center rounded-b-4xl text-blue-950 w-full">
            <p className="font-[Corinthia] text-4xl mb-4 font-extrabold">Productos</p>
            <p className="text-xl mb-5 font-extrabold">Nuestras certificaciones</p>
            <p className="text-sm  font-semibold">  Tómate un respiro con una taza de café Terrana. Ya sea en cápsulas, en grano o molido, lo importante es disfrutar del primer sorbo del día con conciencia y sostenibilidad, honrando cada origen y cada historia que nos une a la tierra.
</p>

        </div>
         </div>
        </div>

     </section>


  {/* Por debajo del breakpoint lg, los bloques se reestructuran en el componente Slider2, explicado en Utilities.jsx */}  
    
    <div className="lg:hidden mb-15 mt-[-65px]  sm:mt-[-160px] w-full flex z-30 relative justify-center  h-110">
            <Slider2 blocks={
                {"content":[<div>
                                <div className={`w-full h-50 bg-size-[340px] rounded-t-4xl bg-center bg-no-repeat bg-[url(./assets/backgrounds/nature1.jpg)]`}></div>
                                <div className="bg-white min-h-50 shadow-sm shadow-stone-900 pt-5 pl-3 pb-5 pr-2 flex flex-col justify-center rounded-b-4xl text-blue-950 w-full">
                                    <p className="font-[Corinthia] text-4xl mb-4 font-extrabold">Sostenibilidad</p>
                                    <p className="text-xl mb-5 font-extrabold">Descubrir la sostenibilidad</p>
                                    <Link to="/esg"><p className="text-sm tracking-widest font-bold">MÁS INFORMACIÓN &gt;</p></Link>
                                </div>
                                </div>,
                                <div className="bg-white rounded-4xl shadow-sm shadow-stone-900 min-h-100 pt-5 pl-3 pb-5 pr-2 flex flex-col justify-center rounded-b-4xl text-blue-950 w-full">
            <p className="font-[Corinthia] text-4xl mb-4 font-extrabold">Productos</p>
            <p className="text-xl mb-5 font-extrabold">Nuestras certificaciones</p>
            <p className="text-sm  font-semibold">Toma una taza de café y disfruta de la Experiencia Lavazza. Tanto si prefieres las cápsulas A Modo Mio como los granos enteros o molidos Qualità Rossa, lo importante es vivir de manera sostenible, incluso mientras saboreas el primer café del día.</p>

        </div>
                                
                            ],
                "widthLeft":"w-50",
                "widthCenter":"w-75",
                "widthLRight":"w-50",
                "heightLeft":"h-30",
                "heightCenter":"h-30",
                "heightRight":"h-30",
                


                }
            }>

            </Slider2>
        </div>

        </>
}

/* Menu es un componente que muestra el menú principal, con los enlaces correspondientes a productos y colecciones,
o el menú de historias, con los artículos de la empresa.
Para decidir que menú mostrar, recibe varios parámetros:
-menuActive: estado que determina si se muestra el menú principal, y se controla a través de handleMenuActive, que admite un parámetro booleano
-storiesActive: estado que determina si se muestra el menú de historias, y se controla a través de handleStoriesActive, que admite un parámetro booleano */
export function Menu({handleMenuActive, handleStoriesActive, storiesActive, menuActive}){

    /* El estado positions contiene un array de objetos con cada sección a mostrar en la versión reducida del menú
    Al principio, solo el bloque general se muestra en el centro, 
    y gracias a una lógica que continúa en varias funciones, los bloques se mueven en función del botón pulsado */
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

    /* moveBlock recibe una dirección y el nombre de un bloque, y cambia la posición del respectivo bloque */
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

    /* givePositions recibe la posición de los objetos de positions (left, center o right)
    y otorga una clase en función de este parámetro */
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

        {/* Si menuActive está activo, se muestra el menú principal, con los enlaces a los diferentes tipos de café
        El menú principal presenta un fondo azul semiopaco, de forma que se puede entrever el punto de la web en el que hemos activado el menú */}
 { menuActive && <div className="fixed py-5 px-5  top-20 h-120 w-full bg-blue-950 opacity-97 z-[30]">
              <div className={`flex fixed text-white bg-blue-950 transition-colors ease-in flex-nowrap w-full items-center h-20 z-[30] top-0 pt-5 left-0`}>
              
                           <div className={`left-5  absolute h-auto`}>
                          <Link to="/"><img className=" w-30 h-12 object-cover relative cursor-pointer sm:min-w-50 sm:max-w-50  z-30  " src={terranaWhite} alt="" /></Link>
                            <p className={`mt-1 text-[7px] text-white text-center font-bold sm:text-xs`}>VIGO. SPAGNA. 2001</p>

                          </div>
                      
                      {/* Dentro del menú se despliega un navegador alternativo al navegador principal, superpuesto a este */}
                        <nav className="hidden  text-sm font-bold  lg:flex gap-8 tracking-widest  md:flex-none absolute left-0 right-0 justify-center z-11">
                          <a onClick={
                            (e)=>{e.preventDefault()
                            handleMenuActive(false)
                        }
                            }  className={` hover:underline underline-offset-8 decoration-white z-20`}>PRODUCTOS</a>
                          <a onClick={
                            (e)=>{e.preventDefault()
                                handleMenuActive(false)
                            handleStoriesActive(true)
                        }
                            } href=""className={` hover:underline underline-offset-8 decoration-white z-20`}>TERRANA STORIES</a>
                          <a onClick={(e)=>{
                            e.preventDefault()
                          }} href=""className={` hover:underline underline-offset-8 decoration-white z-20`}><Link to="/esg">SOSTENIBILIDAD</Link></a>
                          <a onClick={(e)=>{
                            e.preventDefault()
                          }} href=""className={` hover:underline underline-offset-8 decoration-white z-20`}><Link to="/contact">CONTACTO</Link></a>
                        </nav>
                        <Link to="/cart"><i className={`fa-solid fa-cart-shopping flex-none  text-center text-2xl text-stone-50 absolute right-40 top-10 lg:right-5  z-10`}></i></Link>
                        <i className={`fa-solid fa-bars-staggered flex text-stone-50 absolute right-12 lg:!hidden`}></i>
                      </div>
              

{/* A través del icono de la cruz podemos esconder de nuevo el menú */}
                <div className="flex h-15 justify-end">
                    <i class="fa-solid fa-xmark text-white cursor-pointer text-5xl" onClick={()=>{
                    handleMenuActive(false)
                }}></i>

                </div>

    {/* Los diferentes apartados del menú se reparten en tres columnas en grid */}
               <div className="hidden lg:grid lg:grid-cols-3 lg:w-3/4 lg:gap-1">
                <div className="col-span-1 w-3/4 text-white pl-3  pt-5 bg-stone-400  rounded-sm">

                        <p className="text-sm mb-5 font-extrabold tracking-widest">COLLECTIONS</p>
                        <p className="text-sm mb-5 font-bold tracking-widest "><Link to="/collections/1">Atlántica</Link></p>
                        <p className="text-sm mb-5 font-bold tracking-widest "><Link to="/collections/2">Mediterránea</Link></p>
                        <p className="text-sm mb-5 font-bold tracking-widest "><Link to="/collections/3">Arcana</Link></p>
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

{/* El menú reducido permanece escondido hasta que se rebaja el breakpoint lg */}
               <div className="lg:hidden flex overflow-hidden  w-full">
{/* Se despliegan en flex los diferentes apartados, y a través de givePosition y moveBlocks se indican que bloques deben desplegarse
Gracias a las transiciones en las transformaciones, el movimiento entre bloques se realiza de forma lenta y suave
Este menú reduciodo y su lógica se replican también en el menú de historias */}
                <div className="relative w-full h-85 overflow-y-scroll  overflow-x-hidden">
                    <div className={`absolute ${givePosition(positions[0].position)} top-0 left-0 transition-transform duration-500 ease-in-out py-5 px-5 flex flex-col gap-6 text-2xl border-b-2 w-full border-white justify-center items-center text-white font-extrabold `}>
                        <p className="w-full cursor-pointer tracking-wide " onClick={()=>{
                            moveBlock("left","general")
                            moveBlock("left","products")
                        }}>PRODUCTOS</p>
                        <p className="w-full cursor-pointer tracking-wide " onClick={()=>{
                            moveBlock("left","stories")
                            moveBlock("left","general")
                        }}>TERRANA STORIES</p>
                       <p className="w-full tracking-wide cursor-pointer "><Link to="/esg">SOSTENIBILIDAD</Link></p>
                        <p className="w-full tracking-wide cursor-pointer "><Link to="/contact">CONTACTO</Link></p>
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
                            moveBlock("left","collections")
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
                        <p className="w-full text-sm tracking-wide "><Link to="/collections/1">Atlántica</Link></p>
                        <p className="w-full text-sm tracking-wide "><Link to="/collections/2">Mediterránea</Link></p>
                        <p className="w-full text-sm tracking-wide "><Link to="/collections/3">Arcana</Link></p>
                    </div>
                    <div className={`absolute ${givePosition(positions[5].position)} top-0 left-0 transition-transform duration-500 ease-in-out py-5 px-5 flex flex-col gap-5 text-2xl  w-full border-white justify-center items-center text-white font-extrabold `}>
                        <p className="w-full cursor-pointer text-sm tracking-wide " onClick={()=>{
                            moveBlock("right","stories")
                            moveBlock("right","general")
                        }}>&lt;  BACK</p>
                        <p className="w-full text-[30px] mb-8  font-extrabold tracking-wide ">TERRANA STORIES</p>
                        <p className="w-full text-sm pl-3 mb-4 tracking-wide "><Link to="/esg">Raíces Responsables: Sostenibilidad</Link></p>
                        <p className="w-full text-sm pl-3 mb-4 tracking-wide "><Link to="/recetas">Café a tu modo</Link></p>
                        <p className="w-full text-sm pl-3 mb-4 tracking-wide "><Link to="/chefs">Bon appetit</Link></p>
                        <p className="w-full text-sm pl-3 mb-4 tracking-wide "><Link to="esg/1">Álbum Lavazza</Link></p>
                    </div>

                </div>





               </div>
              
                
                
            </div>}

{/* El menú de historias solo se despliega si storiesActive es verdadero,
su estructura es similar a la del menú principal,
y al sobrepasar el breakpoint lg muestra el mismo menú reducido.
Al hacer click es el menú de historias, se oculta el menú principal, y viceversa */}
    {storiesActive && <div className="fixed py-5 px-5  top-20 h-120 w-full bg-blue-950 opacity-97 z-[30]">
              <div className={`flex fixed text-white bg-blue-950 transition-colors ease-in flex-nowrap w-full items-center h-20 z-[30] top-0 pt-5 left-0 `}>
              
                           <div className={`left-5  absolute h-auto`}>
                          <Link to="/"><img className=" w-30 h-12 object-cover relative cursor-pointer sm:min-w-50 sm:max-w-50  z-30  " src={terranaWhite} alt="" /></Link>
                            <p className={`mt-1 text-[7px] text-white text-center font-bold sm:text-xs`}>VIGO. SPAGNA. 2001</p>

                          </div>
                      
                        <nav className="hidden  text-sm font-bold  lg:flex gap-8 tracking-widest  md:flex-none absolute left-0 right-0 justify-center z-11">
                          <a onClick={(e)=>{
                            e.preventDefault()
                            handleStoriesActive(false)
                            handleMenuActive(true)
                          }} href="" className={` hover:underline underline-offset-8 decoration-white z-20`}>PRODUCTOS</a>
                          <a onClick={(e)=>{
                            e.preventDefault()
                            handleMenuActive(false)
                            handleStoriesActive(false)
                          }} href=""className={` hover:underline underline-offset-8 decoration-white z-20`}>TERRANA STORIES</a>
                          <a onClick={(e)=>{
                            e.preventDefault()
                          }} href=""className={` hover:underline underline-offset-8 decoration-white z-20`}><Link to="/esg">SOSTENIBILIDAD</Link></a>
                          <a onClick={(e)=>{
                            e.preventDefault()
                          }} href=""className={` hover:underline underline-offset-8 decoration-white z-20`}><Link to="/contact">CONTACTO</Link></a>
                        </nav>
                        <Link to="/cart"><i className={`fa-solid fa-cart-shopping flex-none top-10 text-center text-2xl text-stone-50 absolute right-40 lg:right-5  z-10`}></i></Link>
                        <i className={`fa-solid fa-bars-staggered flex text-stone-50 absolute cursor-pointer right-12 lg:!hidden`}></i>
                      </div>
              


                <div className="flex h-15 justify-end">
                    <i class="fa-solid fa-xmark text-white cursor-pointer text-5xl" onClick={()=>{
                    handleMenuActive(false)
                    handleStoriesActive(false)
                }}></i>

                </div>

                <div className=" hidden lg:flex gap-10 ">

                <div className=" w-1/3 rounded-xl bg-stone-400 opacity-80 text-blue-950 text-lg  p-10">
                    <h2 className="font-bold cursor-pointer mb-10 tracking-wide"><Link to="/esg">RAÍCES RESPONSABLES</Link></h2>
                    <h2 className="font-bold cursor-pointer mb-10 tracking-wide"><Link to="/chefs">BON APPETIT</Link></h2>
                    <h2 className="font-bold cursor-pointer mb-10 tracking-wide"><Link to="/recetas"> CAFÉ A TU MODO</Link></h2>
                    <h2 className="font-bold cursor-pointer mb-10 tracking-wide"><Link to="/esg/1">ÁLBUM 2025</Link></h2>

                </div>

                <div className="w-3/5  gap-5 flex flex-wrap  justify-center items-center">

                    <div className="w-60 h-40 text-white p-5 rounded-md flex flex-col gap-5 justify-end items-end bg-stone-500 bg-blend-multiply bg-[url(./assets/backgrounds/nature1.jpg)] bg-size-[500px] bg-center">
                    <h3 className="font-[Corinthia] text-3xl font-bold ">Raíces Responsables</h3>
                    <h3 className="font-extrabold text-sm tracking-widest hover:underline cursor-pointer"><Link to="/esg">DESCUBRE MÁS</Link></h3>
                    </div>
                    <div className="w-60 h-40 text-white p-5 rounded-md flex flex-col gap-5 justify-end items-end bg-stone-500 bg-blend-multiply bg-[url(./assets/chefs/chefs.jpg)] bg-size-[500px] bg-center">
                    <h3 className="font-[Corinthia] text-3xl font-bold ">Bon appetit</h3>
                    <h3 className="font-extrabold text-sm tracking-widest hover:underline cursor-pointer"><Link to="/chefs">DESCUBRE MÁS</Link></h3>
                    </div>
                    <div className="w-60 h-40 text-white p-5 rounded-md flex flex-col gap-5 justify-end items-end bg-stone-500 bg-blend-multiply bg-[url(./assets/backgrounds/coffee-maker.jpg)] bg-size-[500px] bg-center">
                    <h3 className="font-[Corinthia] text-3xl font-bold ">A tu modo</h3>
                    <h3 className="font-extrabold text-sm tracking-widest hover:underline cursor-pointer"><Link to="/recetas">DESCUBRE MÁS</Link></h3>
                    </div>
                    <div className="w-60 h-40 text-white p-5 rounded-md flex flex-col gap-5 justify-end items-end bg-stone-500 bg-blend-multiply bg-[url(./assets/esg/album.jpg)] bg-size-[500px] bg-center">
                    <h3 className="font-[Corinthia] text-3xl font-bold ">Álbum 2025</h3>
                    <h3 className="font-extrabold text-sm tracking-widest hover:underline cursor-pointer"><Link to="/esg/1">DESCUBRE MÁS</Link></h3>
                    </div>


                </div >
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
                        }}>TERRANA STORIES</p>
                        <p className="w-full tracking-wide cursor-pointer "><Link to="/esg">SOSTENIBILIDAD</Link></p>
                        <p className="w-full tracking-wide cursor-pointer "><Link to="/contact">DESCUBRE MÁS</Link></p>
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
                        <p className="w-full text-sm tracking-wide "><Link to="/collections/1">Qualità Oro</Link></p>
                        <p className="w-full text-sm tracking-wide "><Link to="/collections/2">Espresso</Link></p>
                        <p className="w-full text-sm tracking-wide "><Link to="/collections/3">Tierra</Link></p>
                    </div>
                    <div className={`absolute ${givePosition(positions[5].position)} top-0 left-0 transition-transform duration-500 ease-in-out py-5 px-5 flex flex-col gap-5 text-2xl  w-full border-white justify-center items-center text-white font-extrabold `}>
                        <p className="w-full cursor-pointer text-sm tracking-wide " onClick={()=>{
                            moveBlock("right","stories")
                            moveBlock("right","general")
                        }}>&lt;  BACK</p>
                        <p className="w-full text-[30px] mb-8  font-extrabold tracking-wide ">TERRANA STORIES</p>
                        <p className="w-full text-sm pl-3 mb-4 tracking-wide "><Link to="/esg">Raíces Responsables: Sostenibilidad</Link></p>
                        <p className="w-full text-sm pl-3 mb-4 tracking-wide "><Link to="/recetas">Café a tu modo</Link></p>
                        <p className="w-full text-sm pl-3 mb-4 tracking-wide "><Link to="/chefs">Bon appetit</Link></p>
                        <p className="w-full text-sm pl-3 mb-4 tracking-wide ">Álbum Lavazza</p>
                    </div>

                </div>





               </div>
               
          
            </div>}

    </section>
 }

 /* El componente Questions ofrece un componente de preguntas que muestran las respuestas al hacer click sobre las preguntas
 Solo se muestra una respuesta cada vez */
export function Questions(){

    /* El estado questions recoge las preguntas a desplegar en el layout, así como su respuest y la visibilidad de las mismas a través de la clave hidden */
    const [questions, setQuestions]=useState([
  {
    "question": "¿Qué hace Terrana por la sostenibilidad?",
    "answer": "Nuestra visión de sostenibilidad se resume en el manifiesto “Cada taza, un legado”, un compromiso vivo con la tierra y las comunidades que cultivan nuestro café. Apostamos por prácticas agrícolas responsables, envases reciclables y proyectos que conectan tradición y futuro, para que el café siga siendo parte esencial de nuestra cultura.",
    "hidden": true
  },
  {
    "question": "¿Cómo puedes trabajar con nosotros en Terrana?",
    "answer": "Queremos crecer junto a personas apasionadas por el café, la cultura y la innovación. Consulta nuestras vacantes abiertas en este enlace y descubre cómo formar parte de la experiencia Terrana.",
    "hidden": true
  },
  {
    "question": "¿Qué es el Terrana Atelier y cómo funciona?",
    "answer": "El Terrana Atelier es nuestro espacio de formación y exploración, dedicado a profesionales y amantes del café que desean aprender sobre tueste, cata y nuevas formas de disfrutarlo. Actualmente, está dirigido principalmente a colaboradores del sector, aunque pronto abriremos experiencias para consumidores que quieran adentrarse en el universo Terrana.",
    "hidden": true
  },
  {
    "question": "¿Quieres ser proveedor de Terrana?",
    "answer": "Si compartes nuestra visión de calidad, sostenibilidad y respeto por la tierra, descubre en este enlace cómo unirte a nuestra red de proveedores.",
    "hidden": true
  },
  {
    "question": "¿Qué es la Fundación Terrana?",
    "answer": "La Fundación Terrana nace para apoyar a las comunidades cafetaleras y preservar la riqueza natural que hace posible cada taza. Promovemos formación agrícola sostenible, proyectos culturales y acciones que fortalezcan el vínculo entre café, personas y territorio. Conoce más sobre nuestra misión en el apartado dedicado de nuestra web.",
    "hidden": true
  },
  {
    "question": "Tengo una solicitud comercial: ¿cómo puedo ponerme en contacto con vosotros?",
    "answer": "Haznos llegar tu propuesta a través de este enlace. Estaremos encantados de escucharte.",
    "hidden": true
  }
]
)

/* La función toggleVisibility recibe como parámetro un número,
si coincide con el index del array de preguntas, modifica el objeto questions
y devuelve un nuevo objeto con la respuesta pasada como parámetro con el index con visibilidad, mientras que oculta el resto */
    const toggleVisibility=function(i){

        let newQuestions=questions.map((q, index)=>{
            if(index==i){
                console.log("exactly")
                return {...q, "hidden":!q.hidden}
            }else{return {...q, "hidden":true}}
        })

        setQuestions(newQuestions)

    }


     return <section className="w-full flex mb-10 flex-col gap-3 text-blue-950 items-center">

{/* Se realiza un map del array de questions para devolver cada pregunta,
organizadas dentro de una columan en flex */}
                {questions.map((q, index)=>{
                    return <div className="w-9/10 bg-stone-50 p-3 flex flex-col ">

                <div className=" flex  justify-between">

                    <p className="text-lg font-bold w-9/10 tracking-wide">{q.question}</p>
                    {/* Cada pregunta cuenta con un icono de flecha para mostrar la respuesta a través de toggleVisibility,
                    pasando como parámetro el index de la pregunta */}
                    <i onClick={()=>{
                        toggleVisibility(index)
                    }} className={`cursor-pointer fa-solid fa-caret-${q.hidden?"down":"up"} `}></i>

                </div>

                        {/* Si el valor hidden del objeto es falso, se mostrará la respuesta, si no recibirá la clase hidden de tailwind */}
                <div className={`mt-5 px-5 font-normal text-sm ${q.hidden?"hidden":""}`}>
                    <p><i>{q.answer}</i></p>

                </div>
                
                </div>
                })}


            </section>
}