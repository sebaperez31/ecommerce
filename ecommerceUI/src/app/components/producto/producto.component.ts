import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() producto;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  detalles(){
    this.router.navigate(['productos', this.producto._id]);
  }
}
