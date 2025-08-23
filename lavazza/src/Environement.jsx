import { useState, useEffect, useRef } from 'react'
import {useParams, Link} from 'react-router-dom'

import lavazza from './assets/home_img/lavazza-logo-white.png'

import lavazza2 from './assets/home_img/lavazza-2-logo.png'
import cultivation1 from './assets/backgrounds/cultivation-1.jpg'
import cultivation2 from './assets/backgrounds/cultivation-2.jpg'
import cultivation3 from './assets/backgrounds/cultivation-3.jpg'
import cultivation4 from './assets/backgrounds/cultivation-4.jpg'


import {Footer} from './Home.jsx'
import {Menu} from './Products.jsx'
import {Navigator} from './Collections.jsx'
import {sections} from './esgSections.jsx'

import { productsInfo } from './products-info.js'


import {useNavigator} from './useNavigator.js'

export  function Environement(){

    const {scrolled, menuActive, handleMenuActive}=useNavigator()



    return <section>


    <Navigator scrolled={scrolled} handleMenu={handleMenuActive} transparent={true}>

    </Navigator>

        <div className={`h-170 w-full z-0 absolute flex flex-col justify-center top-0 bg-stone-500 bg-blend-multiply bg-[url(./assets/backgrounds/nature1.jpg)] bg-size-[1070px] sm:bg-size-[1200px] md:bg-size-[1370px] bg-no-repeat bg-center`} >
        <h1 className="font-extrabold text-white w-full text-center px-2 text-5xl md:text-8xl tracking-wide mb-5 ">Raíces Responsables</h1>
        <h1 className="font-semibold text-white w-1/2 mx-auto text-center text-lg md:text-2xl  ">Descubre las iniciativas sociales, económicas y medioambientales de Terrana.</h1>
        <button className="w-2/5 mx-auto mt-8 rounded-4xl border-white border-1 p-5 text-center text-white text-sm md:text-lg font-bold tracking-widest">DESCUBRE MÁS</button>
        </div>

        <section className="relative mt-140 flex flex-row flex-wrap  mb-30 justify-center pl-10 pr-10  md:justify-center gap-10  lg:justify-around w-full "> 

            {sections.map((b, index)=>{
                return <div className={`${index%2==0?"":"md:translate-y-20"} w-1/5 min-w-80 lg:min-w-50 shadow-sm shadow-stone-900 rounded-4xl`}>
        <div className={`w-full h-50  rounded-t-4xl ${b.bgSettingsLittle} `}></div>
        <div className="bg-white min-h-60  pt-5 pl-3 pb-5 pr-2 flex flex-col justify-between rounded-b-4xl text-blue-950 w-full">
            <p className="font-[Corinthia] text-4xl mb-4 font-extrabold">{b.title}</p>
            <p className="text-xl mb-5 font-extrabold">{b.subtitle}</p>
            <Link to={`/esg/${index+1}`}><p className="text-sm cursor-pointer tracking-widest font-bold ">DESCUBRE MÁS &gt;</p></Link>
        </div>
        </div>
            })}

        </section>

    <Footer>


    </Footer>
    {menuActive && <Menu handleMenuActive={handleMenuActive}/>}

    </section>

}
