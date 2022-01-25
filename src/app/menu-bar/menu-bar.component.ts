import { Component, OnInit } from '@angular/core';
import { ComponenteService } from '../componente.service';
import { Componente } from '../data/componente';
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  tipoAnalisis : Componente[] = [];

  elementoAnalisis : Componente = {
    value: 'sodio',
    nombre: 'Sodio'
  };

  constructor(
    private componenteService: ComponenteService
  ) { }
  
  ngOnInit(): void {
    this.getComponentes();
  }

  getComponentes() { 
    this.tipoAnalisis = this.componenteService.getComponentes();
  }

  chooseAnalisis(tipo: any) {
    this.elementoAnalisis = tipo;
  }

}
