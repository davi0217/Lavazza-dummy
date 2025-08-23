import { useState, useEffect, useRef } from 'react'
import {useParams, Link} from 'react-router-dom'




import {Footer} from './Home.jsx'
import {Menu} from './Products.jsx'
import {Navigator} from './Collections.jsx'
import {sections} from './esgSections.jsx'


import {useNavigator} from './useNavigator.js'

export  function DetalleEnvironement(){

    const {scrolled, menuActive, handleMenuActive}=useNavigator()

    const params=useParams()

    const [current, setCurrent]=useState(0)

  const changeCurrent=function(num){

    setCurrent(num)
  }


    return <section>


    <Navigator scrolled={scrolled} handleMenu={handleMenuActive} transparent={true}>

    </Navigator>

        <div className={`h-170 w-full z-0 absolute flex flex-col items-center justify-center top-0 bg-stone-500 bg-blend-multiply ${sections[params.id-1].bgSettings} `} >
        <h1 className="font-extrabold text-white  px-8    text-center text-4xl  sm:text-6xl md:text-7xl tracking-wide mb-5 ">{sections[params.id-1].title}</h1>
        <h1 className=" text-white  px-8    text-center text-md  sm:text-lg md:text-xl tracking-wide mb-5 ">{sections[params.id-1].subtitle}</h1>
        </div>

        <section className="relative text-blue-950 mt-170 py-10 px-7 sm:px-20 mb-10 w-full ">

         <p className=" text-lg sm:text-2xl mb-5 ">{sections[params.id-1].intro}</p>
        <p className="text-xl sm:text-3xl mt-15 mb-5 font-extrabold text-stone-600 tracking-wide ">{sections[params.id-1].firstSubtitle}</p>
        {sections[params.id-1].paragraphs.map((p)=>{
            return  <p className=" text-lg sm:text-2xl mb-5 ">{p}</p>

        })}

        {sections[params.id-1].ref.slice(0,sections[params.id-1].ref.length>5?3:4).map((i)=>{
         return <img className="w-[1000px] h-100 object-cover mb-10 object-center" src={i}/>
        })}
        <p className="text-xl sm:text-3xl mt-15 mb-5 font-extrabold text-stone-600 tracking-wide ">{sections[params.id-1].secondSubtitle}</p>
         <p className=" text-lg sm:text-2xl mb-5 ">{sections[params.id-1].curiosity}</p>

     </section>

        <div className="flex flex-row justify-center mb-10 gap-5 flex-wrap w-full ">
         {sections[params.id-1].ref.length>=5 && sections[params.id-1].ref.slice(3,sections[params.id-1].ref.length).map((i, index)=>{
                return <img className={`h-80 object-cover ${(index%2==0 )?"w-1/4 min-w-90 md:min-w-40":" w-3/5 min-w-120"} `} src={i}/>
         })
         }
        </div>  

        <div className=" w-8/10 m-auto   md:grid md:grid-cols-4  divide-x-blue-950 divide-x-2 mb-15 border-x-2 border-x-blue-950">
            <div className="col-span-1 flex flex-col h-40 md:h-70 sm:h-50">
                <div className="w-full  flex justify-center h-15 sm:h-20 bg-blue-950 items-center">
                    <i class="fa-solid fa-pen text-white text-lg"></i>
                </div>
                <div className="w-full    text-blue-950 p-5">
                    <p className="text-lg text-center font-semibold">{sections[params.id-1].author}</p>
                </div>
            </div>
            <div className="col-span-1 flex flex-col h-40 md:h-70 sm:h-50">
                <div className="w-full  flex justify-center h-15 sm:h-20 bg-blue-950 items-center">
                    <i class="fa-solid fa-globe text-white text-lg"></i>
                </div>
                <div className="w-full   text-blue-950 p-5">
                    <p className="text-lg text-center font-semibold">{sections[params.id-1].ods}</p>
                </div>
            </div>
            <div className="col-span-2 flex flex-col h-40 md:h-70 sm:h-50">
                <div className="w-full flex justify-center h-15 sm:h-20 bg-blue-950 items-center">
                    <i class="fa-solid fa-comment text-white text-lg"></i>
                </div>
                <div className="w-full  text-blue-950 p-5">
                    <p className="text-lg text-center font-semibold">{sections[params.id-1].about}</p>
                </div>
            </div>
        </div>

        {sections[params.id-1].video && <div className="w-full mb-15 bg-red-500 m-auto text-center h-100 object-cover">
            {sections[params.id-1].video}
            </div>}


<div className="w-full mb-10 ">
            <h3 className="text-center text-2xl mb-10 font-bold text-stone-500 ">Comparte este artículo en </h3>
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

            {sections.map((r, index)=>{

                if(index+1==params.id){
                    return
                }
                return  <div key={index} style={{"transform":`translateX(-${current*375}px)`}} className={`flex flex-col justify-start gap-5 py-4 px-3 min-w-[350px] transition-transform ease-in-out duration-300  h-70 rounded-xl bg-stone-500 bg-blend-multiply ${sections[index].bgSettingsLittle}`}>

                    <div className="border-1 text-center border-white p-1 w-2/5 text-white text-sm mb-5 font-bold tracking-wide ">Nuestras raíces</div>
                    <div className="w-full">
                    <p className="text-white w-4/5 h-22 text-xl font-bold mb-10 ">{r.subtitle} </p>
                    <Link to={`/esg/${index+1}`}><button className="w-1/2 cursor-pointer border-1 rounded-4xl border-white ml-40 text-white text-md tracking-widest font-extrabold p-2 rouneded-4xl">Conócelo</button></Link>
                    </div>

                </div>
            })}


        </article>
            <div className="flex flex-row justify-center  gap-5 w-full h-20">

            {sections.slice(0, sections.length-2).map((r, index)=>{
                return <i key={index} onClick={()=>{
                    changeCurrent(index)
                }} class={`fa-solid fa-circle cursor-pointer z-20 ${index==current?"text-blue-950":"text-blue-300"}`}></i>
            })}
            </div>

    <Footer>


    </Footer>
    {menuActive && <Menu handleMenuActive={handleMenuActive}/>}

   

    </section>

}