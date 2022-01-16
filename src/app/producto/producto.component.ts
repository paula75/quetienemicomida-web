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
  orden?:string;
  minisLeches : Prod[] = [];
  tipoComponente : string = '' + this.componenteAnalisis.value;
  // listaProductos.slice(0, this.CANTIDAD_ITEMS);
  


  constructor() { }

  ngOnInit(): void {
    this.orden = "little";
    
  }

  // TODO: Ordenar segun selector de orden



}

export interface Prod {
  nombre: string;
  valor?: number;
  img?: string;
}

