import {useEffect, useState, useRef} from 'react'

export function useCart(){
    

    let cartStoraged=localStorage.getItem("cart")

    const [cart, setCart]=useState(JSON.parse(cartStoraged)?JSON.parse(cartStoraged):[])

    const [totalPrice, setTotalPrice]=useState(0)

    const addToCart=function(product){

            let newCart=[]
            if(cart.some((p)=>{
               return  p.product==product
            })){

                cart.forEach((pr)=>{

                    if(pr.product!=product){
                        newCart.push(pr)
                    }else{
                        newCart.push({
                             "product":product,
                    "quantity":cart.filter((pr)=>{
                        return pr.product==product
                    })[0].quantity+1
                        })
                    }


                    
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
                    "quantity":1
                })
            }

            localStorage.setItem("cart", JSON.stringify(newCart))

            setCart(newCart)
    }
    const removeFromCart=function(product){

            let newCart=[]
            
            
            cart.forEach((p)=>{

                if(p.product==product && p.quantity>1){
                  let newProd={
                    "product":p.product,
                    "quantity":p.quantity-1
                  }
                   newCart.push(newProd)             
                }else if(p.product==product && p.quantity==1){
                    return 
                }else{
                    newCart.push(p)
                }

                }     
            )

            localStorage.setItem("cart", JSON.stringify(newCart))

            setCart(newCart)

           

    }

    
    
        useEffect(()=>{
            let newPrice=0
    
            cart.forEach((pr)=>{
                newPrice=newPrice+(pr.quantity*pr.product.price)
                console.log(newPrice+" is newPrice")
            })
    
            setTotalPrice(newPrice)
    
        },[cart])

    return {cart, addToCart, removeFromCart, totalPrice}

}