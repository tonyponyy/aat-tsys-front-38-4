import { Component, OnInit } from '@angular/core';
import { ListadoService } from '../listado-tarea.service';

@Component({
  standalone:true,
  selector: 'app-listado-tarea',
  templateUrl: './listado-tarea.component.html',
  styleUrls: ['./listado-tarea.component.css']
})
export class ListadoTareaComponent implements OnInit {
  public array_registros : any[] = [];
  constructor(public listadoService: ListadoService) {}

  edit(titulo:string){
    this.listadoService.edit(titulo)
  }

  doit(titulo:string){
    this.listadoService.doit(titulo)
  }

  delete_data(titulo_eliminar:string){
    this.listadoService.delete(titulo_eliminar)
  }

  ngOnInit() {
    this.array_registros = this.listadoService.getRegistros();

  }
}