import { Component, Input, OnInit } from '@angular/core';
import { TIPOSLECHES } from '../data/lacteos';
import { Producto } from '../producto';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() nombreTipoProducto = ''
  CANTIDAD_ITEMS = 3;

  leche = TIPOSLECHES.slice(0, this.CANTIDAD_ITEMS);
  
  constructor() { }

  ngOnInit(): void {
    
  }

}

