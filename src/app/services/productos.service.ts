import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: any[] = [];
  // tslint:disable-next-line:no-inferrable-types
  cargando: boolean = true;


  constructor(private _http: Http) {
   this.cargar_productos();

  }


public cargar_productos() {
  this.cargando = false;
  if ( this.productos.length === 0) {
    this._http.get('https://paginaweb-23757.firebaseio.com/productos_idx.json')
    .subscribe(res => {
      console.log( res.json());
      this.cargando = false;
    });
}


}

}
