import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../services/productos.service';
import { ConfigService } from '../services/config.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuariosService } from '../services/usuarios.service';
import { ComprasService } from '../services/compras.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  producto;
  imagen;

  constructor(private activatedRoute:ActivatedRoute, private productosService:ProductosService,
    private config:ConfigService, private router:Router, private snackBar: MatSnackBar,
    private usuariosService:UsuariosService, private comprasService:ComprasService) {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.productosService.getProductoById(id).subscribe(data => {
      this.producto = data;
      if (this.producto.imagenes.length > 0){
        this.imagen = this.config.apiUrl + this.producto.imagenes[0].nombre;
      }
    });
  }

  ngOnInit(): void {
  }

  comprar() {
    const compra = {
      usuario_id : this.usuariosService.getUsuarioId(),
      items : [
        {
          producto_id : this.producto._id,
          cantidad : 1
        }
      ]
    };
    this.comprasService.guardarComprar(compra).subscribe(
      data => {
        console.log(data);
        const mensaje = 'Felicitaciones!, la compra de ' + this.producto['nombre'] + ' se ha realizado con exito.';
        this.snackBar.open(mensaje, 'Cerrar', { duration: 5000, verticalPosition: 'top' });
      },
      error => {
        const mensaje = 'Lo sentimos, la compra no pudo ser realizada. Por favor intente en otro momento.';
        this.snackBar.open(mensaje, 'Cerrar', { duration: 5000, verticalPosition: 'top' });
      });
  }

  isLogged() {
    return this.usuariosService.isLogged();
  }

  home() {
    this.router.navigate(['']);
  }
}
