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
        imagen: 'assets/images/lacteos/leche/loncoleche_descremada.png'
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
        imagen: 'assets/images/lacteos/yogurt/danone_oikos.png'
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
    },{
        nombre: 'Colun Batido vainilla', 
        marca: 'Colun',
        tipo: 'Batido vainilla',
        energia: 84,
        proteina: 3.7,
        grasa: 2.2,
        carbohidratos: 12.4,
        colesterol: 7, 
        azucar: 9.9,
        sodio: 45,
        imagen: 'assets/images/lacteos/yogurt/colun_batidovainilla.png'
    },{
        nombre: 'Nestle Griego sin endulzar', 
        marca: 'Nestle',
        tipo: 'Griego sin endulzar',
        energia: 99,
        proteina: 3.7,
        grasa: 5.3,
        carbohidratos: 9,
        colesterol: 19, 
        azucar: 6.2,
        sodio: 87,
        imagen: 'assets/images/lacteos/yogurt/nestle_griegosinendulzar.png'
    },{
        nombre: 'Colun Light sin lactosa', 
        marca: 'Colun',
        tipo: 'Light sin lactosa',
        energia: 53,
        proteina: 4.5,
        grasa: 0.1,
        carbohidratos: 8.5,
        colesterol: 0.3, 
        azucar: 7.3,
        sodio: 55,
        imagen: 'assets/images/lacteos/yogurt/colun_lightsinlactosa.png'
    },{
        nombre: 'Soprole Gold trozos frutos secos', 
        marca: 'Soprole',
        tipo: 'Gold trozos frutos secos',
        energia: 110,
        proteina: 3.1,
        grasa: 3.1,
        carbohidratos: 16.3,
        colesterol: 7, 
        azucar: 9.3,
        sodio: 66,
        imagen: 'assets/images/lacteos/yogurt/soprole_goldtrozosfrutossecos.png'
    },{
        nombre: 'Soprole Yoghito', 
        marca: 'Soprole',
        tipo: 'Yoghito',
        energia: 81,
        proteina: 2.9,
        grasa: 2.4,
        carbohidratos: 11.9,
        colesterol: 6.5, 
        azucar: 9.4,
        sodio: 44,
        imagen: 'assets/images/lacteos/yogurt/soprole_yoghito.png'
    },{
        nombre: 'Danone Light & Free', 
        marca: 'Danone',
        tipo: 'Light & Free',
        energia: 54,
        proteina: 4.5,
        grasa: 1,
        carbohidratos: 6.5,
        colesterol: 4.5, 
        azucar: 5.3,
        sodio: 61,
        imagen: 'assets/images/lacteos/yogurt/danone_light&free.png'
    },
]

export const TIPOSQUESOS: Producto[] = [
    {
        nombre: 'Quilque mantecoso laminado', 
        marca: 'Quilque',
        tipo: 'mantecoso laminado',
        energia: 359,
        proteina: 23.6,
        grasa: 26.3,
        carbohidratos: 7,
        colesterol: 70.2, 
        azucar: 1.3,
        sodio: 751,
        imagen: 'assets/images/lacteos/queso/quilque_mantecosolaminado.png'
    },{
        nombre: 'Río Bueno mantecoso laminado', 
        marca: 'Río Bueno',
        tipo: 'mantecoso laminado',
        energia: 343,
        proteina: 23.3,
        grasa: 27.7,
        carbohidratos: 0,
        colesterol: 89, 
        azucar: 0,
        sodio: 498,
        imagen: 'assets/images/lacteos/queso/riobueno_mantecosolaminado.png'
    },{
        nombre: 'Soprole gauda laminado', 
        marca: 'Soprole',
        tipo: 'gauda laminado',
        energia: 358,
        proteina: 25.3,
        grasa: 26.7,
        carbohidratos: 4,
        colesterol: 64.8, 
        azucar: 0.1,
        sodio: 494,
        imagen: 'assets/images/lacteos/queso/soprole_gaudalaminado.png'
    },{
        nombre: 'Colun ranco laminado', 
        marca: 'Colun',
        tipo: 'ranco laminado',
        energia: 330,
        proteina: 24,
        grasa: 26.,
        carbohidratos: 0,
        colesterol: 83, 
        azucar: 0,
        sodio: 164,
        imagen: 'assets/images/lacteos/queso/colun_rancolaminado.png'
    },{
        nombre: 'Colun Quesillo', 
        marca: 'Colun',
        tipo: 'Quesillo',
        energia: 138,
        proteina: 13,
        grasa:7.5,
        carbohidratos: 4.5,
        colesterol: 24, 
        azucar: 3.8,
        sodio: 373,
        imagen: 'assets/images/lacteos/queso/colun_quesillo.png'
    },{
        nombre: 'Colun Quesillo sin sal', 
        marca: 'Colun',
        tipo: 'Quesillo sin sal',
        energia: 138,
        proteina: 13,
        grasa:7.5,
        carbohidratos: 4.5,
        colesterol: 24, 
        azucar: 3.8,
        sodio: 51,
        imagen: 'assets/images/lacteos/queso/colun_quesillosinsal.png'
    },{
        nombre: 'Las Parcelas de Valdivia Queso mantecoso laminado', 
        marca: 'Las Parcelas de Valdivia',
        tipo: 'Queso mantecoso laminado',
        energia: 361,
        proteina: 22.2,
        grasa: 30,
        carbohidratos: 0.5,
        colesterol: 91, 
        azucar: 0.5,
        sodio: 395,
        imagen: 'assets/images/lacteos/queso/parcelasvaldivia_mantecosolaminado.png'
    },{
        nombre: 'Quillayes Mozzarella granulado', 
        marca: 'Quillayes',
        tipo: 'Mozzarella granulado',
        energia: 318,
        proteina: 23,
        grasa: 25,
        carbohidratos: 0,
        colesterol: 37, 
        azucar: 0,
        sodio: 300,
        imagen: 'assets/images/lacteos/queso/quillayes_mozzarellagranulado.png'
    },{
        nombre: 'Quillayes Queso Parmesano', 
        marca: 'Quillayes',
        tipo: 'Queso Parmesano',
        energia: 336,
        proteina: 29.4,
        grasa: 23.3,
        carbohidratos: 2.1,
        colesterol: 73.5, 
        azucar: 0,
        sodio: 653,
        imagen: 'assets/images/lacteos/queso/quillayes_parmesano.png'
    },{
        nombre: 'La Vaquita Queso gauda granulado', 
        marca: 'La Vaquita',
        tipo: 'Queso gauda granulado',
        energia: 353,
        proteina: 24.3,
        grasa: 28.2,
        carbohidratos: 0.5,
        colesterol: 75.7, 
        azucar: 0.5,
        sodio: 805,
        imagen: 'assets/images/lacteos/queso/lavaquita_gaudagranulado.png'
    },{
        nombre: 'La Vaquita Queso mozzarella granulado', 
        marca: 'La Vaquita',
        tipo: 'Queso mozzarella granulado',
        energia: 316,
        proteina: 23.3,
        grasa: 23.6,
        carbohidratos: 2.5,
        colesterol: 63.8, 
        azucar: 1,
        sodio: 510,
        imagen: 'assets/images/lacteos/queso/lavaquita_mozzarellagranulado.png'
    },{
        nombre: 'La Vaquita Queso Fresco', 
        marca: 'La Vaquita',
        tipo: 'Queso Fresco',
        energia: 239,
        proteina: 15.5,
        grasa: 17.9,
        carbohidratos: 4.2,
        colesterol: 52, 
        azucar: 2.5,
        sodio: 320,
        imagen: 'assets/images/lacteos/queso/lavaquita_quesofresco.png'
    },{
        nombre: 'Santa Rosa Mozzarela cremoso', 
        marca: 'Santa Rosa',
        tipo: 'Mozzarela cremoso',
        energia: 309,
        proteina: 26,
        grasa: 22,
        carbohidratos: 2.9,
        colesterol: 57, 
        azucar: 0.1,
        sodio: 373,
        imagen: 'assets/images/lacteos/queso/santarosa_mozzarellacremoso.png'
    },{
        nombre: 'Colun Queso rallado Parmesano', 
        marca: 'Colun',
        tipo: 'Queso rallado Parmesano',
        energia: 465,
        proteina: 46.5,
        grasa: 31,
        carbohidratos: 0,
        colesterol: 99, 
        azucar: 0,
        sodio: 1233,
        imagen: 'assets/images/lacteos/queso/colun_parmesanorallado.png'
    },{
        nombre: 'Quillayes Chacra', 
        marca: 'Quillayes',
        tipo: 'Chacra',
        energia: 187,
        proteina: 12.7,
        grasa: 14.1,
        carbohidratos: 2.4,
        colesterol: 39.5, 
        azucar: 1.2,
        sodio: 300,
        imagen: 'assets/images/lacteos/queso/quillayes_chacra.png'
    },{
        nombre: 'Quillayes Queso Fresco', 
        marca: 'Quillayes',
        tipo: 'Queso Fresco',
        energia: 187,
        proteina: 12.7,
        grasa: 14.1,
        carbohidratos: 2.4,
        colesterol: 39.5, 
        azucar: 1.2,
        sodio: 300,
        imagen: 'assets/images/lacteos/queso/quillayes_quesofresco.png'
    },{
        nombre: 'Colun Reggianito clásico', 
        marca: 'Colun',
        tipo: 'Reggianito clásico',
        energia: 347,
        proteina: 36.3,
        grasa: 22.4,
        carbohidratos: 0,
        colesterol: 72, 
        azucar: 0,
        sodio: 859,
        imagen: 'assets/images/lacteos/queso/colun_reggianito.png'
    },
    ];

export const LECHE : TipoProducto = {
    valor: 'leche',
    nombre: 'Leche',
    productos: TIPOSLECHES
}

export const QUESOS : TipoProducto = {
    valor: 'queso',
    nombre: 'Queso',
    productos: TIPOSQUESOS
}

export const YOGURT : TipoProducto = {
    valor: 'yogurt',
    nombre: 'Yogurt',
    productos: TIPOSYOGURT
}