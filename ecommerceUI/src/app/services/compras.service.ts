import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from './config.service';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  constructor(private http:HttpClient, private config:ConfigService,
    private usuariosService:UsuariosService) { }

  getHeaders() {
    let headers = {};
    if (this.usuariosService.isLogged()) {
      headers = {
        'x-access-token' : this.usuariosService.getToken()
      };
    }
    return headers;
  }

  guardarComprar(data) {
    data['codigo_tienda'] = this.config.codigoTienda;
    return this.http.post(this.config.apiUrl + 'compras', data, {
      headers : this.getHeaders()
    });
  }

  getComprasByUsuario(usuarioId) {
    return this.http.get(this.config.apiUrl + 'compras', {
      params : new HttpParams().set('usuarioId', usuarioId),
      headers : this.getHeaders()
    });
  }
}
