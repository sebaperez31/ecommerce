import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario:FormGroup;

  constructor(private fb:FormBuilder, private usuariosService:UsuariosService,
    private router:Router, private snackBar: MatSnackBar) {
    this.formulario = this.fb.group({
      email    : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  login(){
    this.usuariosService.login(this.formulario.value).subscribe(
      data => {
        console.log(data);
        this.usuariosService.setToken(data['token']);
        this.usuariosService.setUsuarioId(data['usuarioId']);
        this.snackBar.open('Bienvenide!', 'Cerrar', { duration: 2000, verticalPosition: 'top' });
        this.router.navigate(['']);
    },
      error => {
        this.snackBar.open('Usuario y/o password incorrectos', 'Cerrar', { duration: 3000, verticalPosition: 'top' });
    });
  }
}
