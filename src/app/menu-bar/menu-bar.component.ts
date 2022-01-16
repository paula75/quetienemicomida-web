import { Component, OnInit } from '@angular/core';
import { Analisis } from '../categoria/categoria.component';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  tipoAnalisis = [
    {
      value: 'sodio',
      nombre: 'Sodio'
    },{
      value: 'azucar',
      nombre: 'Azúcar'
    },{
      value: 'proteina',
      nombre: 'Proteína'
    },{
      value: 'grasa',
      nombre: 'Grasa'
    },{
      value: 'carbohidratos',
      nombre: 'H. de carbono'
    },{
      value: 'colesterol',
      nombre: 'Colesterol'
    }
  ];

  elementoAnalisis : Analisis= {
    value: 'sodio',
    nombre: 'Sodio'
  };

  constructor() { }
  
  ngOnInit(): void {

  }

  chooseAnalisis(tipo: any) {
    this.elementoAnalisis = tipo;
    
  }

}
