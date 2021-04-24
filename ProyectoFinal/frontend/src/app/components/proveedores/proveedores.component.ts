import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Bufet from 'src/app/models/bufet';
import { Router } from '@angular/router';
import Proveedores from 'src/app/models/proveedore';
import Marcas from 'src/app/models/marcas';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  // especialesSelect;
  bufet : Bufet[] = [];
  marca : Marcas[] = [];
  provedoores : Proveedores[] = [];
  dataSourceProveedores;
  dataSourceMarcas;

  displayedColumnsMarca: string[] = ['codigo', 'nombre', 'descripcion', 'nacionalidad', 'empresa', 'telefono', 'update', 'a'];

  displayedColumnsProveedores: string[] = ['codigo', 'nombre', 'nacionalidad', 'empresa', 'telefono', 'update', 'a'];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.viewMarcas();
    this.viewProveedores();
  }

  viewMarcas() {
      this.taskService.getMarcas()
      .subscribe((marcas: Marcas[]) => {this.dataSourceMarcas = marcas});
  }

  deleteMarcas(codigo) {
    if (window.confirm('¿Desea eliminar la marca?')) {
      this.taskService.deleteMarcas(codigo)
      .subscribe((marca: Marcas) =>{
        this.marca.filter(t => t._id != marca._id)
        this.router.navigate(['/success-delete'])
      });
    }
  }

  viewProveedores() {
      this.taskService.getProveedores()
      .subscribe((provedoores : Proveedores[]) => {this.dataSourceProveedores = provedoores})
  }

  postProveedores(codigo, nombre, primer_apellido, segundo_apellido, telefono_oficina, fax, celular, cedula, fecha_ingreso, nombre_proveedor, correo, direccion, nombre_contactoEmpresa, telefono_contactoEmpresa, direccion_empresa) {
      this.taskService.postProveedores(codigo, nombre, primer_apellido, segundo_apellido, telefono_oficina, fax, celular, cedula, fecha_ingreso, nombre_proveedor, correo, direccion, nombre_contactoEmpresa, telefono_contactoEmpresa, direccion_empresa)
      .subscribe((proveedores: Proveedores) => this.router.navigate(['/success-insert']));
  }

  deleteProveedor(codigo) {
    if (window.confirm('¿Desea eliminar el proveedor?')) {
      this.taskService.deleteProveedores(codigo)
      .subscribe((provedoores: Proveedores) =>{
        this.provedoores.filter(t => t._id != provedoores._id)
        this.router.navigate(['/success-delete'])
      });
    }
  }
}
