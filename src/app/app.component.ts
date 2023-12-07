import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormularioTareaComponent } from './formulario-tarea/formulario-tarea.component';
import { ListadoTareaComponent } from './listado-tarea/listado-tarea.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormularioTareaComponent,ListadoTareaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoList';
}
