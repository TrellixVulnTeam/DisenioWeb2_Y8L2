import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import Tareas from 'src/app/models/tareas';
import { TaskService } from '../../src/app/services/task.service';
import { ViewChildren, QueryList, ElementRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

declare const Test: any;


interface Actions {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  tareas: Tareas[] = [];

  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;

  title = 'frontend';

  displayedColumns: string[] = ['id' ,'tarea', 'checkbox', 'responsable', 'action'];
  dataSource = [];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.taskService.getTareas()
    .subscribe((tareas: Tareas[]) => this.dataSource = tareas);

    Test();
  }

  actions: Actions[] = [
    {value: 'edit-0', viewValue: 'Editar'},
    {value: 'delete-1', viewValue: 'Eliminar'}
  ];

  disableSelect = new FormControl(false);

  deleteTarea(id) {
    if (window.confirm('Desea eliminar la tarea?')) {
      this.taskService.deleteTarea(id)
      .subscribe((tareas: Tareas) =>{
        this.tareas.filter(t => t._id != tareas._id)
      });
    }
    
  }

  // deleteBook(id) {
  //   console.log(id);
    
  // }
}
