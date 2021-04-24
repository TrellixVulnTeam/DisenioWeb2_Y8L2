import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Marcas from 'src/app/models/marcas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-proveedores',
  templateUrl: './edit-proveedores.component.html',
  styleUrls: ['./edit-proveedores.component.css']
})
export class EditProveedoresComponent implements OnInit {
    marcas : Marcas[] = [];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }
  addMarcas(codigo, nombre, descripcion, nacionalidad, nombre_empresa, telefono_empresa, cedula_juridicaEmpresa, detalle_empresa) {
    this.taskService.patchMarcas(codigo, nombre, descripcion, nacionalidad, nombre_empresa, telefono_empresa, cedula_juridicaEmpresa, detalle_empresa)
    .subscribe((marcas: Marcas[]) => this.router.navigate(['successful-update']));
}
}
