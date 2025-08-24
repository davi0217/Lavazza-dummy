import { useState, useEffect, useRef } from 'react'
import {useParams, Link} from 'react-router-dom'




import {Footer} from './Home.jsx'
import {Menu} from './Products.jsx'
import {Navigator} from './Collections.jsx'


import {useNavigator} from './useNavigator.js'

import {chefs} from './chefs.js'

export  function Chefs(){

    const {scrolled, menuActive, handleMenuActive,storiesActive, handleStoriesActive}=useNavigator()

  


    return <section>


  <Navigator transparent={true} scrolled={scrolled} handleMenu={handleMenuActive} handleStories={handleStoriesActive}>

            </Navigator>

        <div className={`h-170 w-full z-0 absolute flex flex-col justify-center top-0 bg-stone-500 bg-blend-multiply  bg-[url(./assets/chefs/chefs.jpg)] bg-size-[1070px] sm:bg-size-[1200px] md:bg-size-[1370px] bg-no-repeat bg-center`} >
        <h1 className="font-extrabold text-white w-full text-center px-2 text-5xl md:text-8xl tracking-wide mb-5 ">Bon appetit</h1>
        <h1 className="font-semibold text-white w-1/2 mx-auto text-center text-lg md:text-2xl  ">Sumérgete en la visión de los chefs más aclamados del mundo</h1>
        <button className="w-2/5 mx-auto mt-8 rounded-4xl border-white border-1 p-5 text-center text-white text-sm md:text-lg font-bold tracking-widest">DESCUBRE MÁS</button>
        </div>

        <section className="relative mt-140 flex flex-row  flex-wrap  mb-30 justify-center px-20 lg:px-5  md:justify-between  lg:justify-center gap-10 lg:gap-4 w-full "> 

            {chefs.map((b, index)=>{
                return <div className={`${(index%2!=0 && index<3)?" lg:translate-y-20 lg:!mb-30":""} ${(index>3 && (index-1)%3==0)?" ":"lg:mt-[-40px]"} w-3/4 md:w-4/10 lg:w-3/10 lg:mb-10 shadow-sm shadow-stone-900 h-110 rounded-4xl`}>
        <div className={`w-full h-50 bg-size-[540px] rounded-t-4xl  bg-stone-500 bg-blend-multiply ${chefs[index].bgSettingsLittle}`}></div>
        <div className="bg-white h-60  pt-5 pl-3 pb-5 pr-2 flex flex-col justify-between rounded-b-4xl text-blue-950 w-full">
            <p className="font-[Corinthia] text-2xl mb-4 font-extrabold">{b.name}</p>
            <p className="sm:text-lg lg:text-xl text-md h-30 mb-5 font-extrabold">{b.description}</p>
            <Link to={`/chefs/${index+1}`}><p className="text-sm tracking-widest font-bold ">{b.CTA} &gt;</p></Link>
        </div>
        </div>
            })}

        </section>

    <Footer>


    </Footer>
            {(menuActive || storiesActive) && <Menu handleMenuActive={handleMenuActive} handleStoriesActive ={handleStoriesActive} storiesActive={storiesActive} menuActive={menuActive}/>}

    </section>

}