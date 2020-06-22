import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  nombreTienda:String;

  constructor(private router:Router, private config:ConfigService,
    private usuariosService:UsuariosService) {
    this.config.getTienda().subscribe(tienda => this.nombreTienda = tienda['nombre']);
  }

  ngOnInit() {
  }

  home() {
    this.router.navigate(['']);
  }

  login() {
    this.router.navigate(['login']);
  }

  logout() {
    this.usuariosService.logout();
    this.login();
  }

  registro() {
    this.router.navigate(['registro']);
  }

  isLogged() {
    return this.usuariosService.isLogged();
  }

  compras() {
    this.router.navigate(['compras', 'usuario', this.usuariosService.getUsuarioId()]);
  }
}
