import { Component, Input, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from '../categoria';
import { CATEGORIAS } from '../data/categorias';
import { Producto } from '../producto';
import { TipoProducto } from '../tipo-producto';
import { Componente } from '../data/componente';
import { ComponenteService } from '../componente.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  componenteAnalisis: Componente = {
    value: 'sodio',
    nombre: 'Sodio'
  };
  categorias = CATEGORIAS;
  categoriaSeleccionada?: Categoria ;
  tiposProductos?: TipoProducto[];
  tiposProductosAnalisis? : TipoProducto[];

  constructor( 
    private route: ActivatedRoute,
    private componenteService : ComponenteService,
  ) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(routeParams => this.getComponente(routeParams['value']));
    this.tiposProductosAnalisis = [];
  }

  ngOnChanges() {
    this.categoriaSeleccionada = undefined;
  }

  getComponente(ruta: string){
    this.componenteService.getComponente(ruta).subscribe(
      item => this.componenteAnalisis = item
      );
    this.cambioCategoria();
  }

  cambioCategoria(){
    // Aca crear nuevos productos
    if (this.categoriaSeleccionada){
      this.tiposProductosAnalisis = [];
      this.tiposProductos = this.categoriaSeleccionada.tiposProductos;

      this.tiposProductos.forEach(
        item =>
        { // item es leche
          let productosAnalisis: Producto[] = [];
          let productoAcotado: number;

          if (item.productos !== undefined) {

          item.productos.forEach(
            producto => {
              productoAcotado = this.extraerComponente(producto, this.componenteAnalisis.value);
              
              // Nuevo producto
              // let productoRenovado: Producto = {
              //   nombre: producto.nombre,
              //   valor: productoAcotado,
              //   imagen: producto.imagen
              // }

              let productoRenovado: Producto = producto;
              productoRenovado['valor'] = productoAcotado;

              productosAnalisis.push(productoRenovado);
              })
              // Agregar nueva lista de productos a tiposProductosAnalisis? : TipoProducto[];
              let tipoProductoRenovado : TipoProducto = {
                nombre: item.nombre,
                valor: item.valor,
                productos: productosAnalisis
              }
              this.tiposProductosAnalisis?.push(tipoProductoRenovado);

            }
          }
          )
      }

    }

  private extraerComponente(producto: Producto, componente: string) {
    let valueComponente : number = 0;
    if (componente === 'sodio' && producto['sodio'] != undefined)
      valueComponente = producto['sodio'];
    else if (componente === 'azucar' && producto['azucar'] != undefined)
      valueComponente = producto['azucar'];
    else if (componente === 'proteina' && producto['proteina'] != undefined)
      valueComponente = producto['proteina'];
    else if (componente === 'energia' && producto['energia'] != undefined)
      valueComponente = producto['energia'];
    else if (componente === 'grasa' && producto['grasa'] != undefined)
      valueComponente = producto['grasa'];
    else if (componente === 'carbohidratos' && producto['carbohidratos'] != undefined)
      valueComponente = producto['carbohidratos'];
    else if (componente === 'colesterol' && producto['colesterol'] != undefined)
      valueComponente = producto['colesterol'];
    return valueComponente;
  }
}

