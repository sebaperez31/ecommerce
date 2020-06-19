import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from './config.service';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient, private config:ConfigService,
    private usuariosService:UsuariosService) { }

  getProductos() {
    return this.http.get(this.config.apiUrl + 'productos', {
      params : new HttpParams().set('codigo_tienda', this.config.codigoTienda)
    });
  }

  getProductoById(id) {
    return this.http.get(this.config.apiUrl + 'productos/' + id);
  }
}
