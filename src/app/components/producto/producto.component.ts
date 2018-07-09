import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {
   producto: any = undefined;
   cod: string = undefined;

  constructor( private _route: ActivatedRoute, _ps: ProductosService) {

     _route.params.subscribe( parametros => {
     // console.log(parametros);
      // console.log(parametros['id']);
       _ps.cargar_producto(parametros['id']).subscribe( res => {
         this.cod = parametros['id'];
        this.producto = res.json();
      console.log( this.producto);
       });
     });
   }

  ngOnInit() {
  }

}
