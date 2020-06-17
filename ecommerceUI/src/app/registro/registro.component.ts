import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formulario:FormGroup;

  constructor(private fb:FormBuilder, private usuariosService:UsuariosService) {
    this.formulario = this.fb.group({
      nombre   : ['', [Validators.required]],
      apellido : ['', [Validators.required]],
      email    : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(8)]],
      telefono : ['', []],
    });
  }

  ngOnInit() {
  }

  registrar() {
    console.log(this.formulario.value);
    this.usuariosService.registrar(this.formulario.value).subscribe(data => {
      console.log(data);
    });
  }
}
