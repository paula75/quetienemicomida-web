import { Categoria } from './../categoria';
import { CONGELADOSAPANADOS, CONGELADOSVEGANOS } from './congelados';
import { GALLETA } from './dulcesgalletas';
import { LECHE, YOGURT } from './lacteos';
import { OTROSSNACK, PAPASFRITAS } from './snacks';

export const CATEGORIAS: Categoria[] = [
    {
        valor: 'lacteos', 
        nombre: 'Lácteos',
        tiposProductos: [
            LECHE,
            YOGURT
        ]
    },{
        valor: 'dulces', 
        nombre: 'Dulces y galletas',
        tiposProductos: [
            GALLETA,
        ]
    },{
        valor: 'snack', 
        nombre: 'Snacks',
        tiposProductos: [
            PAPASFRITAS,
            OTROSSNACK
        ]
    },{
        valor: 'congelados', 
        nombre: 'Congelados',
        tiposProductos: [
            CONGELADOSVEGANOS,
            CONGELADOSAPANADOS
        ]
    },
];
