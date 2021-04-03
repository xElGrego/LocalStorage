import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarclientesComponent } from './componentes/agregarclientes/agregarclientes.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { HomeComponent } from './componentes/home/home.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { ProductosComponent } from './componentes/productos/productos.component';

const routes: Routes = [
  {
    path: '',component :  HomeComponent
  },
  {
    path : 'pedidos',component : PedidosComponent
  },
  {
    path : 'productos', component : ProductosComponent
  },
  {
    path: 'agregar-clientes', component : AgregarclientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
