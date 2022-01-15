import { TipoProducto } from '../tipo-producto';
import { Producto } from './../producto';


export const TIPOSLECHES: Producto[] = [
    {
        name: 'Colun Descremada', 
        marca: 'Colun',
        tipo: 'Descremada',
        energia: 32,
        proteina: 3.3,
        grasa: 0.05,
        carbohidratos: 4.7,
        colesterol: 0.16, 
        azucar: 4.7,
        sodio: 32,
        imagen: 'assets/images/lacteos/colun_descremada.png'
    },{
        name: 'Colun Entera', 
        marca: 'Colun',
        tipo: 'Entera',
        energia: 59,
        proteina: 3.1,
        grasa: 3.1,
        carbohidratos: 4.6,
        colesterol: 10, 
        azucar: 4.6,
        sodio: 32,
        imagen: 'assets/images/lacteos/colun_entera.png'
    },{
        name: 'Colun Semidescremada', 
        marca: 'Colun',
        tipo: 'Semidescremada',
        energia: 45,
        proteina: 3.2,
        grasa: 1.5,
        carbohidratos: 4.6,
        colesterol: 5, 
        azucar: 4.6,
        sodio: 33,
        imagen: 'assets/images/lacteos/colun_semidescremada.png'
    },{
        name: 'Colun Semidescremada Sin lactosa', 
        marca: 'Colun',
        tipo: 'Semidescremada Sin lactosa',
        energia: 45,
        proteina: 3.2,
        grasa: 1.5,
        carbohidratos: 4.6,
        colesterol: 5, 
        azucar: 4.4,
        sodio: 40,
        imagen: 'assets/images/lacteos/colun_semidescremadasinlactosa.png'
    },{
        name: 'Soprole Entera', 
        marca: 'Soprole',
        tipo: 'Entera',
        energia: 58,
        proteina: 3,
        grasa: 3.1,
        carbohidratos: 4.6,
        colesterol: 9.6, 
        azucar: 4.6,
        sodio: 38,
        imagen: 'assets/images/lacteos/soprole_entera.png'
    },{
        name: 'Soprole Semidescremada', 
        marca: 'Soprole',
        tipo: 'Semidescremada',
        energia: 44,
        proteina: 3,
        grasa: 1.5,
        carbohidratos: 4.5,
        colesterol: 5.9, 
        azucar: 4.5,
        sodio: 25.1,
        imagen: 'assets/images/lacteos/soprole_semidescremada.png'
    },{
        name: 'Soprole Descremada', 
        marca: 'Soprole',
        tipo: 'Descremada',
        energia: 32,
        proteina: 3,
        grasa: 0.12,
        carbohidratos: 4.6,
        colesterol: 1.6, 
        azucar: 4.6,
        sodio: 21.6,
        imagen: 'assets/images/lacteos/soprole_descremada.png'
    },{
        name: 'Surlat Descremada sin lactosa', 
        marca: 'Surlat',
        tipo: 'Descremada sin lactosa',
        energia: 33,
        proteina: 3.1,
        grasa: 0.1,
        carbohidratos: 4.9,
        azucar: 4.8,
        sodio: 40,
        imagen: 'assets/images/lacteos/surlat_descremadasinlactosa.png'
    },{
        name: 'Surlat Semidescremada sin lactosa', 
        marca: 'Surlat',
        tipo: 'Semidescremada sin lactosa',
        energia: 43,
        proteina: 3.1,
        grasa: 1.2,
        carbohidratos: 4.9,
        azucar: 4.7,
        sodio: 44,
        imagen: 'assets/images/lacteos/surlat_semidescremadasinlactosa.png'
    },{
        name: 'Loncoleche Semidescremada', 
        marca: 'Loncoleche',
        tipo: 'Semidescremada',
        energia: 45,
        proteina: 3.2,
        grasa: 1.5,
        carbohidratos: 4.6,
        azucar: 4.6,
        sodio: 40,
        imagen: 'assets/images/lacteos/loncoleche_semidescremada.png'
    },{
        name: 'Loncoleche Entera', 
        marca: 'Loncoleche',
        tipo: 'Entera',
        energia: 59,
        proteina: 3.1,
        grasa: 3.1,
        carbohidratos: 4.6,
        azucar: 4.6,
        sodio: 40,
        imagen: 'assets/images/lacteos/loncoleche_entera.png'
    },{
        name: 'Loncoleche Descremada', 
        marca: 'Loncoleche',
        tipo: 'Descremada',
        energia: 33,
        proteina: 3.3,
        grasa: 0.1,
        carbohidratos: 4.8,
        azucar: 4.8,
        sodio: 32,
        imagen: 'assets/images/lacteos/loncoleche_Descremada.png'
    },
    
];


export const LECHE : TipoProducto = {
    valor: 'leche',
    nombre: 'Leche',
    productos: TIPOSLECHES
}