import { Component, Input, OnInit } from '@angular/core';
import { CATEGORIAS } from '../data/categorias';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  @Input() componenteAnalisis = {
    value: 'sodio',
    nombre: 'Sodio'
  };


  categoriaSeleccionada?: string;
  categorias = CATEGORIAS;

  constructor() { }
  
  ngOnInit(): void {
    
  }

  tiposProducto? = CATEGORIAS.filter(
    item => item.valor === this.categoriaSeleccionada
  )
  cosas = ["Leche", "Yogurt"];

}


