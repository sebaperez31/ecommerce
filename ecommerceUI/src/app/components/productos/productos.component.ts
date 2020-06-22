import { Component, OnInit, Input } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos = [];
  tipoProductos;

  constructor(private productosService:ProductosService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.url.subscribe(url => {
      const urlCat = url.filter(urlItem => urlItem.path === 'categoria');
      if (urlCat.length > 0) {
        // ESTOY BUSCANDO POR CATEGORIA
        this.tipoProductos = url[2].path;
        this.productosService.getProductosPorCategoria(this.tipoProductos).subscribe(data => {
          this.productos = data as object[];
        });
      }
      else {
        // ESTOY BUSCANDO DESTACADOS
        this.tipoProductos = "Destacados";
        this.productosService.getProductosDestacados().subscribe(data => {
          this.productos = data as object[];
        });
      }
    });

  }

  ngOnInit() {
  }

}
