import { Component, OnInit } from '@angular/core';
import { CATEGORIAS } from '../data/categorias';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  categorias = CATEGORIAS;

}


