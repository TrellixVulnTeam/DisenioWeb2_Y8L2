import { Component, OnInit } from '@angular/core';
import Empleados from 'src/app/models/empleados';
import { TaskService } from '../../services/task.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-empleados',
  templateUrl: './edit-empleados.component.html',
  styleUrls: ['./edit-empleados.component.css']
})
export class EditEmpleadosComponent implements OnInit {

  getId: any;

  constructor(private taskService : TaskService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('codigo');
  }

  ngOnInit(): void {
  }

  reportId() {
    console.log(this.getId);
  }

  editEmpleados(idEmpleados: String, codigo: string, cedula: string, nombre: string, primer_apellido: string, segundo_apellido: string, telefono_1: string, telefono_2: string, puesto: string, nacionalidad: string, ) {
    this.taskService.patchEmpleados(this.getId, codigo, cedula, nombre, primer_apellido, segundo_apellido, telefono_1, telefono_2, puesto, nacionalidad)
      .subscribe((empleados: Empleados) => this.router.navigate(['/']));
  }

}
