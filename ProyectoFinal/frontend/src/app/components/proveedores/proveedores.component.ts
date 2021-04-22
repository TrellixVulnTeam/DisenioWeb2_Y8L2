import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Proveedores from 'src/app/models/proveedore';
import Marcas from 'src/app/models/marcas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores : Proveedores[] = [];
  marcas : Marcas[] = [];

  dataSource;
  dataSourceMarcas;
  datasourceProveedores;

  displayedColumnsMarca: string[] = ['codigo', 'nombre', 'descripcion', 'nacionalidad', 'empresa', 'telefono'];
  displayedColumnsProveedores: string[] = ['codigo', 'nombre', 'prim_apellido', 'seg_apellido', 'tel_oficina', 'fax', 'celular'];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    // this.viewProveedores();
    this.viewMarcas();
    this.viewProveedores();
  }

  viewMarcas() {
    this.taskService.getMarcas()
    .subscribe((marcas: Marcas[]) => { this.dataSourceMarcas = marcas })
  }

  viewProveedores() {
    this.taskService.getProveedores()
    .subscribe((proveedores : Proveedores) => { this.datasourceProveedores = proveedores })
  }

  addMarcas(codigo: String, nombre: String, descripcion: String, nacionalidad: String, nombre_empresa: String, telefono_empresa: Number, cedula_juridicaEmpresa: String, detalle_empresa: String) {
    this.taskService.postMarcas(codigo, nombre, descripcion, nacionalidad, nombre_empresa, telefono_empresa, cedula_juridicaEmpresa, detalle_empresa)
    .subscribe((marcas: Marcas) => this.router.navigate['/']);
  }

  addProvedores(codigo: String, nombre: String, primer_apellido: String, segundo_apellido: String, telefono_oficina: Number, fax: String, celular: Number, cedula: String, fecha_ingreso: Number, nombre_proveedor: String, correo: String, direccion: String, nombre_contactoEmpresa: String, telefono_contactoEmpresa: Number, direccion_empresa: String) {
    this.taskService.postProveedores(codigo, nombre, primer_apellido, segundo_apellido, telefono_oficina, fax, celular, cedula, fecha_ingreso, nombre_proveedor, correo, direccion, nombre_contactoEmpresa, telefono_contactoEmpresa, direccion_empresa)
    .subscribe((proveedores: Proveedores) => this.router.navigate['/']);

  }
}
