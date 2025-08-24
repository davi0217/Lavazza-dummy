import { useState, useEffect, useRef, useContext } from 'react'
import {useParams, Link} from 'react-router-dom'
import {useNavigator} from '../custom-hooks/useNavigator.js'


import terranaWhite from '../assets/home_img/terrana-white.png'
import productsHeader from '../assets/products/products-header.png'
import productsHeader2 from '../assets/products/products-header-2.png'

import {productsInfo} from '../data/products-info.js'
import {Footer, Menu, Navigator} from './Utilities.jsx'

import { productsDisplay } from '../data/products-display.js'

import {ProductsContext} from './App.jsx'


 
export function Products(){

    const params=useParams()
   
/* El estado display contiene el mensaje de apertura de la categoría de producto en la que nos encontramos actualmente que se extraen de products.display.js */
    const [display, setDisplay]=useState()

/* El estado productsToShow contiene la lista de productos a mostrar según la categoría en la que nos encontramos actualmente, que se extraen de products-info.js */
    const [productsToShow, setProductsToShow]=useState()


/* Gracias al hook personalixado useCart (que proviene del contexto creado en App.jsx) obtenemos estados y métodos
-El estado cart devuelve una lista de productos que se han añadido al carrito
-El método addToCart nos permite añadir al carrito un objeto product
 */
    const useCart=useContext(ProductsContext)

   const {cart, addToCart}=useCart()

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

        /* Cada vez que cambie la categoría de los parámetros se actualizará el mensaje de display, adaptándolo al formato del producto
        Se obtiene a través del objeto products display, que tiene como keys las diferentes categorías, y como values los textos a mostrar */
        Object.keys(productsDisplay).forEach((d)=>{
           
            if(params.category==d){
                setDisplay(productsDisplay[d])
            }
        })


        /* Se crea una variable temporal para almacenar los productos de la categoría correspondiente (grado, molido o capsula)
        Si la categoría es cafe, añadimos al array newProducts todos los productos, sin importar la categoría
        Si la categoría es una de las señaladas anteriormente, se añaden solo los objetos pertenecientes a esta categoría (a través del valor categoryLink) */

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

        setProductsToShow(newProducts)

    },[params.category])

    
    /* La descripción de la categoría, que se obtiene del display, no siempre se muestra en su totalidad
    Con showDescription y setShowDescription controlamos cuando esta sección se ve en su totalidad o parcialmente */

    const [showDescription, setShowDescription]=useState(false)

    const handleShowDescription=function(){
        setShowDescription(!showDescription)
    }

    /* A través del método giveColour damos un color de fondo a cada producto a condición de su categoría, que acepta como parámetro */

    const giveColour=function(cat){

        if(cat=="GRANOS DE CAFÉ"){
            return "bg-lime-50"

        }else if(cat=="CAFÉ MOLIDO"){
                return "bg-cyan-50"
        }else if(cat=="CAPSULAS COMPATIBLES"){
            return "bg-red-50"

        }
    }




  return <section > 

  {/* El header del componente Products, a partir del breakpoint sm son unos motivos que dibujan las esquinas superiores del contenedor
  Por debajo del breakpoint sm, otra imagen lo reemplaza para evitar que se solape con el texto */}

            <div className="absolute  top-20 w-full z-0 ">
                
               <img className=" hidden z-0  sm:flex brightness-150  w-full object-cover h-80 md:h-80 lg:h-80 " src={productsHeader} alt="" /> 
           <img className="sm:hidden z-0 brightness-150 opacity-20  w-full object-cover h-80 md:h-80 lg:h-80 " src={productsHeader2} alt="" />
                
            </div>
           
  
<Navigator transparent={false} scrolled={scrolled} handleMenu={handleMenuActive} handleStories={handleStoriesActive}>

            </Navigator>
            {(menuActive || storiesActive) && <Menu handleMenuActive={handleMenuActive} handleStoriesActive ={handleStoriesActive} storiesActive={storiesActive} menuActive={menuActive}/>}

           
    {/* El mensaje de apertura de la categoría de productos que depende del display que hemos obtenido como resultado del useEffect controlado por los parámetros  de useParams
    showDescription controla, a través de un operador ternario, si el mensaje de apertura aparece recortado o en su totalidad*/}

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

{/* Se realiza un map sobre el array de productsToShow para mostrar cada uno de los productos en contenedores iguales
El color de fondo responde  a la categoría y se obtiene gracias a la función descrita previamente, giveColour 
Los contenedores de productos se organizan en un display flex, con wrap activado, ya que siempre tendrán la misma anchura
Al principio se muestran tres productos por fila, mientras que en el punto más reducido se muestra una única columna de productos*/}

                  <article className="flex flex-wrap justify-center gap-3 w-full pt-10">

                        {productsToShow?.map((p)=>{

                            return <div className={` w-80 relative shrink-0 h-130 rounded-md ${giveColour(p.category)} flex flex-col items-center p-5 `}>
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

             {/* El Link lleva al componente Detail con la información del producto sobre el que se ha hecho click */}

                                <Link to={`/detail/${p.collectionId}/${p.id}`}><button className="w-40 bg-blue-950 hover:bg-blue-900 transition-colors ease-in text-white rounded-4xl mt-5 p-2 font-extrabold tracking-widest text-sm">DESCUBRIR MÁS</button></Link>
                                <div className="absolute top-2 right-2 w-1/3 flex items-center justify-between pr-2">
                                <p className="text-blue-950 font-extrabold tracking-widest text-sm">{p.price} €</p>
                                <i onClick={()=>{

                                    
            /* Al hacer click sobre el logo del carrito, se controla si el objeto está ya en el carrito y, si no es así, se añade,
            Esto se realiza a través del método obtenido de useCart 
            Además, si se comprueba que el producto está en el carrito, se marca el fondo verde */
                                    if(cart.some((pr)=>{

                                    return pr.product.id==p.id
                                })){
                                    console.log("prod is already on cart")
                                    
                                    return 
                                }
                                    addToCart(p)
                                }} key={p.id} className={`${ cart.some((pr)=>{
                                    return pr.product.id==p.id && pr.quantity>0
                                })?"!bg-green-400 hover:!bg-stone-200 hover:!text-stone-500":"" }  cursor-pointer fa-solid fa-cart-shopping p-2 rounded-md hover:bg-blue-950 hover:text-white`}></i>
                                </div>
                          </div>
                        })}

                    


                  </article>

     {/* Se cierra la sección con un Footer personalizado
        Más información sobre el componente Footer en Utilities.jsx */}

            <Footer/>

            </section>




        </section>
 }
