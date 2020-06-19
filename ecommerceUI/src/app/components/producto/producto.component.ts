import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() producto;

  constructor(private router:Router, private config:ConfigService) { }

  ngOnInit() {
  }

  detalles(){
    this.router.navigate(['productos', this.producto._id]);
  }

  imagen(){
    let im;
    if (this.producto){
      if (this.producto.imagenes.length > 0){
        im = this.config.apiUrl + this.producto.imagenes[0].nombre;
      }
    }
    return im;
  }
}
