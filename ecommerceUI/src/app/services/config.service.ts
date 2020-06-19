import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  readonly codigoTienda = 'T002';
  readonly apiUrl = 'http://localhost:3000/';
  private tienda;

  buscarTienda() {
    return this.http.get(this.apiUrl + 'tiendas/codigo/' + this.codigoTienda);
  }

  constructor(private http:HttpClient) {
    this.buscarTienda().subscribe(data => this.tienda = data);
  }

  getTienda() {
    if (this.tienda){
      return Promise.resolve(this.tienda);
    }
    else {
      return this.buscarTienda();
    }
  }
}
