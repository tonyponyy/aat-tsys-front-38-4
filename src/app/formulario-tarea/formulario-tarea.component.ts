import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, formatPercent } from '@angular/common';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ListadoService } from '../listado-tarea.service';
import { Tarea } from '../models/tarea';

@Component({
  selector: 'app-formulario-tarea',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './formulario-tarea.component.html',
  styleUrl: './formulario-tarea.component.css',
})
export class FormularioTareaComponent implements OnInit {
  constructor(public listadoService: ListadoService) {}
  protected validation_titulo: string = '';
  protected validation_descripcion: string = '';
  protected validation_hecho: string = '';
  protected form: FormGroup = new FormGroup({
    titulo: new FormControl(''),
    descripcion: new FormControl(''),
    hecho: new FormControl(''),
  });

  ngOnInit() {
    this.listadoService.getEditarTareaObservable().subscribe((tarea) => {
      this.edit(tarea);
    });
  }

  validate() {
    return true;
  }

  clean() {
    this.form.reset();
  }

  edit(tarea: Tarea) {
    this.form.get('titulo')?.setValue(tarea.titulo);
    this.form.get('descripcion')?.setValue(tarea.descripcion);
  }
  send_data() {
    let validate = this.validate();
    if (validate) {
      var titulo = this.form.get('titulo')?.value;
      var descripcion = this.form.get('descripcion')?.value;
      var hecho = true;
    this.listadoService.add(new Tarea(titulo, descripcion, hecho));
  }
    this.clean();
  }

  update_data() {
    if (this.validate()) {
      var titulo = this.form.get('titulo')?.value;
      var descripcion = this.form.get('descripcion')?.value;
      console.log(new Tarea(titulo, descripcion, true));
      this.listadoService.update(new Tarea(titulo, descripcion, true));
      this.clean();
    }
  }
}
