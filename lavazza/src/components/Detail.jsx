import { useState, useEffect, useRef, useContext } from 'react'
import {useNavigator} from '../custom-hooks/useNavigator.js'
import {useParams, Link} from 'react-router-dom'


import backgroundCoffee1 from '../assets/home_img/background-coffee-1.jpg'
import backgroundCoffee2 from '../assets/home_img/background-coffee-2.jpg'
import backgroundCoffee3 from '../assets/home_img/background-coffee-3.jpg'
import coffeeProduct1 from '../assets/home_img/coffee-product-1.png'
import splash from '../assets/collections/splash.png'
import woman from '../assets/collections/woman-drinking.jpg'
import licor from '../assets/collections/licor.jpg'
import tonic from '../assets/collections/tonic.jpg'
import affogato from '../assets/collections/affogato.jpg'
import map from '../assets/products/world-map.png'
const grain= "../assets/products/grain.jpeg"
const leaves= "../assets/products/leaves.jpeg"
const waves= "../assets/products/waves.jpg"
const cream= "../assets/products/cream.avif"

import {Footer, Menu, Navigator, Slider, Slider2, Sustainability} from './Utilities.jsx'


import { productsInfo } from '../data/products-info.js'

import { ProductsContext } from './App.jsx'




export function Detail(){

    let params=useParams()

    const useCart=useContext(ProductsContext)

    const {cart, addToCart}=useCart()

    /* El estado product contiene el producto del que se mostrará la información
    Es un objeto que se obtiene dentro del array products que contiene cada collecion en el array procedente de ProductsInfo */
    const[product, setProduct]=useState()

    

    /* A través del estado positions se controla la posicion que adoptarán los bloques de apertura del componente por debajo del breakpoint lg
    Cada objeto se corresponde con uoo de los bloques a mover */
     const [positions, setPositions]=useState([
        {
            "object":"general",
            "position":1
        },
        {
            "object":"description",
            "position":2
        }
     ])

     /* El estado sections recoge las diferentes secciones de información que ofrece el componente, y que se muestran una a una, nunca todas a la vez
     El valor de cada clave indica si el apartado está señalado o no (por defecto, se mostrará el apartado de perfil) */

    const [sections, setSections]=useState(
        {
            "perfil":true,
            "info":false,
            "blend":false,
            "preparados":false

        }
    )

    /* 
El hook personalizado nos ofrece estados y handlers:
- scrolled: Si el usuario ha hecho scroll en la web, para cambiar el color del navegador
- menuActive: Estado del menú principal que se despliega del navegador
- handleMenuActive: Activar o desactivar el menú del navegador
- storiesActive: Estado del menú de historias que se despliega del navegador
- handleStoriesActive: Activar o desactivar el menú de historias del navegador
*/

    const {scrolled, menuActive, handleMenuActive, storiesActive, handleStoriesActive}=useNavigator()

    useEffect(()=>{

        /* Se utilizan variables temporales para obtener, por una parte, la colección indicada por los parámetros y, tras eso, para obtener el producto dentro de la colección */

        let collection=productsInfo.filter((p)=>{
            return p.collection.id==params.collection
        })
        
        

        let product=collection[0]?.collection.products.filter((pr)=>{
            return pr.id==params.product
        })
        


        setProduct(product[0])

        

    },[])

    /* Según que sección esté activa según el estado sections, se dará un fondo u otro con la función giveBackground */

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

    /* Para cambiar de sección, se utilizará la función handleSection, que admite como parámetro el nombre de la sección que se mostrará */
    
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
    


    /* Para determinar la posición de los bloques de apertura, se pasa como parámetro un estado que define la posición que adoptará el contenedor
    0 para oculto en izquierda, 2 para oculto en derecha, 1 para posición central */
       

        const givePosition=function(state){
            if(state==0){
                return "absolute translate-x-[-150%]"
            }else if(state==1){
                return "relative"
            }else if(state==2){
                return "absolute translate-x-[150%]"
            }
        }

        /* Con la función moveBlocks se define la dirección en la que se moverán los bloques de apertura al pulsar los respectivos botones de movimiento
        Admite los parámetros toLeft o toRight, y los bloques se desplazan de forma correspondiente */
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
<Navigator transparent={true} scrolled={scrolled} handleMenu={handleMenuActive} handleStories={handleStoriesActive}>

            </Navigator>

            {/* A partir del breakpoint lg, el layout es sencillo, a travñes de dos contenedores en flex que muestran, por una parte, la imagen del producto, y por otra la información relativa a la intensidad, el nombre, la descripción, etc. */}                
        <div className="hidden  lg:flex lg:h-200 lg:w-full z-0 absolute top-0 bg-stone-500 bg-blend-multiply bg-[url(./assets/home_img/background-coffee-1.jpg)] bg-size-[1070px] sm:bg-size-[1100px] md:bg-size-[1370px] bg-no-repeat bg-center" >
           </div>

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

            <button onClick={()=>{
                addToCart(product)
            }} className={` ${
                cart.some((c)=>{
                    return c.product.id==product?.id
                })?"bg-green-500 hover:bg-stone-400 hover:text-white cursor-not-allowed":" cursor-pointer"
            }  w-full p-4 mt-10 text-md tracking-widest font-bold text-center rounded-3xl border-1 border-white`}>COMPRA ONLINE</button>
         
         </div>


{/* Por debajo del breakpoint lg, se muestra un contenedor que organiza sus contenedores en una columna centrada  */}
         <div className="lg:hidden flex flex-col justify-center pb-10 items-center">

            {/* El siguiente div contiene los contenedores de imagen y de descripción, que nunca se muestran a la vez
            A través del button se mueven a izquierda o a derecha, y reciben los datos de su posición por la función givePosition */}
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

            <button  onClick={()=>{
                addToCart(product)
            }} className={` ${
                cart.some((c)=>{
                    return c.product.id==product?.id
                })?"bg-green-500 hover:bg-stone-400 hover:text-white cursor-not-allowed":" cursor-pointer"
            } w-9/10 px-4 py-2 mt-10 m-auto text-md tracking-widest font-bold text-center rounded-4xl border-1 border-white`}>COMPRA ONLINE</button>
        </div>


         </div>

{/* El siguiente contenedor presenta dos contenedores distintos: la imagen del producto con los seleccionadores de apartado, y el apartado seleccionado */}
         <div className="w-full z-10  pb-30 lg:pb-40 relative rounded-b-[200px] bg-white  h-auto lg:pt-20 pt-10 flex lg:flex-row flex-col justify-center items-center gap-10 lg:gap-1 ">
                    
                    {/* El div con la imagen ocupa la mitad del espacio a partir del breakpoint lg, pero 4/5 por debajo del mismo 
                    Se trata de un contenedor circular con cuatro iconos, posicionados de forma absoluta en relación a él, y que, al hacer click sobre ellos, determinan el apartado que se mostrará en el otro contenedor y que se indica en el estado sections*/}
                    
                    <div className="w-8/10 lg:w-1/2 pr-15 flex justify-center ">
                    
                    <div className=" w-80 lg:w-100 rounded-full bg-stone-100 relative flex items-center h-80 lg:h-100" >
                        <div className={`w-5/7 border-8 flex justify-center items-center border-white shadow-stone-500 shadow-lg h-5/7 m-auto rounded-full ${giveBackground()}`}>

                        {/* Todos los datos relativos al product se obtienen del estado producto */}
                        <img  className="w-24/5" src={product?.imgUrl} alt="" />

                                <div  onClick={()=>{
                                        handleSection("perfil")
                                    }} className={` ${sections.perfil?"bg-green-400":""} cursor-pointer absolute w-13 h-13 lg:w-15 lg:h-15 rounded-full flex justify-center items-center border-5 border-stone-300 top-0 right-12 lg:top-3 lg:right-12`}>
                                    <i class={`${sections.perfil?"text-white":""} fa-solid fa-box text-2xl top-0 right-12 lg:top-3 lg:right-12`}></i>
                                </div>
                                    <p className=" hidden md:inline-block absolute md:w-1/10 text-xs top-0 right-[-10px] lg:top-6 lg:right-[-5px] ">PERFIL Y TUESTE</p>
                                <div  onClick={()=>{
                                        handleSection("blend")
                                    }} className={`absolute w-13 h-13 lg:w-15 lg:h-15 rounded-full cursor-pointer ${sections.blend?"bg-green-400":""} flex justify-center items-center border-5 border-stone-300 top-24 right-[-11px]`}>
                                    <i  class={`${sections.blend?"text-white":""} fa-solid fa-globe text-2xl`}></i>
                                </div>
                                     <p className="hidden md:inline-block absolute w-1/10 text-xs top-28 right-[-58px] lg:top-30 lg:right-[-68px] ">BLEND</p>

                                <div  onClick={()=>{
                                        handleSection("info")
                                    }} className={`${sections.info?"bg-green-400":""} cursor-pointer absolute w-13 h-13 lg:w-15 lg:h-15 rounded-full flex justify-center items-center border-5 border-stone-300 top-48 right-[-11px] lg:top-60 lg:right-[-17px]`}>
                                    <i class={`${sections.info?"text-white":""} fa-solid fa-info text-2xl`}></i>
                                </div>
                                   <p className="hidden md:inline-block absolute w-1/10 text-xs top-48 right-[-58px] lg:top-62 lg:right-[-72px] ">INFORMACIÓN DEL PRODUCTO</p>
                              <div  onClick={()=>{
                                        handleSection("preparados")
                                    }} className={`${sections.preparados?"bg-green-400":""} cursor-pointer absolute w-13 h-13 lg:w-15 lg:h-15 rounded-full flex justify-center items-center border-5 border-stone-300 right-12 top-67 lg:top-83 lg:right-12`}>
                                    <i class={`${sections.preparados?"text-white":""} fa-solid fa-mug-saucer text-2xl`}></i>
                                </div>
                                       <p className="hidden md:inline-block absolute w-1/10 text-xs top-70 right-[-10px] lg:top-87 lg:right-[-5px] ">PREPARADOS LAVAZZA</p>

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
                                <p className="font-semibold text-md w-4/5 text-blue-950  mb-3">David Sánchez S.p.A. - Via Aristotele Fioravanti - Bologna - Italy.</p>
                                
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

{/* Un contenedor accesorio con imagen de fondo y cita */}
         </div>
          <div className="w-full mt-[-200px] pt-20 sm:pt-0 h-210 flex flex-col items-center justify-center bg-stone-500 bg-blend-multiply bg-[url('./assets/collections/woman-drinking.jpg')]  bg-cover bg-center relative z-0 md:bg-right">
        <p className="w-2/3 font-bold mb-5  text-white font-[Corinthia]  text-4xl md:text-5xl lg:text-7xl text-center">Hay que valorar el equilibrio de los contrastes, en la cocina y en la vida</p>
        <p className="text-white  text-xl font-normal ">David Sánchez</p>
        </div>

{/* La siguiente sección, al igual que en el componente Home, muestra tres contenedores que, a partir del breakpoint lg, se desplegan de forma lineal
No obstante, por debajo del breakpoint lg se muestran dentro del componente Slider, que se explica en Utilities.jsx
Esta estructura se repite en varias partes de la aplicación en la que es necesario mostrar varios bloques a la vez en un espacio reducido, con efectos que mejoren la experiencia de lectura del usuario */}
         <section className=" hidden mb-30 mt-[-50px] w-full pb-10 h-110 lg:flex justify-center relative z-10 gap-2 pl-2 pr-3">
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

            
            {(menuActive || storiesActive) && <Menu handleMenuActive={handleMenuActive} handleStoriesActive ={handleStoriesActive} storiesActive={storiesActive} menuActive={menuActive}/>}
        </>

}
