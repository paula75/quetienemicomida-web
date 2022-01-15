import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  tipoAnalisis = [
    'Sodio',
    'Azúcar',
    'Proteína',
    'Grasa',
    'H. de carbono',
    'Colesterol'
  ];


  constructor() { }
  
  ngOnInit(): void {
  }

}
