import { Injectable, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { Tarea } from "./models/tarea"

@Injectable({
  providedIn: 'root',
})
export class ListadoService {
  private editarTareaSubject = new Subject<Tarea>();  
  registros: Tarea[] = [new Tarea("Cesped", "Cortar el cesped", true), new Tarea("Coche", "Lavar el coche", false)];

delete(titulo_eliminar:string){
  const index = this.registros.findIndex(registro => registro.titulo === titulo_eliminar);
  this.registros.splice(index,1);
}

doit(titulo_eliminar:string){
  const index = this.registros.findIndex(registro => registro.titulo === titulo_eliminar);
  this.registros[index].hecho = !this.registros[index].hecho ;
}


edit(titulo_editar: string) {
  const index = this.registros.findIndex(registro => registro.titulo === titulo_editar);
  let tarea: Tarea = this.registros[index];
  this.editarTareaSubject.next(tarea);
}

getEditarTareaObservable() {
  return this.editarTareaSubject.asObservable();
}

  add(registroNuevo: Tarea){
    const index = this.registros.findIndex(registro => registro.titulo === registroNuevo.titulo);
    console.log(index)
    if (index == -1){
      this.registros.push(registroNuevo);
    }else{
      alert("Ya existe tarea con ese titulo")
    }
  }

  update(registroActualizado: Tarea) {
    const index = this.registros.findIndex(registro => registro.titulo === registroActualizado.titulo);
      this.registros[index] = registroActualizado;
  }

  getRegistros(){
    return this.registros;
  }

}
