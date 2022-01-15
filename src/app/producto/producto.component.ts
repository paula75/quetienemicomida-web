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

  leche = TIPOSLECHES;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}

