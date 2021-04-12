import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Tareas from 'src/app/models/tareas';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-tarea',
  templateUrl: './edit-tarea.component.html',
  styleUrls: ['./edit-tarea.component.css']
})
export class EditTareaComponent implements OnInit {
  getId: any;
  tareas: Tareas[] = [];

  constructor(private taskService : TaskService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

  updateTarea(tareaId: string, tarea: string, concluida: boolean, responsable: string) {
    

  }

}
