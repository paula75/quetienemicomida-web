import { Component, Input, OnInit } from '@angular/core';
import { TIPOSLECHES } from '../data/lacteos';
import { Producto } from '../producto';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() nombreTipoProducto = '';
  @Input() componenteAnalisis = {
    value: 'sodio',
    nombre: 'Sodio'
  };
  @Input() listaProductos?: Producto[] = [];

  CANTIDAD_ITEMS = 5;
  // Variables
  orden : string = "little";
  cantidadProductos: number = 0;
  tipoComponente : string = '' + this.componenteAnalisis.value;
  productosAcotados?: Producto[] = [];

  constructor() { }

  ngOnInit(): void {
    this.productosAcotados = this.listaProductos;
    this.ordenarProductos();
    
  }

  ngOnChanges(){
    this.cantidadProductos = this.listaProductos? this.listaProductos.length : 0;
  }

  // TODO: Ordenar segun selector de orden
  ordenarProductos(){
    if (this.listaProductos !== undefined){
      if(this.orden === 'little'){
        this.listaProductos.sort((obj1,   obj2) => {
          if ( obj1.valor !==undefined && obj2.valor !==undefined )
          if (obj1.valor > obj2.valor) {
            return 1;
          } 
          else if (obj1.valor < obj2.valor) {
            return -1;
          }
          return 0;
            
        })
      } else {
        this.listaProductos.sort((obj1,   obj2) => {
          if ( obj1.valor !== undefined && obj2.valor !==undefined )
          if (obj1.valor < obj2.valor) {
            return 1;
          } 
          else if (obj1.valor > obj2.valor) {
            return -1;
          }
          return 0;
            
        })
      }
      this.productosAcotados = this.listaProductos.slice(0, this.CANTIDAD_ITEMS);
      
    }
  }
}

export interface Prod {
  nombre: string;
  valor?: number;
  img?: string;
}


