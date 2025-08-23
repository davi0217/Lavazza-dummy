import atlanticaGrano from './assets/products/atlántica-grano.png'
import atlanticaMolido from './assets/products/atlántica-molido.png'
import atlanticaCapsula from './assets/products/atlántica-capsula.png'
import mediterraneaGrano from './assets/products/mediterránea-grano.png'
import mediterraneaMolido from './assets/products/mediterránea-molido.png'
import mediterraneaCapsula from './assets/products/mediterránea-capsula.png'
import arcanaGrano from './assets/products/arcana-grano.png'
import arcanaMolido from './assets/products/arcana-molido.png'
import arcanaCapsula from './assets/products/arcana-capsula.png'

 import block1 from './assets/collections/block-1.jpg'
 import block2 from './assets/collections/block-2.jpg'
 import block3 from './assets/collections/block-3.jpg'
 import block4 from './assets/collections/block-4.jpg'

 import backgroundCoffee1 from './assets/home_img/background-coffee-1.jpg'
 import backgroundCoffee2 from './assets/home_img/background-coffee-2.jpg'
 import backgroundCoffee3 from './assets/home_img/background-coffee-3.jpg'
 


     export const productsInfo = [
  {
    "collection": {
      "active": true,
      "name": "Atlántica",
      "id": 1,
      "claim":"Fresco, ancestral, profundo",
       "granoClaim": "La frescura del norte en cada grano. Despierta tus sentidos con notas florales y minerales.",
    "molidoClaim": "Tradición celta para tu ritual diario. Un café equilibrado con acidez brillante y final limpio.",
    "capsulaClaim": "Intensidad fresca y viva en cada cápsula. Disfruta del Atlántico sin salir de casa.",
      "description": "Inspirada en el carácter fresco y mineral del norte de España, con raíces celtas y aromas de la tierra húmeda y el mar.",
      "imageUrl": backgroundCoffee1,
      "backgroundSettings": "bg-[url(./assets/home_img/background-coffee-1.jpg)]  bg-size-[1500px] bg-no-repeat",
      "products": [

        {
          "collectionId":1,
          "imgUrl": atlanticaGrano,
          "id": 1,
          "description": "Un blend de altura con frescura chispeante y notas florales, evocando el verde Atlántico.",
          "category": "GRANOS DE CAFÉ",
          "categoryLink": "grano",
          "sliderSubtitle": "La fuerza de la tierra húmeda y el aire salino en cada grano.",
          "name": "Brezo en grano",
          "intensity": "6",
          "format": "pack",
          "quantity": "500g",
          "options": ["500g", "1kg"],
          "perfilTitle": "Floral y fresco",
          "perfilDescription": "Notas de brezo silvestre con un final delicado.",
          "notes": "Floral, Herbal",
          "tueste": "Medio",
          "composicion": "Arábica",
          "origen": "Galicia, Norte de España",
          "price": 3.49
        },
        {
          "collectionId":1,
          "imgUrl": atlanticaCapsula,
          "id": 2,
          "category": "CAPSULAS COMPATIBLES",
          "categoryLink": "capsula",
          "sliderSubtitle": "Intensidad terrosa inspirada en la roca y la montaña.",
          "name": "Pedra cápsulas",
          "intensity": "7",
          "format": "capsule",
          "quantity": "10",
          "options": ["10", "20"],
          "perfilTitle": "Mineral y robusto",
          "perfilDescription": "Un espresso con cuerpo y final persistente.",
          "notes": "Terroso, Cacao",
          "tueste": "Oscuro",
          "composicion": "Arábica y Robusta",
          "origen": "España, Centroamérica",
          "price": 3.29
        },
        {
          "collectionId":1,
          "imgUrl": atlanticaGrano,
          "id": 3,
          "category": "GRANOS DE CAFÉ",
          "categoryLink": "grano",
          "sliderSubtitle": "Un café chispeante como la lluvia fina.",
          "name": "Orvallo en grano",
          "intensity": "5",
          "format": "pack",
          "quantity": "1kg",
          "options": ["500g", "1kg"],
          "perfilTitle": "Ligero y vivo",
          "perfilDescription": "Notas cítricas y minerales, con acidez brillante.",
          "notes": "Cítrico, Mineral",
          "tueste": "Claro",
          "composicion": "Arábica",
          "origen": "Etiopía, Galicia",
          "price": 4.10
        },
        {
          "collectionId":1,
          "imgUrl": atlanticaMolido,
          "id": 4,
          "category": "CAFÉ MOLIDO",
          "categoryLink": "molido",
          "sliderSubtitle": "Tradición celta en cada sorbo.",
          "name": "Atlántica Molido Tradicional",
          "intensity": "6",
          "format": "pack",
          "quantity": "500g",
          "options": ["250g", "500g"],
          "perfilTitle": "Suave y equilibrado",
          "perfilDescription": "Notas herbales con toques de nuez.",
          "notes": "Herbal, Nuez",
          "tueste": "Medio",
          "composicion": "Arábica y Robusta",
          "origen": "España, Brasil",
          "price": 2.89
        }
      ],
      "blocks": [
        {
          "title": "ORÍGENES",
          "description": "Una colección que se inspira en el norte húmedo y sus raíces celtas.",
          "imgUrl": block1
        },
        {
          "title": "BLEND",
          "description": "Frescura, mineralidad y equilibrio en cada mezcla.",
          "imgUrl": block2
        },
        {
          "title": "AROMA",
          "description": "Notas de lluvia fina, hierba fresca y flores silvestres.",
          "imgUrl": block3
        },
        {
          "title": "VARIEDADES",
          "description": "Disponible en cápsula, grano y molido para cada ritual.",
          "imgUrl": block4
        }
      ]
    }
  },
  {
    "collection": {
      "active": true,
      "name": "Mediterránea",
      "id": 2,
      "claim":"Luminoso, cálido, eterno" ,
       "granoClaim": "Calidez y luz mediterránea en cada grano. Notas suaves de pan tostado y almendra para disfrutar.",
    "molidoClaim": "Ideal para sobremesas compartidas. Un café redondo con aroma dulce y cuerpo equilibrado.",
    "capsulaClaim": "El sabor del Mediterráneo en cápsula. Aromático, suave y perfecto para cualquier momento del día.",
      "description": "La calidez del sol, la tradición de la sobremesa y los sabores del Mediterráneo en cada taza.",
      "imageUrl": backgroundCoffee2,
      "backgroundSettings": "bg-[url(./assets/home_img/background-coffee-2.jpg)]  bg-size-[1800px] bg-no-repeat",
      "products": [
        {
          "collectionId":2,
          "imgUrl": mediterraneaMolido,
          "id": 5,
          "category": "CAFÉ MOLIDO",
          "categoryLink": "molido",
          "name": "Solera molido",
          "sliderSubtitle": "Inspirado en la tradición de compartir bajo el sol.",
          "intensity": "5",
          "format": "pack",
          "quantity": "500g",
          "options": ["250g", "500g"],
          "perfilTitle": "Suave y aromático",
          "perfilDescription": "Un café redondo con notas dulces y de pan tostado.",
          "notes": "Dulce, Pan Tostado",
          "tueste": "Medio",
          "composicion": "Arábica",
          "origen": "España, Colombia",
          "price": 2.99
        },
        {
          "collectionId":2,
          "imgUrl": mediterraneaGrano,
          "id": 6,
          "category": "GRANOS DE CAFÉ",
          "categoryLink": "grano",
          "sliderSubtitle": "Un blend que recuerda al viento Tramontana.",
          "name": "Tramontana en grano",
          "intensity": "7",
          "format": "pack",
          "quantity": "1kg",
          "options": ["500g", "1kg"],
          "perfilTitle": "Aromático y especiado",
          "perfilDescription": "Notas de especias dulces y final prolongado.",
          "notes": "Especiado, Dulce",
          "tueste": "Oscuro",
          "composicion": "Arábica y Robusta",
          "origen": "Italia, España",
          "price": 4.20
        },
        {
                    "collectionId":2,

          "imgUrl": mediterraneaCapsula,
          "id": 7,
          "category": "CAPSULAS COMPATIBLES",
          "categoryLink": "capsula",
          "sliderSubtitle": "Un café dulce y delicado para los momentos de sobremesa.",
          "name": "Almendra cápsulas",
          "intensity": "6",
          "format": "capsule",
          "quantity": "10",
          "options": ["10", "20"],
          "perfilTitle": "Delicado y dulce",
          "perfilDescription": "Notas suaves a almendra tostada y miel.",
          "notes": "Almendra, Miel",
          "tueste": "Medio",
          "composicion": "Arábica",
          "origen": "Mediterráneo",
          "price": 3.49
        },
        {
                    "collectionId":2,

          "imgUrl": mediterraneaGrano,
          "id": 8,
          "category": "GRANOS DE CAFÉ",
          "categoryLink": "grano",
          "sliderSubtitle": "La esencia del Mediterráneo en grano.",
          "name": "Mediterránea Clásico en grano",
          "intensity": "5",
          "format": "pack",
          "quantity": "500g",
          "options": ["500g", "1kg"],
          "perfilTitle": "Suave y equilibrado",
          "perfilDescription": "Toques de pan dulce y frutos secos.",
          "notes": "Pan Dulce, Frutos Secos",
          "tueste": "Claro",
          "composicion": "Arábica y Robusta",
          "origen": "España, Grecia",
          "price": 3.10
        }
      ],
      "blocks": [
        {
          "title": "ORÍGENES",
          "description": "Inspirada en la calidez del Mediterráneo, sus sobremesas y su luz.",
          "imgUrl": block1
        },
        {
          "title": "BLEND",
          "description": "Aromas suaves y dulces con cuerpo redondo.",
          "imgUrl": block2
        },
        {
          "title": "AROMA",
          "description": "Notas de pan tostado, almendra y especias.",
          "imgUrl": block3
        },
        {
          "title": "VARIEDADES",
          "description": "Disponible en cápsulas, molido y grano.",
          "imgUrl": block4
        }
      ]
    }
  },
  {
    "collection": {
      "active": true,
      "name": "Arcana",
      "id": 3,
      "claim":"Misterioso, intenso, único",
      "granoClaim": "Descubre la profundidad de Arcana en cada grano. Aromas especiados y terrosos que envuelven tus sentidos.",
    "molidoClaim": "Un café intenso y misterioso para los amantes de lo oculto. Final prolongado y notas de especias oscuras.",
    "capsulaClaim": "El misterio servido en cápsula. Profundo, aromático y con carácter que perdura.",
      "description": "La colección misteriosa: profunda, especiada, con raíces en la tradición oculta de la península.",
      "imageUrl": backgroundCoffee3,
      "backgroundSettings": "bg-[url(./assets/home_img/background-coffee-3.jpg)]  bg-size-[1500px] bg-no-repeat",
      "products": [
        {
          "collectionId":3,
          "imgUrl": arcanaCapsula,
          "id": 9,
          "category": "CAPSULAS COMPATIBLES",
          "categoryLink": "capsula",
          "sliderSubtitle": "Notas especiadas y un aroma envolvente.",
          "name": "Canela cápsulas",
          "intensity": "8",
          "format": "capsule",
          "quantity": "10",
          "options": ["10", "20"],
          "perfilTitle": "Especiado y aromático",
          "perfilDescription": "Un café con toques cálidos de canela y cacao.",
          "notes": "Canela, Cacao",
          "tueste": "Oscuro",
          "composicion": "Arábica y Robusta",
          "origen": "Oriente Medio, España",
          "price": 3.79
        },
        {
         "collectionId":3,
          "imgUrl": arcanaGrano,
          "id": 10,
          "category": "GRANOS DE CAFÉ",
          "categoryLink": "grano",
          "sliderSubtitle": "Intensidad dorada como el azafrán.",
          "name": "Zafrán en grano",
          "intensity": "9",
          "format": "pack",
          "quantity": "1kg",
          "options": ["500g", "1kg"],
          "perfilTitle": "Profundo y exótico",
          "perfilDescription": "Notas terrosas con un final especiado.",
          "notes": "Terroso, Especiado",
          "tueste": "Oscuro",
          "composicion": "Arábica",
          "origen": "India, España",
          "price": 4.50
        },
        {
          "collectionId":3,
          "imgUrl": arcanaMolido,
          "id": 11,
          "category": "CAFÉ MOLIDO",
          "categoryLink": "molido",
          "sliderSubtitle": "El misterio de la tierra en tu taza.",
          "name": "Arcilla molido",
          "intensity": "7",
          "format": "pack",
          "quantity": "500g",
          "options": ["250g", "500g"],
          "perfilTitle": "Terroso y fuerte",
          "perfilDescription": "Notas ahumadas con un cuerpo persistente.",
          "notes": "Ahumado, Mineral",
          "tueste": "Medio",
          "composicion": "Arábica y Robusta",
          "origen": "Yemen, España",
          "price": 3.39
        },
        {
           "collectionId":3,
          "imgUrl": arcanaGrano,
          "id": 12,
          "category": "GRANOS DE CAFÉ",
          "categoryLink": "grano",
          "sliderSubtitle": "El secreto de los aromas ocultos.",
          "name": "Arcana Reserva en grano",
          "intensity": "10",
          "format": "pack",
          "quantity": "500g",
          "options": ["500g", "1kg"],
          "perfilTitle": "Intenso y misterioso",
          "perfilDescription": "Toques de especias oscuras y final prolongado.",
          "notes": "Clavo, Pimienta Negra",
          "tueste": "Oscuro",
          "composicion": "Arábica",
          "origen": "Etiopía, Yemen",
          "price": 5.10
        }
      ],
      "blocks": [
        {
          "title": "ORÍGENES",
          "description": "Inspirada en las tradiciones ocultas y la riqueza especiada.",
          "imgUrl": block1
        },
        {
          "title": "BLEND",
          "description": "Mezclas intensas con notas especiadas y profundas.",
          "imgUrl": block2
        },
        {
          "title": "AROMA",
          "description": "Aromas de canela, azafrán y humo sutil.",
          "imgUrl": block3
        },
        {
          "title": "VARIEDADES",
          "description": "Disponible en cápsula, grano y molido, para quienes buscan intensidad.",
          "imgUrl": block4
        }
      ]
    }
  }
]
