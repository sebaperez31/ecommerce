import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos = [];

  constructor(private prod:ProductosService) {
    this.prod.getProductos().subscribe(data => {
      this.productos = data.docs;
    });
  }

  ngOnInit() {
  }

}
