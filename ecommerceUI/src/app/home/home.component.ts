import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  productos = [];

  constructor(private productosService:ProductosService) {
    this.productosService.getProductos().subscribe(data => {
      console.log(data);
      this.productos = data as object[];
    });
  }

  ngOnInit() {
  }

}
