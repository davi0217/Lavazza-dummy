import { useState, useEffect } from "react"
import { useParams} from "react-router-dom"

export function useNavigator(){
     const [scrolled, setScrolled]=useState(false)
     
     const params=useParams()

     
    
        useEffect(()=>{
    
          const handleScrolled=function(){
    
            if(window.scrollY>100){
              setScrolled(true)
            }else{
              setScrolled(false)
            }
          }
    
          window.addEventListener("scroll", handleScrolled)
    
          return ()=>removeEventListener("scroll", handleScrolled)
    
    
        },[])
    
         const [menuActive, setMenuActive]=useState(false)
    
        useEffect(()=>{
    
            let x=window.scrollX
            let y=window.scrollY
            const disableScroll=function(){
                window.scrollTo(x,y)
            }
            if(menuActive){
    
    
            window.addEventListener("scroll", disableScroll)
    
        }
    
            return ()=>window.removeEventListener("scroll", disableScroll)
    
        },[menuActive])
    
        const handleMenuActive=function(state){
          setMenuActive(state)
        }

        useEffect(()=>{
        
          handleMenuActive(false)
          window.scrollTo(0,0)
        },[params])


        return {scrolled, menuActive, handleMenuActive}
}