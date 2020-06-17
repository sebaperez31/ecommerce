import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../services/productos.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  producto;
  imagen;

  getImagen(imagenProducto){
    const objectURL = 'data:' + imagenProducto.contentType + ';base64,' + imagenProducto.data;
    this.imagen = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  constructor(private activatedRoute:ActivatedRoute, private productosService:ProductosService,
    private sanitizer:DomSanitizer) {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.productosService.getProductoById(id).subscribe(data => {
      this.producto = data;
      if (this.producto.imagenes.length > 0) {
        this.getImagen(this.producto.imagenes[0]);
      }
    });
  }

  ngOnInit(): void {
  }

}
