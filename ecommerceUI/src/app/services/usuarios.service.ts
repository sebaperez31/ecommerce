import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient, private config:ConfigService) { }

  registrar(data){
    data['codigo_tienda'] = this.config.codigoTienda;
    return this.http.post(this.config.apiUrl + 'usuarios/registro', data);
  }

  login(data){
    data['codigo_tienda'] = this.config.codigoTienda;
    return this.http.post(this.config.apiUrl + 'usuarios/login', data);
  }

  isLogged() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuarioId');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token){
    localStorage.setItem('token', token);
  }

  getUsuarioId() {
    return localStorage.getItem('usuarioId');
  }

  setUsuarioId(usuarioId){
    localStorage.setItem('usuarioId', usuarioId);
  }

}
