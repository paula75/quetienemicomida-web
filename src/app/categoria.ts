import { TipoProducto } from './tipo-producto';


export interface Categoria {
    valor: string;
    nombre: string;
    tiposProductos: TipoProducto[]
  }