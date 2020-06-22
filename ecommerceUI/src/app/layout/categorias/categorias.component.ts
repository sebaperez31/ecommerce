import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias;

  constructor(private config:ConfigService, private router:Router) {
    this.config.getCategorias().subscribe(data => {
      this.categorias = data;
    });
   }

  ngOnInit() {
  }

  ir(categoria) {
    this.router.navigate(['productos', 'categoria', categoria]);
  }
}
