import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { ComprasService } from '../services/compras.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  compras;
  columnas: string[] = ['fecha', 'producto', 'precio'];

  constructor(private usuariosService:UsuariosService, private comprasService:ComprasService,
    private activatedRoute:ActivatedRoute) {
    const usuarioId = this.activatedRoute.snapshot.paramMap.get('usuarioid');
    this.comprasService.getComprasByUsuario(usuarioId).subscribe(
      data => {
        this.compras = data;
      }
    );
  }

  ngOnInit() {
  }

}
