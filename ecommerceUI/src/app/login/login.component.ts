import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario:FormGroup;

  constructor(private fb:FormBuilder, private usuariosService:UsuariosService, private router:Router) {
    this.formulario = this.fb.group({
      email    : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
  }

  login(){
    this.usuariosService.login(this.formulario.value).subscribe(data => {
      localStorage.setItem('token', data["token"]);
      this.router.navigate(['']);
    });
  }
}
