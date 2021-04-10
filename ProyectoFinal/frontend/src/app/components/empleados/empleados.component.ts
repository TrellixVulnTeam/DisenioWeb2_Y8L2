import { Component, OnInit } from '@angular/core';
import Bufet from 'src/app/models/bufet';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
import Empleados from 'src/app/models/empleados';

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
    this.viewEmpleados();
  }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  viewEmpleados() {
    this.taskService.getEmpleados()
    .subscribe((empleado: Empleados[]) => { this.dataSource = empleado });
  }

  postEmpleados(codigo: String, cedula: String, nombre: String, primer_apellido: String, segundo_apellido: String, telefono_1: String, telefono_2: String, puesto: String, nacionalidad: String) {
    this.taskService.postEmpleados(codigo, cedula, nombre, primer_apellido, segundo_apellido, telefono_1, telefono_2, puesto, nacionalidad)
    .subscribe((empleados: Empleados) => this.router.navigate(['/']));
  }



}
