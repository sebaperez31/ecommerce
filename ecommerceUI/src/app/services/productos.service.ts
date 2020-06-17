import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient, private config:ConfigService) { }

  getHeaders() {
    let headers = {};
    if (localStorage.getItem('token')) {
      headers = {
        'x-access-token' : localStorage.getItem('token')
      };
    }
    return headers;
  }

  getProductos() {
    return this.http.get(this.config.apiUrl + 'productos', {
      params : new HttpParams().set('codigo_tienda', this.config.codigoTienda),
      headers : this.getHeaders()
    });
  }

  getProductoById(id) {
    return this.http.get(this.config.apiUrl + 'productos/' + id, {
      headers : this.getHeaders()
    });
  }
}
