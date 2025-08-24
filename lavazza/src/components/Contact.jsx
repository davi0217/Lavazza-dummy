import { useState, useEffect, useRef } from 'react'
import {useParams, Link} from 'react-router-dom'


import productsHeader from '../assets/products/products-header.png'
import productsHeader2 from '../assets/products/products-header-2.png'


import {Footer, Menu, Navigator, Questions} from './Utilities.jsx'


import { productsInfo } from '../data/products-info.js'


import {useNavigator} from '../custom-hooks/useNavigator.js'

export  function Contact(){

  /* 
El hook personalizado nos ofrece estados y handlers:
- scrolled: Si el usuario ha hecho scroll en la web, para cambiar el color del navegador
- menuActive: Estado del menú principal que se despliega del navegador
- handleMenuActive: Activar o desactivar el menú del navegador
- storiesActive: Estado del menú de historias que se despliega del navegador
- handleStoriesActive: Activar o desactivar el menú de historias del navegador
*/
    const {scrolled, menuActive, handleMenuActive, storiesActive, handleStoriesActive}=useNavigator()

    return <section>

{/* Esta sección de apertura imita el header de la sección Products, con imágenes que cambian según el breakpoint para evitar el solapamiento con el texto */}
        <div className="absolute  top-20 w-full z-0 ">
                        
                       <img className=" hidden z-0  sm:flex brightness-150  w-full object-cover h-80 md:h-80 lg:h-80 " src={productsHeader} alt="" /> 
                   <img className="sm:hidden z-0 brightness-150 opacity-80  w-full object-cover h-80 md:h-80 lg:h-80 " src={productsHeader2} alt="" />
                        
                    </div>


<Navigator transparent={false} scrolled={scrolled} handleMenu={handleMenuActive} handleStories={handleStoriesActive}>

            </Navigator>

 
    
{/* El siguiente contenedor abre la sección con los elementos organizados en flex-columna, y centrados */}
            <div className=" static w-full h-auto mt-10 text-blue-950  flex flex-col items-center gap-3 pt-15 pb-10 z-20 ">
            <p className="font-extrabold w-2/3 z-20 text-4xl text-center ">Terrana, a tu lado</p>
            <p className="font-bold z-20 font-[Corinthia] mt-2 w-2/4  text-4xl text-center ">Ninguna duda es pequeña, ningún sueño es demasiado grande.</p>
           <div className={` w-2/3 z-20 px-1 sm:px-10 h-auto `}>
            <p className={` font-normal  mt-2 w-full  text-md text-center`}>    Ya sea que busques el café que más se adapte a ti, asesoría sobre nuestros productos o ayuda con tus pedidos en línea, estamos aquí para acompañarte en cada paso de tu viaje con Terrana.</p>
           </div>
            </div>
{/* El siguiente contenedor contiene información general de contacto */}
            <div className="w-9/10 m-auto p-15 text-blue-950 shadow-sm shadow-stone-300">
            <p className="text-md mb-5 font-extrabold">Contacta con nosotros </p>
            <p className="text-md mb-5">  Si tienes alguna duda o pregunta, estamos aquí para escucharte y acompañarte. Te responderemos lo antes posible. 
</p>
            <p className="text-md mb-5">  Puedes hacernos llegar tu consulta a través de la página “Contacto” disponible en <strong>www.terrana.com</strong>. Allí encontrarás una sección de preguntas frecuentes y un formulario donde podrás indicar tus datos y el motivo de tu consulta.
</p>
            <p className="text-md mb-5">Haz clic <i><strong>aquí</strong></i> para consultar la lista de nuestros distribuidores locales</p>
            <p className="text-md mb-5">Estaremos encantados de escucharte.</p>


            </div>
{/* El apartado de preguntas se construye con el componente Questions, del que se puede obtener más información en Utilities.jsx */}
            <h2 className="w-9/10 m-auto mt-10 mb-10 font-extrabold text-3xl text-blue-950">Preguntas frecuentes</h2>
       
            <Questions/>

 {/* Se cierra la sección con un Footer personalizado
        Más información sobre el componente Footer en Utilities.jsx */}
    <Footer/>


    
            {(menuActive || storiesActive) && <Menu handleMenuActive={handleMenuActive} handleStoriesActive ={handleStoriesActive} storiesActive={storiesActive} menuActive={menuActive}/>}

    </section>

}
