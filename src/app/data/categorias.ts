import { Categoria } from './../categoria';

import { LECHE, YOGURT } from './lacteos';

export const CATEGORIAS: Categoria[] = [
    {
        valor: 'lacteos', 
        nombre: 'Lácteos',
        tiposProductos: [
            LECHE,
            YOGURT
        ]
    },
];
