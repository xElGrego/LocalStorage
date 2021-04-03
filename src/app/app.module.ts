import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { HomeComponent } from './componentes/home/home.component';
import { AgregarclientesComponent } from './componentes/agregarclientes/agregarclientes.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ProductosComponent,
    PedidosComponent,
    ClientesComponent,
    HomeComponent,
    AgregarclientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
