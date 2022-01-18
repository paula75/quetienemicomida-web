import { Producto } from "../producto";
import { TipoProducto } from "../tipo-producto";


export const TIPOSGALLETAS: Producto[] = [

    {
        nombre: 'Oreo Chocolate crema', 
        marca: 'Oreo',
        tipo: 'Chocolate crema',
        energia: 480,
        proteina: 4,
        grasa: 20,
        carbohidratos: 68,
        colesterol: 0, 
        azucar: 40,
        sodio: 450,
        imagen: 'assets/images/dulces/galletas/oreo_chocolate.png'
    }, {
        nombre: 'Costa Donuts leche', 
        marca: 'Costa',
        tipo: 'Donuts leche',
        energia: 506,
        proteina: 5.4,
        grasa: 24,
        carbohidratos: 67,
        colesterol: 3.28, 
        azucar: 35.6,
        sodio: 267,
        imagen: 'assets/images/dulces/galletas/costa_donuts.png'
    }, {
        nombre: 'McKay Kuky', 
        marca: 'McKay',
        tipo: 'Kuky',
        energia: 506,
        proteina: 6.8,
        grasa: 22.1,
        carbohidratos: 70,
        colesterol: 2, 
        azucar: 25.1,
        sodio: 386,
        imagen: 'assets/images/dulces/galletas/mckay_kuky.png'
    },{
        nombre: 'McKay Morocha', 
        marca: 'McKay',
        tipo: 'Morocha',
        energia: 495,
        proteina: 5.3,
        grasa: 21,
        carbohidratos: 71.2,
        colesterol: 3, 
        azucar: 37.2,
        sodio: 170,
        imagen: 'assets/images/dulces/galletas/mckay_morocha.png'
    },{
        nombre: 'Mizos Chocolate', 
        marca: 'Mizos',
        tipo: 'Chocolate',
        energia: 396,
        proteina: 5.9,
        grasa: 12.9,
        carbohidratos: 64,
        azucar: 14.5,
        sodio: 6,
        imagen: 'assets/images/dulces/galletas/mizos_chocolate.png'
    },{
        nombre: 'Mizos Chocolate y naranja', 
        marca: 'Mizos',
        tipo: 'Chocolate y naranja',
        energia: 440,
        proteina: 5.6,
        grasa: 18.1,
        carbohidratos: 61.9,
        azucar: 26,
        sodio: 40,
        imagen: 'assets/images/dulces/galletas/mizos_chocolatenaranja.png'
    },{
        nombre: 'Costa Chocochips', 
        marca: 'Costa',
        tipo: 'Chocochips',
        energia: 517,
        proteina: 4.3,
        grasa: 25.9,
        carbohidratos: 66.6,
        azucar: 32.9,
        sodio: 334,
        imagen: 'assets/images/dulces/galletas/costa_chocochips.png'
    },{
        nombre: 'Selz Cracker', 
        marca: 'Selz',
        tipo: 'Cracker',
        energia: 443,
        proteina: 11,
        grasa: 15,
        carbohidratos: 66,
        azucar: 0.8,
        sodio: 689,
        imagen: 'assets/images/dulces/galletas/selz_cracker.png'
    },{
        nombre: 'Selz Clásicas', 
        marca: 'Selz',
        tipo: 'Clásicas',
        energia: 484,
        proteina: 8.7,
        grasa: 24,
        carbohidratos: 59,
        azucar: 6.6,
        sodio: 883,
        imagen: 'assets/images/dulces/galletas/selz_clasica.png'
    },{
        nombre: 'Vivo Salvado', 
        marca: 'Vivo',
        tipo: 'Salvado',
        energia: 404,
        proteina: 8.8,
        grasa: 11.7,
        carbohidratos: 65.9,
        azucar: 9.9,
        sodio: 393,
        imagen: 'assets/images/dulces/galletas/vivo_salvado.png'
    },{
        nombre: 'Costa Frac chocolate', 
        marca: 'Costa',
        tipo: 'Frac chocolate',
        energia: 486,
        proteina: 4.7,
        grasa: 21.2,
        carbohidratos: 69.3,
        azucar: 33.2,
        sodio: 330,
        imagen: 'assets/images/dulces/galletas/costa_fracchocolate.png'
    },
    {
        nombre: 'Mckay Soda clásica', 
        marca: 'Mckay',
        tipo: 'Soda clásica',
        energia: 427,
        proteina: 9.9,
        grasa: 8.6,
        colesterol: 1,
        carbohidratos: 77.6,
        azucar: 2.9,
        sodio: 398,
        imagen: 'assets/images/dulces/galletas/mckay_sodaclasica.png'
    },{
        nombre: 'Mckay Agua sin sal', 
        marca: 'Mckay',
        tipo: 'Agua sin sal',
        energia: 423,
        proteina: 9.6,
        grasa: 8.5,
        colesterol: 1,
        carbohidratos: 77,
        azucar: 2.8,
        sodio: 12,
        imagen: 'assets/images/dulces/galletas/mckay_aguasinsal.png'
    },

];

export const GALLETA : TipoProducto = {
    valor: 'galleta',
    nombre: 'Galleta',
    productos: TIPOSGALLETAS
}