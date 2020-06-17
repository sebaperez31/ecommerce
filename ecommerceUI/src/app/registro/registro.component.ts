import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formulario:FormGroup;
  mensajeError:String = '';

  constructor(private fb:FormBuilder, private usuariosService:UsuariosService,
    private router:Router) {
      this.formulario = this.fb.group({
        nombre   : ['', [Validators.required]],
        apellido : ['', [Validators.required]],
        email    : ['', [Validators.required, Validators.email]],
        password : ['', [Validators.required]],
        telefono : ['', []],
      });
  }

  ngOnInit() {
  }

  registrar() {
    console.log(this.formulario.value);
    this.usuariosService.registrar(this.formulario.value).subscribe(
      data => {
        this.router.navigate(['login']);
      },
      error => {
        if (error.status === 409){
          // Conflict
          this.mensajeError = 'Ya existe un usuario registrado con ese correo electronico.';
        }
        else {
          this.mensajeError = 'No se pudo registrar el usuario.';
        }
      });
  }
}
