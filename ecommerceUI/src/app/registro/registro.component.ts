import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formulario:FormGroup;

  constructor(private fb:FormBuilder, private usuariosService:UsuariosService,
    private router:Router, private snackBar: MatSnackBar) {
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
        this.snackBar.open('Ya estas registrado!, ahora podes ingresar al sitio', 'Cerrar', { duration: 4000, verticalPosition: 'top' });
        this.router.navigate(['login']);
      },
      error => {
        let mensajeError;
        if (error.status === 409){
          // Conflict
          mensajeError = 'Ya existe un usuario registrado con ese correo electronico';
        }
        else {
          mensajeError = 'No se pudo registrar el usuario.';
        }
        this.snackBar.open(mensajeError, 'Cerrar', { duration: 4000, verticalPosition: 'top' });
      });
  }
}
