import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  readonly codigoTienda = 'T002';
  readonly apiUrl = 'http://localhost:3000/';
  private tienda;
  private categorias;

  getTienda() {
    return this.http.get(this.apiUrl + 'tiendas/codigo/' + this.codigoTienda);
  }

  getCategorias() {
    return this.http.get(this.apiUrl + 'categorias',{
      params : new HttpParams().set('codigo_tienda', this.codigoTienda)
    });
  }

  constructor(private http:HttpClient) {
  }
}
