import { TipoProducto } from '../tipo-producto';
import { Producto } from './../producto';


export const TIPOSLECHES: Producto[] = [
    {
        nombre: 'Colun Descremada', 
        marca: 'Colun',
        tipo: 'Descremada',
        energia: 32,
        proteina: 3.3,
        grasa: 0.05,
        carbohidratos: 4.7,
        colesterol: 0.16, 
        azucar: 4.7,
        sodio: 32,
        imagen: 'assets/images/lacteos/leche/colun_descremada.png'
    },{
        nombre: 'Colun Entera', 
        marca: 'Colun',
        tipo: 'Entera',
        energia: 59,
        proteina: 3.1,
        grasa: 3.1,
        carbohidratos: 4.6,
        colesterol: 10, 
        azucar: 4.6,
        sodio: 32,
        imagen: 'assets/images/lacteos/leche/colun_entera.png'
    },{
        nombre: 'Colun Semidescremada', 
        marca: 'Colun',
        tipo: 'Semidescremada',
        energia: 45,
        proteina: 3.2,
        grasa: 1.5,
        carbohidratos: 4.6,
        colesterol: 5, 
        azucar: 4.6,
        sodio: 33,
        imagen: 'assets/images/lacteos/leche/colun_semidescremada.png'
    },{
        nombre: 'Colun Semidescremada Sin lactosa', 
        marca: 'Colun',
        tipo: 'Semidescremada Sin lactosa',
        energia: 45,
        proteina: 3.2,
        grasa: 1.5,
        carbohidratos: 4.6,
        colesterol: 5, 
        azucar: 4.4,
        sodio: 40,
        imagen: 'assets/images/lacteos/leche/colun_semidescremadasinlactosa.png'
    },{
        nombre: 'Soprole Entera', 
        marca: 'Soprole',
        tipo: 'Entera',
        energia: 58,
        proteina: 3,
        grasa: 3.1,
        carbohidratos: 4.6,
        colesterol: 9.6, 
        azucar: 4.6,
        sodio: 38,
        imagen: 'assets/images/lacteos/leche/soprole_entera.png'
    },{
        nombre: 'Soprole Semidescremada', 
        marca: 'Soprole',
        tipo: 'Semidescremada',
        energia: 44,
        proteina: 3,
        grasa: 1.5,
        carbohidratos: 4.5,
        colesterol: 5.9, 
        azucar: 4.5,
        sodio: 25.1,
        imagen: 'assets/images/lacteos/leche/soprole_semidescremada.png'
    },{
        nombre: 'Soprole Descremada', 
        marca: 'Soprole',
        tipo: 'Descremada',
        energia: 32,
        proteina: 3,
        grasa: 0.12,
        carbohidratos: 4.6,
        colesterol: 1.6, 
        azucar: 4.6,
        sodio: 21.6,
        imagen: 'assets/images/lacteos/leche/soprole_descremada.png'
    },{
        nombre: 'Surlat Descremada sin lactosa', 
        marca: 'Surlat',
        tipo: 'Descremada sin lactosa',
        energia: 33,
        proteina: 3.1,
        grasa: 0.1,
        carbohidratos: 4.9,
        azucar: 4.8,
        sodio: 40,
        imagen: 'assets/images/lacteos/leche/surlat_descremadasinlactosa.png'
    },{
        nombre: 'Surlat Semidescremada sin lactosa', 
        marca: 'Surlat',
        tipo: 'Semidescremada sin lactosa',
        energia: 43,
        proteina: 3.1,
        grasa: 1.2,
        carbohidratos: 4.9,
        azucar: 4.7,
        sodio: 44,
        imagen: 'assets/images/lacteos/leche/surlat_semidescremadasinlactosa.png'
    },{
        nombre: 'Loncoleche Semidescremada', 
        marca: 'Loncoleche',
        tipo: 'Semidescremada',
        energia: 45,
        proteina: 3.2,
        grasa: 1.5,
        carbohidratos: 4.6,
        azucar: 4.6,
        sodio: 40,
        imagen: 'assets/images/lacteos/leche/loncoleche_semidescremada.png'
    },{
        nombre: 'Loncoleche Entera', 
        marca: 'Loncoleche',
        tipo: 'Entera',
        energia: 59,
        proteina: 3.1,
        grasa: 3.1,
        carbohidratos: 4.6,
        azucar: 4.6,
        sodio: 40,
        imagen: 'assets/images/lacteos/leche/loncoleche_entera.png'
    },{
        nombre: 'Loncoleche Descremada', 
        marca: 'Loncoleche',
        tipo: 'Descremada',
        energia: 33,
        proteina: 3.3,
        grasa: 0.1,
        carbohidratos: 4.8,
        azucar: 4.8,
        sodio: 32,
        imagen: 'assets/images/lacteos/leche/loncoleche_Descremada.png'
    },
    
];

export const TIPOSYOGURT: Producto[] = [
    {
        nombre: 'Danone Oikos no endulzado', 
        marca: 'Danone',
        tipo: 'Oikos no endulzado',
        energia: 98,
        proteina: 4.6,
        grasa: 4,
        carbohidratos: 6.5,
        colesterol: 19.7, 
        azucar: 5.7,
        sodio: 59,
        imagen: 'assets/images/lacteos/yogurt/danone_iokos.png'
    },{
        nombre: 'Soprole Natural', 
        marca: 'Soprole',
        tipo: 'Natural',
        energia: 70,
        proteina: 3.6,
        grasa: 3.1,
        carbohidratos: 6.9,
        colesterol: 10.6, 
        azucar: 6.9,
        sodio: 55,
        imagen: 'assets/images/lacteos/yogurt/soprole_natural.png'
    },{
        nombre: 'Soprole Protein endulzado', 
        marca: 'Soprole',
        tipo: 'Protein endulzado',
        energia: 68,
        proteina: 6.6,
        grasa: 1.8,
        carbohidratos: 6.3,
        colesterol: 11.4, 
        azucar: 6.3,
        sodio: 65,
        imagen: 'assets/images/lacteos/yogurt/soprole_proteinendulzado.png'
    },
]

export const LECHE : TipoProducto = {
    valor: 'leche',
    nombre: 'Leche',
    productos: TIPOSLECHES
}

export const YOGURT : TipoProducto = {
    valor: 'yogurt',
    nombre: 'Yogurt',
    productos: TIPOSYOGURT
}