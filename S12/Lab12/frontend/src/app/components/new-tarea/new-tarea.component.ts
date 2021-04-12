import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';
import Tareas from 'src/app/models/tareas';

@Component({
  selector: 'app-new-tarea',
  templateUrl: './new-tarea.component.html',
  styleUrls: ['./new-tarea.component.css']
})
export class NewTareaComponent implements OnInit {

  tareas: Tareas[] = [];
  CheckBox;
  concluidaInput;
  isChecked = false;

  constructor(private taskService : TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  addTarea(tarea: string, concluida: boolean, responsable: string) {
    this.taskService.postTareas(tarea, concluida, responsable)
    .subscribe((tareas: Tareas) => this.router.navigate[('/')]);
  }

  checkCheckBoxvalue(event){
    console.log(event.checked)
  }

}
