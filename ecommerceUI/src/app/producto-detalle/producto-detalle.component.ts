import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../services/productos.service';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  producto;
  imagen;

  constructor(private activatedRoute:ActivatedRoute, private productosService:ProductosService,
    private config:ConfigService) {
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

}
