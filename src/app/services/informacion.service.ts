import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  info: any = {};
  // tslint:disable-next-line:no-inferrable-types
  cargada: boolean = false;
  // tslint:disable-next-line:no-inferrable-types
  cargada_sobre_nosotros: boolean = false;


  equipo: any[] = [];

constructor( public _http: Http) {

  this.carga_info();

  this.carga_sobre_nosotros();

  }


public carga_info() {
  this._http.get('assets/data/info.pagina.json')
  .subscribe(data => {
    // console.log(data.json());
    this.cargada = true;
    this.info = data.json();
  });
}

public carga_sobre_nosotros() {
  this._http.get('https://paginaweb-23757.firebaseio.com/equipo.json')
  .subscribe(data => {
    // console.log(data.json());
    this.cargada_sobre_nosotros = true;
    this.equipo = data.json();
  });
}

}
