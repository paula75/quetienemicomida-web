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
  listaTiposProductos?: TipoProducto[];
  tiposProductosAnalisis? : TipoProducto[];
  productosAnalisis?: Producto[];

  constructor() { }
  
  ngOnInit(): void {
    
  }

  ngOnChanges() {
    console.log('Cambiiooo menu');

  }

  cambioCategoria(data: any){
    console.log('Cambiar lista de productos');
    console.log(data);
    // Acaaaa crear nuevos productos
    if (this.categoriaSeleccionada){
      console.log('Categoria seleccionada');
      console.log(this.categoriaSeleccionada);
      // READ data
      this.listaTiposProductos = this.categoriaSeleccionada.tiposProductos;

      console.log(this.listaTiposProductos);

      this.listaTiposProductos.forEach(
        item =>
        { // item es leche
          let productoAcotado: number;
          

          if (item.productos !== undefined) {

          item.productos.forEach(
            producto => {
              // Sacar logica a  otra funcion
              if (this.componenteAnalisis.value === 'sodio' && producto['sodio'] != undefined)
              productoAcotado = producto['sodio'] 
              else if (this.componenteAnalisis.value === 'azucar' && producto['azucar'] != undefined )
              productoAcotado = producto['azucar'] 
              else if (this.componenteAnalisis.value === 'proteina' && producto['proteina'] != undefined )
              productoAcotado = producto['proteina']

              // Nuevo producto
              let productoRenovado: Producto = {
                nombre: producto.nombre,
                valor: productoAcotado,
                imagen: producto.imagen
              }

              this.productosAnalisis?.push(productoRenovado);
              })
              // Agregar nueva lista de productos a   tiposProductosAnalisis? : TipoProducto[];
              let tipoProductoRenovado : TipoProducto = {
                nombre: item.nombre,
                valor: item.valor,
                productos: this.productosAnalisis
              }
              this.tiposProductosAnalisis?.push()


              console.log(item);
            }
          }

            
          )

      }
      
      console.log(this.tiposProductosAnalisis)

    }
  

  // tiposProducto? = CATEGORIAS.filter(
  //   item => item.valor === this.categoriaSeleccionada
  // )
  tiposProducto? = CATEGORIAS.filter(
    item => item.valor === this.categoriaSeleccionada?.nombre
  )
  cosas = ["Leche", "Yogurt"];
}


export interface Analisis {
  value: string;
  nombre: string;
}