import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  registrar(data){
    return this.http.post("http://localhost:3000/usuarios/registro", data);
  }
}
