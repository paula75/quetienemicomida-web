import { Component, OnInit } from '@angular/core';
import { TIPOSLECHES } from '../data/lacteos';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  leche = TIPOSLECHES;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}

