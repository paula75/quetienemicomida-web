import { Component, Input, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Categoria } from '../categoria';
import { CATEGORIAS } from '../data/categorias';
import { Producto } from '../producto';
import { TipoProducto } from '../tipo-producto';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  @Input() componenteAnalisis: Analisis = {
    value: 'sodio',
    nombre: 'Sodio'
  };


  categorias = CATEGORIAS;
  categoriaSeleccionada?: Categoria ;
  tiposProductos?: TipoProducto[];
  tiposProductosAnalisis? : TipoProducto[];

  constructor() { }
  
  ngOnInit(): void {
    this.tiposProductosAnalisis = [];
  }

  ngOnChanges() {
    console.log('Cambiiooo menu');
    this.categoriaSeleccionada = undefined;

  }

  cambioCategoria(data: any){
    // Acaaaa crear nuevos productos
    if (this.categoriaSeleccionada){
      this.tiposProductosAnalisis = [];
      console.log('Categoria seleccionada');
      console.log(this.categoriaSeleccionada);
      // READ data
      this.tiposProductos = this.categoriaSeleccionada.tiposProductos;

      console.log(this.tiposProductos);

      this.tiposProductos.forEach(
        item =>
        { // item es leche
          let productosAnalisis: Producto[] = [];
          let productoAcotado: number;

          if (item.productos !== undefined) {

          item.productos.forEach(
            producto => {
              // Sacar logica a  otra funcion
              productoAcotado = this.extraerComponente(producto, this.componenteAnalisis.value);

              // Nuevo producto
              let productoRenovado: Producto = {
                nombre: producto.nombre,
                valor: productoAcotado,
                imagen: producto.imagen
              }

              productosAnalisis.push(productoRenovado);
              })
              // Agregar nueva lista de productos a tiposProductosAnalisis? : TipoProducto[];
              let tipoProductoRenovado : TipoProducto = {
                nombre: item.nombre,
                valor: item.valor,
                productos: productosAnalisis
              }
              this.tiposProductosAnalisis?.push(tipoProductoRenovado);

            }
          }
          )

      }
      console.log('Lista de tipos de productos');
      console.log(this.tiposProductosAnalisis)

    }
  

  private extraerComponente(producto: Producto, componente: string) {
    let valueComponente : number = 0;
    if (componente === 'sodio' && producto['sodio'] != undefined)
      valueComponente = producto['sodio'];
    else if (componente === 'azucar' && producto['azucar'] != undefined)
      valueComponente = producto['azucar'];
    else if (componente === 'proteina' && producto['proteina'] != undefined)
      valueComponente = producto['proteina'];
    else if (componente === 'grasa' && producto['grasa'] != undefined)
      valueComponente = producto['grasa'];
    else if (componente === 'carbohidratos' && producto['carbohidratos'] != undefined)
      valueComponente = producto['carbohidratos'];
    else if (componente === 'colesterol' && producto['colesterol'] != undefined)
      valueComponente = producto['colesterol'];
    return valueComponente;
  }
}


export interface Analisis {
  value: string;
  nombre: string;
}