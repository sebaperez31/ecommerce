import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  home() {
    this.router.navigate(['']);
  }

  login() {
    this.router.navigate(['login']);
  }

  logout() {
    localStorage.removeItem('token');
    this.login();
  }

  registro() {
    this.router.navigate(['registro']);
  }

  isLogged() {
    return localStorage.getItem('token') != null;
  }
}
