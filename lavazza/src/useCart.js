import {useEffect, useState} from 'react'

export function useCart(){

    const [cart, setCart]=useState([
      
    ])

    const addToCart=function(product){

            let newCart=[]
            
            
         

            if(cart.some((p)=>{
               return  p.product==product
            })){
                console.log("is already in cart")
                newCart.push({
                    "product":product,
                    "quantity":cart.filter((pr)=>{
                        return pr.product==product
                    })[0].quantity+1
                              
                })
            }

            if(!cart.some((p)=>{
                return p.product==product
            })){
                console.log("is not in cart")
                cart.forEach((pr)=>{
                        newCart.push(pr)
                })
                newCart.push({
                    "product":product,
                    "quantity":0
                })
            }

            setCart(newCart)
    }
    const removeFromCart=function(product){

            let newCart
            
            
            cart.forEach((p)=>{

                if(p.product==product){
                   p.quantity=p.quantity-1 
                   newCart.push(p)             
                }

                }     
            )

           

    }

    return {cart, addToCart, removeFromCart}

}