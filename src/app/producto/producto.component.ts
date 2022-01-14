import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  leche : Producto[] = [
    {
      name: 'Soprole',
      valor: 5
    },
    {
      name: 'Loncoleche',
      valor: 2
    },
    {
      name: 'Soprole 2',
      valor: 5
    }
  ]
  constructor() { }

  ngOnInit(): void {
    
  }

}

export interface Producto {
  name: string;
  valor: number;

};
