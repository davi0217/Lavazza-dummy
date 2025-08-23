import { useState, useEffect, useRef } from 'react'
import {useParams, Link} from 'react-router-dom'




import {Footer} from './Home.jsx'
import {Menu} from './Products.jsx'
import {Navigator} from './Collections.jsx'
import {chefs} from './chefs.js'


import {useNavigator} from './useNavigator.js'

export  function DetalleChefs(){

    const {scrolled, menuActive, handleMenuActive}=useNavigator()

    const params=useParams()

    const [current, setCurrent]=useState(0)

  const changeCurrent=function(num){

    setCurrent(num)
  }


    return <section>


    <Navigator scrolled={scrolled} handleMenu={handleMenuActive} transparent={true}>

    </Navigator>

        <div className={`h-170 w-full z-0 absolute flex flex-col items-center justify-center top-0 bg-stone-500 bg-blend-multiply ${chefs[params.id-1].bgSettings} `} >
        <h1 className="font-extrabold text-white  px-8    text-center text-4xl  sm:text-6xl md:text-7xl tracking-wide mb-5 ">{chefs[params.id-1].name}</h1>
        <h1 className=" text-white  px-8    text-center text-md  sm:text-lg md:text-xl tracking-wide mb-5 ">{chefs[params.id-1].description}</h1>
        </div>

        <section className="relative text-blue-950 mt-170 py-10 px-7 sm:px-20 mb-10 w-full ">

         <p className=" text-lg sm:text-2xl mb-5 ">{chefs[params.id-1].intro}</p>
        <p className="text-xl sm:text-3xl mt-15 mb-5 font-extrabold text-stone-600 tracking-wide ">{chefs[params.id-1].firstSubtitle}</p>
         <p className=" text-lg sm:text-2xl mb-5 ">{chefs[params.id-1].littleBio}</p>
         <p className=" text-lg sm:text-2xl mb-5 ">{chefs[params.id-1].restaurant}</p>
         <img className="w-[1000px] my-10 h-100 object-cover" src={chefs[params.id-1].imgRes} alt="" />
        <p className=" text-lg sm:text-2xl mb-5 ">{chefs[params.id-1].colaboracion1}</p>
        <p className=" text-lg sm:text-2xl mb-5 ">{chefs[params.id-1].colaboracion2}</p>
        <p className=" text-lg sm:text-2xl mb-5 ">{chefs[params.id-1].colaboracion3}</p>
        <p className="text-xl sm:text-3xl mt-15 mb-5 font-extrabold text-stone-600 tracking-wide ">{chefs[params.id-1].coffeeTitle}</p>
        <p className=" text-lg sm:text-2xl mb-5 ">{chefs[params.id-1].coffee}</p>
        {chefs[params.id-1].imgs.map((i)=>{
            return <img className="w-[1000px] h-100 object-cover mb-10 object-center" src={i}/>
        })}
        <p className="text-xl sm:text-3xl mt-15 mb-5 font-extrabold text-stone-600 tracking-wide ">{chefs[params.id-1].companyTitle}</p>
         <p className=" text-lg sm:text-2xl mb-15 ">{chefs[params.id-1].conclusion}</p>

<div className="w-full mb-10 ">
            <h3 className="text-center text-2xl mb-10 font-bold text-stone-500 ">Comparte esta noticia en </h3>
            <div className="flex flex-row justify-center gap-5 w-full h-10">
                   <i class="fa-brands fa-facebook-f text-white bg-stone-500 rounded-full pt-2 h-9 pr-3 pl-3 text-center items-center "></i>
          <i class="fa-brands fa-youtube text-white  bg-stone-500 rounded-full pt-2 h-9 pr-2 pl-2 text-center items-center"></i>
          <i class="fa-brands fa-instagram text-white bg-stone-500 rounded-full pt-2 h-9 pr-3 pl-3 text-center items-center"></i>
            </div>
            
        </div> 

        <div className="relative px-5 w-full h-20 mb-10 flex justify-center items-center ">
           <div className="absolute w-full h-1 border-t-1 z-0 border-t-blue-950 "></div>
            <h3 className="font-[Corinthia] text-center bg-white px-3 w-2/7 z-10 text-blue-950 text-4xl font-extrabold tracking-wide ">Lee también</h3>
        </div>
       

        <article className="relative w-9/10 m-auto  gap-10 h-80 overflow-hidden flex flex-row ">

            {chefs.map((r, index)=>{

                if(index+1==params.id){
                    return
                }
                return  <div key={index} style={{"transform":`translateX(-${current*375}px)`}} className={`flex flex-col justify-start gap-5 py-4 px-3 min-w-[350px] transition-transform ease-in-out duration-300  h-70 rounded-xl bg-stone-500 bg-blend-multiply ${chefs[index].bgSettingsLittle}`}>

                    <div className="border-1 text-center border-white p-1 w-2/5 text-white text-sm mb-5 font-bold tracking-wide ">Nuestros chefs</div>
                    <div className="w-full">
                    <p className="text-white w-4/5 h-22 text-xl font-bold mb-10 ">{r.name} </p>
                    <Link to={`/chefs/${index+1}`}><button className="w-1/2 cursor-pointer border-1 rounded-4xl border-white ml-40 text-white text-md tracking-widest font-extrabold p-2 rouneded-4xl">Conócelo</button></Link>
                    </div>

                </div>
            })}


        </article>
            <div className="flex flex-row justify-center  gap-5 w-full h-20">

            {chefs.slice(0, chefs.length-2).map((r, index)=>{
                return <i key={index} onClick={()=>{
                    changeCurrent(index)
                }} class={`fa-solid fa-circle cursor-pointer z-20 ${index==current?"text-blue-950":"text-blue-300"}`}></i>
            })}
            </div>

    <Footer>


    </Footer>
    {menuActive && <Menu handleMenuActive={handleMenuActive}/>}

    </section>

    </section>

}