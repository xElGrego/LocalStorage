import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregarclientes',
  templateUrl: './agregarclientes.component.html',
  styleUrls: ['./agregarclientes.component.scss'],
})
export class AgregarclientesComponent implements OnInit {
  formularioAgregar: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formularioAgregar = this.fb.group({
      nombre    : ['', Validators.required],
      apellido  : ['', Validators.required],
      direccion : ['', Validators.required]
    })
  }
}
