import { Categoria } from './../categoria';

import { LECHE } from './lacteos';

export const CATEGORIAS: Categoria[] = [
    {
        valor: 'lacteos', 
        nombre: 'Lácteos',
        tiposProductos: [
            LECHE
        ]
    },
];
