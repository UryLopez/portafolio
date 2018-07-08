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
  this.cargando = true;
  if ( this.productos.length === 0) {
    this._http.get('https://paginaweb-23757.firebaseio.com/productos_idx.json')
    .subscribe(res => {
      console.log( res.json());
      setTimeout( () => {
        this.cargando = false;
        this.productos = res.json();
      }, 1500);
    });
}


}

}
