 import coffeeGrano from './assets/products/coffee-product-1.png'
 import coffeeCapsule from './assets/products/coffee-capsule.png'
 import coffeePowder from './assets/products/coffee-powder.png'

 import block1 from './assets/collections/block-1.jpg'
 import block2 from './assets/collections/block-2.jpg'
 import block3 from './assets/collections/block-3.jpg'
 import block4 from './assets/collections/block-4.jpg'
 
 export const productsInfo=[
     {"collection":{
       "active":true,
       "name":"Qualità Oro",
       "description":"Descubre cada mañana la excelencia del blend y saborea la sinfonía perfecta en una taza en casa.",
       "imageUrl":"./assets/home_img/background-coffee-2.jpg",
       "backgroundSettings":"bg-[url(./assets/home_img/background-coffee-1.jpg)]  bg-size-[1500px] bg-no-repeat",
       "products":[
         {
           "imgUrl":coffeeGrano,
           "description":"Qualità Oro es una combinación de seis variedades de granos Arábica procedentes de Centro y Sudamérica. La sinfonía perfecta de sabor que puedes disfrutar todos los días. Como cualquier familia italiana.",
           "category":"GRANOS DE CAFÉ",
           "name":"Qualità Oro en grano",
           "intensity":"5",
           "format":"pack",
           "quantity":"500g",
           "options":["500g", "1kg"]
         },
         {
           "imgUrl":coffeeCapsule,
           "category":"CAPSULAS COMPATIBLES",
           "name":"Qualità Oro",
           "intensity":"8",
           "format":"capsule",
           "quantity":"10",
         },
         {
           "imgUrl":coffeeGrano,
           "category":"GRANOS DE CAFÉ",
           "name":"Qualità Oro en grano",
           "intensity":"5",
           "format":"pack",
           "quantity":"1kg",
         }
       ],
       "blocks":[
        {
          "title":"ORÍGENES",
          "description":"Los orígenes de Qualità Rossa se seleccionan cuidadosamente para mantener el aroma y el sabor tan únicos como siempre.",
          "imgUrl":block1
        },
        {
          "title":"BLEND",
          "description":"Un blend único de granos de Robusta y Arábica, perfecto solo o con leche.",
          "imgUrl":block2
        },
        {
          "title":"AROMA",
          "description":"Un sabor delicado y muy aromático, completo, con un equilibrio perfecto entre los frutos secos y el chocolate.",
          "imgUrl":block3
        },
        {
          "title":"VARIEDADES",
          "description":"En todas sus formas, Qualità Rossa mantiene todo su sabor y su equilibrio, sin renunciar a su intenso aroma.",
          "imgUrl":block4
        },
       ]
     }},
     {"collection":{
       "active":true,
       "name":"Espresso",
       "description":"El espresso más auténtico. ¡Descubre el ADN auténticamente italiano con Lavazza!",
       "imageUrl":"./assets/home_img/background-coffee-1.jpg",
        "backgroundSettings":"bg-[url(./assets/home_img/background-coffee-2.jpg)]  bg-size-[1800px] bg-no-repeat",
       "products":[
         {
           "imgUrl":coffeePowder,
           "category":"CAFÉ MOLIDO",
           "name":"Espresso Italiano Classico molido",
           "intensity":"5",
           "format":"pack",
           "quantity":"1kg",
         },
         {
           "imgUrl":coffeeCapsule,
           "category":"CAPSULAS COMPATIBLES",
           "name":"Espresso Italiano Classico molido",
           "intensity":"5",
           "format":"pack",
           "quantity":"1kg",
         },
         {
           "imgUrl":coffeeGrano,
           "category":"GRANOS DE CAFÉ",
           "name":"Espresso Italiano Classico en grano",
           "intensity":"5",
           "format":"pack",
           "quantity":"1kg",
         }
       ]
     }},
     {"collection":{
       "active":true,
       "name":"Tierra",
       "description":"Disfruta del sabor de cuidar de la naturaleza y de las personas: descubre nuestros blends orgánicos ¡Tierra!",
       "imageUrl":"./assets/home_img/background-coffee-3.jpg",
       "backgroundSettings":"bg-[url(./assets/home_img/background-coffee-3.jpg)]  bg-size-[1500px] bg-no-repeat",
 
       "products":[
         {
           "imgUrl":coffeeCapsule,
           "category":"CAPSULAS COMPATIBLES",
           "name":"¡Tierra! For Planet",
           "intensity":"7",
           "format":"capsule",
           "quantity":"10",
         },
         {
           "imgUrl":coffeeGrano,
           "category":"GRANOS DE CAFÉ",
           "name":"¡Tierra! Bio-Organic for Planet Café en grano ",
           "intensity":"8",
           "format":"pack",
           "quantity":"1kg",
         }
       ]
     }}
 
   ]