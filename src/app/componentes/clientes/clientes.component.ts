import { Component, OnInit } from '@angular/core';

interface Clientes {
  nombre: string;
  apellido: string;
  edad: number;
}

interface Productos {
  nombre: string;
  precio: number;
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  guardarCliente() {
    let clientesAgregar: Array<Clientes> = new Array<Clientes>();
    clientesAgregar.push(
      {
        nombre: 'Gregorio',
        apellido: 'Avila ',
        edad: 23,
      },
      {
        nombre: 'Andres',
        apellido: 'Macancela ',
        edad: 23,
      }
    );
    localStorage.setItem('clientes', JSON.stringify(clientesAgregar));
  }

  guardarProducto() {
    let productosAgregar: Array<Productos> = new Array<Productos>();
    productosAgregar.push(
      {
        nombre: 'Chocolate',
        precio: 21,
      },
      {
        nombre: 'Cacao',
        precio: 25,
      }
    );
    localStorage.setItem('productos', JSON.stringify(productosAgregar));
  }

  get ClientesLocales(): Clientes[] {
    let clientesLocalStorage: Clientes[] = JSON.parse(
      localStorage.getItem('clientes') as string
    );
    if (clientesLocalStorage == null) {
      return new Array<Clientes>();
    }
    return clientesLocalStorage;
  }

  get productosLocales(): Productos[] {
    let productosLocaleStorage: Productos[] = JSON.parse(
      localStorage.getItem('productos') as string
    );
    if (productosLocaleStorage == null) {
      return new Array<Productos>();
    }
    return productosLocaleStorage;
  }

  eliminarCliente() {
    localStorage.removeItem('clientes');
  }

  eliminarProducto() {
    localStorage.removeItem('productos');
  }
  eliminarTodo() {
    localStorage.clear();
  }
}
