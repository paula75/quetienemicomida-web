import { Producto } from "../producto";
import { TipoProducto } from "../tipo-producto";



export const VEGETARIANOS: Producto[] = [

    {
        nombre: 'La Crianza Nugget de verdura', 
        marca: 'La Crianza',
        tipo: 'Nugget de verdura',
        energia: 251,
        proteina: 5.9,
        grasa: 11.9,
        carbohidratos: 30,
        colesterol: 0.3, 
        azucar: 1.9,
        sodio: 359,
        imagen: 'assets/images/congelados/vegetarianosveganos/lacrianza_nuggetsverduras.png'
    },{
        nombre: 'La Crianza Hamburguesa de soya', 
        marca: 'La Crianza',
        tipo: 'Hamburguesa de soya',
        energia: 146,
        proteina: 16.4,
        grasa: 7.09,
        carbohidratos: 4.2,
        colesterol: 0, 
        azucar: 0.5,
        sodio: 269,
        imagen: 'assets/images/congelados/vegetarianosveganos/lacrianza_hamburguesasoya.png'
    },{
        nombre: 'La Crianza Hamburguesa de porotos negros', 
        marca: 'La Crianza',
        tipo: 'Hamburguesa de porotos negros',
        energia: 104,
        proteina: 7.1,
        grasa: 0.77,
        carbohidratos: 17.2,
        colesterol: 0, 
        azucar: 3.53,
        sodio: 302,
        imagen: 'assets/images/congelados/vegetarianosveganos/lacrianza_hamburguesaporotos.png'
    },{
        nombre: 'La Crianza Nuggets chicken free', 
        marca: 'La Crianza',
        tipo: 'Nuggets chicken free',
        energia: 245,
        proteina: 9.86,
        grasa: 14.3,
        carbohidratos: 19.1,
        colesterol: 0, 
        azucar: 2.7,
        sodio: 371,
        imagen: 'assets/images/congelados/vegetarianosveganos/lacrianza_chickenfreenuggets.png'
    },{
        nombre: 'Not Burger Hamburguesa vegana', 
        marca: 'Not Burger',
        tipo: 'Hamburguesa vegana',
        energia: 231,
        proteina: 16,
        grasa: 16.7,
        carbohidratos: 2.7,
        colesterol: 0, 
        azucar: 5.6,
        sodio: 399,
        imagen: 'assets/images/congelados/vegetarianosveganos/notburguer_hamburguesavegana.png'
    },{
        nombre: 'Not Burger Chicken burger', 
        marca: 'Not Burger',
        tipo: 'Chicken burger',
        energia: 174,
        proteina: 13.7,
        grasa: 12.4,
        carbohidratos: 1.4,
        colesterol: 0, 
        azucar: 0.7,
        sodio: 616,
        imagen: 'assets/images/congelados/vegetarianosveganos/notburger_chickenburger.png'
    },{
        nombre: 'La Crianza Hamburguesa de garbanzos', 
        marca: 'La Crianza',
        tipo: 'Hamburguesa de garbanzos',
        energia: 150,
        proteina: 8.23,
        grasa: 2.7,
        carbohidratos: 23.2,
        colesterol: 0, 
        azucar: 5.87,
        sodio: 251,
        imagen: 'assets/images/congelados/vegetarianosveganos/lacrianza_hamburguesagarbanzos.png'
    },{
        nombre: 'Mister Veggie Hamburguesa de soya', 
        marca: 'Mister Veggie',
        tipo: 'Hamburguesa de soya',
        energia: 175,
        proteina: 22.2,
        grasa: 6.5,
        carbohidratos: 6.9,
        colesterol: 1, 
        azucar: 0.9,
        sodio: 613,
        imagen: 'assets/images/congelados/vegetarianosveganos/msiterveggie_hamburguesasoya.png'
    },{
        nombre: 'Mister Veggie Milanesa de soya', 
        marca: 'Mister Veggie',
        tipo: 'Milanesa de soya',
        energia: 274,
        proteina: 19,
        grasa: 15.6,
        carbohidratos: 14.4,
        colesterol: 3, 
        azucar: 1.6,
        sodio: 451,
        imagen: 'assets/images/congelados/vegetarianosveganos/oreo_chocolate.png'
    },{
        nombre: 'Receta del Abuelo Vegan crispy', 
        marca: 'Receta del Abuelo',
        tipo: 'Vegan crispy',
        energia: 284,
        proteina: 22.2,
        grasa: 19.8,
        carbohidratos: 4.3,
        colesterol: 0, 
        azucar: 0.8,
        sodio: 522,
        imagen: 'assets/images/congelados/vegetarianosveganos/recetaabuelo_vegancrispy.png'
    },{
        nombre: 'Rikü Sucedáneo de chorizo vegano', 
        marca: 'Rikü',
        tipo: 'Sucedáneo de chorizo vegano',
        energia: 185,
        proteina: 20.4,
        grasa: 8,
        carbohidratos: 8.72,
        colesterol: 0, 
        azucar: 3.36,
        sodio: 462,
        imagen: 'assets/images/congelados/vegetarianosveganos/riku_chorizovegano.png'
    },{
        nombre: 'Beyond Meat Hamburguesa vegana', 
        marca: 'Beyond Meat',
        tipo: 'Hamburguesa vegana',
        energia: 239,
        proteina: 18,
        grasa: 18,
        carbohidratos: 4,
        colesterol: 0, 
        azucar: 0,
        sodio: 336,
        imagen: 'assets/images/congelados/vegetarianosveganos/beyondburger_hamburgesa.png'
    },{
        nombre: 'Mister Veggie Nuggets de soya', 
        marca: 'Mister Veggie',
        tipo: 'Nuggets de soya',
        energia: 278,
        proteina: 13.4,
        grasa: 18.3,
        carbohidratos: 14.8,
        colesterol: 1, 
        azucar: 1.4,
        sodio: 600,
        imagen: 'assets/images/congelados/vegetarianosveganos/misterveggie_nuggetssoya.png'
    },{
        nombre: 'La crianza Tortilla de verdura', 
        marca: 'La crianza',
        tipo: 'Tortilla de verdura',
        energia: 134,
        proteina: 5.8,
        grasa: 4.6,
        carbohidratos: 17.2,
        colesterol: 0, 
        azucar: 0.5,
        sodio: 342,
        imagen: 'assets/images/congelados/vegetarianosveganos/lacrianza_tortillaverduras.png'
    },
]

export const APANADOS: Producto[] = [

    {
        nombre: 'Super Pollo Crocante', 
        marca: 'Super Pollo',
        tipo: 'Crocante',
        energia: 224,
        proteina: 11.8,
        grasa: 11.3,
        carbohidratos: 18.9,
        colesterol: 9.14, 
        azucar: 0.63,
        sodio: 395,
        imagen: 'assets/images/congelados/apanados/superpollo_crocante.png'
    },{
        nombre: 'Super Pollo Nuggets de pollo', 
        marca: 'Super Pollo',
        tipo: 'Nuggets de pollo',
        energia: 228,
        proteina: 12.1,
        grasa: 12.8,
        carbohidratos: 16.1,
        colesterol: 40, 
        azucar: 1,
        sodio: 360,
        imagen: 'assets/images/congelados/apanados/superpollo_nuggetspollo.png'
    },{
        nombre: 'La Crianza Nuggets de pollo', 
        marca: 'La Crianza',
        tipo: 'Nuggets de pollo',
        energia: 228,
        proteina: 12.6,
        grasa: 14.6,
        carbohidratos: 11.6,
        colesterol: 31, 
        azucar: 1.7,
        sodio: 363,
        imagen: 'assets/images/congelados/apanados/lacrianza_nuggerspollo.png'
    },{
        nombre: 'Receta del Abuelo Suprema de pollo jamón y queso', 
        marca: 'Receta del Abuelo',
        tipo: 'Suprema de pollo jamón y queso',
        energia: 225,
        proteina: 12.9,
        grasa: 13.9,
        carbohidratos: 12.1,
        colesterol: 28, 
        azucar: 1,
        sodio: 759,
        imagen: 'assets/images/congelados/apanados/recetaabuelo_supremajamonqueso.png'
    },{
        nombre: 'Cuisine&Co Mozzarella sticks', 
        marca: 'Cuisine&Co',
        tipo: 'Mozzarella sticks',
        energia: 242,
        proteina: 10.6,
        grasa: 10.8,
        carbohidratos: 25.5,
        colesterol: 18, 
        azucar: 2.4,
        sodio: 451,
        imagen: 'assets/images/congelados/apanados/cuisine_mozarellasticks.png'
    },{
        nombre: 'Sadia Nugget crocante', 
        marca: 'Sadia',
        tipo: 'Nugget crocante',
        energia: 239,
        proteina: 10.7,
        grasa: 13.4,
        carbohidratos: 18.9,
        colesterol: 22.1, 
        azucar: 2,
        sodio: 605,
        imagen: 'assets/images/congelados/apanados/sadia_nuggetspollo.png'
    },{
        nombre: 'Sadia Nugget pollo kids', 
        marca: 'Sadia',
        tipo: 'Nugget pollo kids',
        energia: 215,
        proteina: 12.5,
        grasa: 10.3,
        carbohidratos: 17.9,
        colesterol: 23.3, 
        azucar: 0.34,
        sodio: 270,
        imagen: 'assets/images/congelados/apanados/sadia_nuggetskids.png'
    },{
        nombre: 'Receta del Abuelo Croquetas de pollo', 
        marca: 'Receta del Abuelo',
        tipo: 'Croquetas de pollo',
        energia: 240,
        proteina: 13.8,
        grasa: 14.9,
        carbohidratos: 12.6,
        colesterol: 28, 
        azucar: 1.9,
        sodio: 390,
        imagen: 'assets/images/congelados/apanados/recetaabuelo_croquetasspollo.png'
    },{
        nombre: 'Receta del Abuelo Nuggets de pollo', 
        marca: 'Receta del Abuelo',
        tipo: 'Nuggets de pollo',
        energia: 204,
        proteina: 13.2,
        grasa: 12.1,
        carbohidratos: 10.5,
        colesterol: 26, 
        azucar: 0.5,
        sodio: 553,
        imagen: 'assets/images/congelados/apanados/recetaabuelo_nuggetspollo.png'
    },
]

export const CONGELADOSVEGANOS : TipoProducto = {
    valor: 'vegetarianos',
    nombre: 'Vegetarianos y Veganos',
    productos: VEGETARIANOS
}

export const CONGELADOSAPANADOS : TipoProducto = {
    valor: 'apanados',
    nombre: 'Apanados',
    productos: APANADOS
}