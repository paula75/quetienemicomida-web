import { Producto } from "./producto";

export interface TipoProducto {
    valor: string; // leche
    nombre: string;
    productos?: Producto[]
  }