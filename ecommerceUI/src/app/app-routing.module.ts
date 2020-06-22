import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ComprasComponent } from './compras/compras.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  {path : '', component : HomeComponent },
  {path : 'login', component : LoginComponent },
  {path : 'registro', component : RegistroComponent },
  {path : 'productos/categoria/:cat', component: ProductosComponent },
  {path : 'productos/:id', component : ProductoDetalleComponent },
  {path : 'compras/usuario/:usuarioid', component : ComprasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
