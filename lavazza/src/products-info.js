 import coffeeGrano from './assets/products/coffee-product-1.png'
 import coffeeCapsule from './assets/products/coffee-capsule.png'
 import coffeePowder from './assets/products/coffee-powder.png'

 import block1 from './assets/collections/block-1.jpg'
 import block2 from './assets/collections/block-2.jpg'
 import block3 from './assets/collections/block-3.jpg'
 import block4 from './assets/collections/block-4.jpg'

 import backgroundCoffee1 from './assets/home_img/background-coffee-1.jpg'
 import backgroundCoffee2 from './assets/home_img/background-coffee-2.jpg'
 import backgroundCoffee3 from './assets/home_img/background-coffee-3.jpg'
 
 export const productsInfo=[
     {"collection":{
       "active":true,
       "name":"Qualità Oro",
       "id":1,
       "description":"Descubre cada mañana la excelencia del blend y saborea la sinfonía perfecta en una taza en casa.",
       "imageUrl":backgroundCoffee1,
       "backgroundSettings":"bg-[url(./assets/home_img/background-coffee-1.jpg)]  bg-size-[1500px] bg-no-repeat",
       "products":[
         {
           "imgUrl":coffeeGrano,
           "id":1,
           "description":"Qualità Oro es una combinación de seis variedades de granos Arábica procedentes de Centro y Sudamérica. La sinfonía perfecta de sabor que puedes disfrutar todos los días. Como cualquier familia italiana.",
           "category":"GRANOS DE CAFÉ",
           "categoryLink":"grano",
           "sliderSubtitle":"Una combinación de los Arábica más exquisitos. La armonía perfecta para un sabor excepcional siempre, desde 1956.",
           "name":"Qualità Oro en grano",
           "intensity":"5",
           "format":"pack",
           "quantity":"500g",
           "options":["500g", "1kg"],
           "perfilTitle":"Rico y con cuerpo",
           "perfilDescription":"Crema de café dorada de color cálido, notas de chocolate y frutos secos.",
           "notes":"Afrutado, Chocolate",
           "tueste":"Medio",
           "composicion":"Arábica y Robusta",
           "origen":"África, América del Sur, Sudeste del Asia",
           "price":2.99
           
         },
         {
           "imgUrl":coffeeCapsule,
           "id":2,
           "category":"CAPSULAS COMPATIBLES",
           "categoryLink":"capsula",
           "sliderSubtitle":"Una sinfonía perfecta de los mejores granos de café arábica, la máxima expresión de la mezcla de orígenes.",
           "name":"Qualità Oro",
           "intensity":"8",
           "format":"capsule",
           "quantity":"10",
            "options":["10", "20"],
           "perfilTitle":"Rico y con cuerpo",
           "perfilDescription":"Crema de café dorada de color cálido, notas de chocolate y frutos secos.",
           "notes":"Afrutado, Chocolate",
           "tueste":"Medio",
           "composicion":"Arábica y Robusta",
           "origen":"África, América del Sur, Sudeste del Asia",
           "price":2.99
         },
         {
           "imgUrl":coffeeGrano,
           "id":3,
           "category":"GRANOS DE CAFÉ",
           "categoryLink":"grano",
           "sliderSubtitle":"Una sinfonía perfecta de los mejores granos de café arábica, la máxima expresión de la mezcla de orígenes.",
           "name":"Qualità Oro en grano",
           "intensity":"5",
           "format":"pack",
           "quantity":"1kg",
            "options":["500g", "1kg"],
           "perfilTitle":"Rico y con cuerpo",
           "perfilDescription":"Crema de café dorada de color cálido, notas de chocolate y frutos secos.",
           "notes":"Afrutado, Chocolate",
           "tueste":"Medio",
           "composicion":"Arábica y Robusta",
           "origen":"África, América del Sur, Sudeste del Asia",
           "price":2.99
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
       "id":2,
       "description":"El espresso más auténtico. ¡Descubre el ADN auténticamente italiano con Lavazza!",
       "imageUrl":backgroundCoffee2,
       "backgroundSettings":"bg-[url(./assets/home_img/background-coffee-2.jpg)]  bg-size-[1800px] bg-no-repeat",
       "products":[
         {
           "imgUrl":coffeePowder,
           "id":4,
           "category":"CAFÉ MOLIDO",
           "categoryLink":"molido",
           "name":"Espresso Italiano Classico molido",
           "sliderSubtitle":"Si quieres un auténtico café de barista en casa, prueba nuestro blend Espresso Barista. Descubre nuestro café con tueste delicado de “tambor” especialmente seleccionado para ofrecer una experiencia cafetera de profesional.",
           "intensity":"5",
           "format":"pack",
           "quantity":"1kg",
            "options":["500g", "1kg"],
           "perfilTitle":"Rico y con cuerpo",
           "perfilDescription":"Crema de café dorada de color cálido, notas de chocolate y frutos secos.",
           "notes":"Afrutado, Chocolate",
           "tueste":"Medio",
           "composicion":"Arábica y Robusta",
           "origen":"África, América del Sur, Sudeste del Asia",
           "price":2.99
         },
         {
           "imgUrl":coffeeGrano,
           "id":5,
           "category":"GRANOS DE CAFÉ",
           "categoryLink":"grano",
           "sliderSubtitle":"Espresso Barista es la expresión del conocimiento experto de Lavazza en la elaboración de un café de calidad superior, para que te sientas como un auténtico barista. Disfruta del auténtico espresso de tueste italiano.",
           "name":"Espresso Italiano Classico en grano",
           "intensity":"5",
           "format":"pack",
           "quantity":"1kg",
            "options":["500g", "1kg"],
           "perfilTitle":"Rico y con cuerpo",
           "perfilDescription":"Crema de café dorada de color cálido, notas de chocolate y frutos secos.",
           "notes":"Afrutado, Chocolate",
           "tueste":"Medio",
           "composicion":"Arábica y Robusta",
           "origen":"África, América del Sur, Sudeste del Asia",
           "price":2.99
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
       "name":"Tierra",
       "id":3,
       "description":"Disfruta del sabor de cuidar de la naturaleza y de las personas: descubre nuestros blends orgánicos ¡Tierra!",
       "imageUrl":backgroundCoffee3,
       "backgroundSettings":"bg-[url(./assets/home_img/background-coffee-3.jpg)]  bg-size-[1500px] bg-no-repeat",
 
       "products":[
         {
           "imgUrl":coffeeCapsule,
           "id":6,
           "category":"CAPSULAS COMPATIBLES",
           "categoryLink":"capsula",
           "sliderSubtitle":"La armonía perfecta de los mejores granos de café Arábica con notas afrutadas y florales. Deléitate con la verdadera esencia de la elegancia y el sabor con nuestra ¡Tierra! for Planet.",
           "name":"¡Tierra! For Planet",
           "intensity":"7",
           "format":"capsule",
           "quantity":"10",
            "options":["10", "20"],
           "perfilTitle":"Rico y con cuerpo",
           "perfilDescription":"Crema de café dorada de color cálido, notas de chocolate y frutos secos.",
           "notes":"Afrutado, Chocolate",
           "tueste":"Medio",
           "composicion":"Arábica y Robusta",
           "origen":"África, América del Sur, Sudeste del Asia",
           "price":2.99
         },
         {
           "imgUrl":coffeeGrano,
           "id":7,
           "category":"GRANOS DE CAFÉ",
           "categoryLink":"grano",
           "sliderSubtitle":"Elige granos de café Tierra y disfruta de café recién molido con el inconfundible sabor a tueste italiano",
           "name":"¡Tierra! Bio-Organic for Planet Café en grano ",
           "intensity":"8",
           "format":"pack",
           "quantity":"1kg",
            "options":["500g", "1kg"],
           "perfilTitle":"Rico y con cuerpo",
           "perfilDescription":"Crema de café dorada de color cálido, notas de chocolate y frutos secos.",
           "notes":"Afrutado, Chocolate",
           "tueste":"Medio",
           "composicion":"Arábica y Robusta",
           "origen":"África, América del Sur, Sudeste del Asia",
           "price":2.99
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
     }}
 
   ]