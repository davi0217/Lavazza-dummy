import { useState, useEffect, useRef } from 'react'
import {useParams, Link} from 'react-router-dom'


import terranaWhite from './assets/home_img/terrana-white.png'

import terranaBlue from './assets/home_img/terrana-blue.png'

import backgroundCoffee1 from './assets/home_img/background-coffee-1.jpg'
import backgroundCoffee2 from './assets/home_img/background-coffee-2.jpg'
import backgroundCoffee3 from './assets/home_img/background-coffee-3.jpg'
import splash from './assets/collections/splash.png'
import woman from './assets/collections/woman-drinking.jpg'
import licor from './assets/collections/licor.jpg'
import tonic from './assets/collections/tonic.jpg'
import affogato from './assets/collections/affogato.jpg'

import {Footer} from './Home.jsx'
import {Menu} from './Products.jsx'

import { productsInfo } from './products-info.js'

import {Slider} from './Home.jsx'
import {Sustainability} from './Detail.jsx'
import {useNavigator} from './useNavigator.js'
import { productsDisplay } from './products-display.js'


export function Collections(){

    let params=useParams()

    const [collection, setCollection]=useState(productsInfo.filter((p)=>{
        console.log(p.collection.id==params.id)
       return p.collection.id==params.id
    })[0].collection)


    const {scrolled, menuActive, handleMenuActive}=useNavigator()

console.log(scrolled)
   
    useEffect(()=>{

       setCollection(productsInfo.filter((p)=>{
       handleMenuActive(false)
       return p.collection.id==params.id
    })[0].collection)

    },[params.id])


    return <>
    
  
            <Navigator transparent={true} scrolled={scrolled} handleMenu={handleMenuActive}>

            </Navigator>

        
    <div className={`h-200 w-full z-0 absolute top-0 bg-stone-300 bg-blend-multiply ${collection.backgroundSettings} bg-size-[1070px] sm:bg-size-[1200px] md:bg-size-[1370px] bg-no-repeat bg-center`} >

{/*             <img className=" w-[1300px] h-full object-cover" src={backgroundCoffee1} alt="" />
 */}    </div>
    
        {menuActive && <Menu handleMenuActive={handleMenuActive}/>}

        <div className="w-full mt-20 h-110  text-white flex flex-col justify-center items-center">
            <p className="font-[Corinthia] z-10 text-3xl font-bold text-center w-2/3">Collection</p>
            <p className=" md:text-7xl text-5xl z-10 font-extrabold mt-4 text-center w-3/4">{collection?.name}</p>
            <p className=" text-xl z-10 font-bold mt-4 text-center w-1/2 md:w-3/4">{collection?.description}</p>
        </div>

        <section className="relative w-full mt-5 pb-20 bg-red-900 rounded-b-[200px] rounded-t-[150px] md:rounded-t-[250px] ">
                <CollectionSlider collection={collection}/>

                <article className="mt-20 mb-20">
                <CollectionBlocks collection={collection}/>
                </article>
            <div className="w-full text-center ">
            <Link to="/products/cafe"><button className="text-white border-1 border-white tracking-widest text-sm p-5 rounded-4xl cursor-pointer text-center w-80">VER TODOS LOS PRODUCTOS</button></Link>
            </div>

            <img className="m-auto  w-50 mt-20 mb-[-160px]" src={splash} alt="" />

           
        </section>

        <div className="w-full mt-[-180px] h-210 flex flex-col items-center justify-center bg-stone-500 bg-blend-multiply bg-[url('./assets/collections/woman-drinking.jpg')] bg-cover bg-center md:bg-right">
        <p className="w-2/3 font-bold mb-5 text-white font-[Corinthia] text-4xl md:text-5xl lg:text-7xl text-center">Hay que valorar el equilibrio de los contrastes, en la cocina y en la vida</p>
        <p className="text-white text-xl font-normal ">David Sánchez</p>
        </div>

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

    <Sustainability/> 
        
    <Footer/>
    
    </>

}

function CollectionBlocks({collection}){

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


function CollectionSlider({collection}){

    const [productsToShow, setProductsToShow]=useState([])

    const params =useParams()

   

    useEffect(()=>{

        let newProducts=[]
        let position=0

        collection?.products.forEach((product)=>{
            let included=false
            console.log(product)
            
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

        console.log(newProducts)

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

export function Navigator({transparent, scrolled, handleMenu}){

    

    

    return <>
     <div className={`flex fixed ${scrolled?"bg-white text-blue-900":""} ${(!scrolled && transparent)?"text-white":""} ${!scrolled && !transparent?"bg-blue-950 text-white":""} transition-colors ease-in flex-nowrap w-full items-center h-20 z-[30] top-0`}>
              {!scrolled && <div className={`  left-2 sm:left-4  z-30 absolute h-auto`}>
    
                <Link to="/"><img  className=" w-35  h-11 object-cover  cursor-pointer  z-30  " src={terranaWhite} alt="" /></Link>
                <p className={` text-[7px] text-center font-bold sm:text-xs`}>VIGO. SPAGNA. 2001</p>
    
                </div>}
    
                {scrolled && <div className={`  left-2 bottom-[20px] sm:bottom-[25px] absolute `}>
               <Link to="/"><img className=" w-35 h-13 object-cover   sm:w-50   z-30 cursor-pointer relative   " src={terranaBlue} alt="" /></Link> 
                </div>
            }
              <nav className="hidden  text-sm font-bold  lg:flex gap-8 tracking-widest  md:flex-none absolute left-0 right-0 justify-center z-11">
                <a href="" className={` hover:underline underline-offset-8 ${ scrolled?"decoration-blue-900":"decoration-white"} z-20`} onClick={(e)=>{
                        e.preventDefault()
                        handleMenu(true)
                    }}>PRODUCTOS</a>
                <a href=""className={` hover:underline underline-offset-8 ${ scrolled?"decoration-blue-900":"decoration-white"} z-20`} onClick={(e)=>{
                        e.preventDefault()
                        handleMenu(true)
                    }}>TERRANA STORIES</a>
                <a href=""className={` hover:underline underline-offset-8 ${ scrolled?"decoration-blue-900":"decoration-white"} z-20`} onClick={(e)=>{
                        e.preventDefault()
                       
                
                    }}><Link to="/esg">SOSTENIBILIDAD</Link></a>
                <a href=""className={` hover:underline underline-offset-8 ${ scrolled?"decoration-blue-900":"decoration-white"} z-20`} onClick={(e)=>{
                        e.preventDefault()
                       
                  
             
                        handleMenu(true)
                    }}><Link to="/contact">CONTACTO</Link></a>
              </nav>
              <Link to="/cart"><i className={`fa-solid fa-cart-shopping z-30 flex-none basis-10 text-center text-2xl ${scrolled?"text-blue-900":"text-stone-50"} absolute right-40 top-[25px] lg:right-5  z-10`}></i></Link>
              <i className={`fa-solid fa-bars-staggered cursor-pointer flex  ${scrolled?"text-blue-900":"text-stone-50"} absolute right-12 lg:!hidden`} onClick={(e)=>{
                        e.preventDefault()
                 
                        handleMenu(true)
                    }}></i>
            </div>
</>
}