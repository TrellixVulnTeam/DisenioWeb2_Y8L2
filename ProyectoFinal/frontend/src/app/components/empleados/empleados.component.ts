import { Component, OnInit } from '@angular/core';
import Bufet from 'src/app/models/bufet';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  bufet : Bufet[] = [];

  displayedColumnsEmpleados: string[] = ['codigo', 'cedula', 'nombre', 'prim_apellido', 'seg_apellido'];

  dataSource;

  constructor(private taskService: TaskService, private router: Router) { }

  ngAfterViewInit() {
    this.taskService.getBufet()
    .subscribe((bufet: Bufet[]) =>{ this.dataSource = bufet });
  }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

}
