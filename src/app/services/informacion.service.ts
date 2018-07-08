import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  info: any = {};
  // tslint:disable-next-line:no-inferrable-types
  cargada: boolean = false;

constructor( public _http: Http) {
    this._http.get('assets/data/info.pagina.json')
    .subscribe(data => {
      console.log(data.json());
      this.info = data.json();
    });
  }
}
