import { useState, useEffect, useRef } from 'react'
import {useParams, Link} from 'react-router-dom'

import lavazza from './assets/home_img/lavazza-logo-white.png'

import lavazza2 from './assets/home_img/lavazza-2-logo.png'

import productsHeader from './assets/products/products-header.png'
import productsHeader2 from './assets/products/products-header-2.png'


import {Footer} from './Home.jsx'
import {Menu} from './Products.jsx'
import {Navigator} from './Collections.jsx'

import { productsInfo } from './products-info.js'


import {useNavigator} from './useNavigator.js'

export  function Contact(){

    const {scrolled, menuActive, handleMenuActive, storiesActive, handleStoriesActive}=useNavigator()

    return <section>

        <div className="absolute  top-20 w-full z-0 ">
                        
                       <img className=" hidden z-0  sm:flex brightness-150  w-full object-cover h-80 md:h-80 lg:h-80 " src={productsHeader} alt="" /> 
                   <img className="sm:hidden z-0 brightness-150 opacity-80  w-full object-cover h-80 md:h-80 lg:h-80 " src={productsHeader2} alt="" />
                        
                    </div>


<Navigator transparent={false} scrolled={scrolled} handleMenu={handleMenuActive} handleStories={handleStoriesActive}>

            </Navigator>

 
    

            <div className=" static w-full h-auto mt-10 text-blue-950  flex flex-col items-center gap-3 pt-15 pb-10 z-20 ">
            <p className="font-extrabold w-2/3 z-20 text-4xl text-center ">Terrana, a tu lado</p>
            <p className="font-bold z-20 font-[Corinthia] mt-2 w-2/4  text-4xl text-center ">Ninguna duda es pequeña, ningún sueño es demasiado grande.</p>
           <div className={` w-2/3 z-20 px-1 sm:px-10 h-auto `}>
            <p className={` font-normal  mt-2 w-full  text-md text-center`}>    Ya sea que busques el café que más se adapte a ti, asesoría sobre nuestros productos o ayuda con tus pedidos en línea, estamos aquí para acompañarte en cada paso de tu viaje con Terrana.</p>
           </div>
            </div>

            <div className="w-9/10 m-auto p-15 text-blue-950 shadow-sm shadow-stone-300">
            <p className="text-md mb-5 font-extrabold">Contacta con nosotros </p>
            <p className="text-md mb-5">  Si tienes alguna duda o pregunta, estamos aquí para escucharte y acompañarte. Te responderemos lo antes posible. 
</p>
            <p className="text-md mb-5">  Puedes hacernos llegar tu consulta a través de la página “Contacto” disponible en <strong>www.terrana.com</strong>. Allí encontrarás una sección de preguntas frecuentes y un formulario donde podrás indicar tus datos y el motivo de tu consulta.
</p>
            <p className="text-md mb-5">Haz clic <i><strong>aquí</strong></i> para consultar la lista de nuestros distribuidores locales</p>
            <p className="text-md mb-5">Estaremos encantados de escucharte.</p>


            </div>

            <h2 className="w-9/10 m-auto mt-10 mb-10 font-extrabold text-3xl text-blue-950">Preguntas frecuentes</h2>
       
            <Questions/>

    <Footer/>


    
            {(menuActive || storiesActive) && <Menu handleMenuActive={handleMenuActive} handleStoriesActive ={handleStoriesActive} storiesActive={storiesActive} menuActive={menuActive}/>}

    </section>

}


export function Questions(){

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

                {questions.map((q, index)=>{
                    return <div className="w-9/10 bg-stone-50 p-3 flex flex-col ">

                <div className=" flex  justify-between">

                    <p className="text-lg font-bold w-9/10 tracking-wide">{q.question}</p>
                    <i onClick={()=>{
                        toggleVisibility(index)
                    }} className={`cursor-pointer fa-solid fa-caret-${q.hidden?"down":"up"} `}></i>

                </div>

                <div className={`mt-5 px-5 font-normal text-sm ${q.hidden?"hidden":""}`}>
                    <p><i>{q.answer}</i></p>

                </div>
                
                </div>
                })}


            </section>
}