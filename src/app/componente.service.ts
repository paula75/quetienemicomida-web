import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Componente } from './data/componente';
import { TIPO_ANALISIS } from './data/componente';
@Injectable({
  providedIn: 'root'
})
export class ComponenteService {

  constructor() { }

  getComponentes(): Componente[] {
    return TIPO_ANALISIS;
  }

  getComponente(value: string) : Observable<Componente>{
    const comp = TIPO_ANALISIS.find(item => item.value === value)
    if (comp !== undefined) {
      return of(comp);
    }
    const compDefault: Componente = {
      value: 'sodio',
      nombre: 'Sodio'
    };
    return of(compDefault);
  }
}
