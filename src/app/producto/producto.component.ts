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

  CANTIDAD_ITEMS = 3;

  // Variables
  orden?:string;
  minisLeches : Prod[] = [];
  leche = TIPOSLECHES.slice(0, this.CANTIDAD_ITEMS);
  constructor() { }

  ngOnInit(): void {
    this.orden = "little";
    this.leche.forEach(
      item => {
        this.minisLeches.push(
          {name: item.name, valor: item.grasa, img: item.imagen}
          );
      }
    );
    console.log(this.minisLeches);
    
  }

  // TODO: Ordenar segun selecotr de orden



}

export interface Prod {
  name: string;
  valor?: number;
  img?: string;
}

