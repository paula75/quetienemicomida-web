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

  CANTIDAD_ITEMS = 5;

  // Variables
  orden?:string;
  minisLeches : Prod[] = [];
  tipoComponente : string = '' + this.componenteAnalisis.value;
  leche = TIPOSLECHES.slice(0, this.CANTIDAD_ITEMS);


  constructor() { }

  ngOnInit(): void {
    this.orden = "little";
    
    this.leche.forEach(
      item => {
        console.log(this.tipoComponente);
        this.minisLeches.push(
          {nombre: item.nombre, valor: item['proteina'], img: item.imagen}
          );
      }
    );
    
  }

  // TODO: Ordenar segun selecotr de orden



}

export interface Prod {
  nombre: string;
  valor?: number;
  img?: string;
}

