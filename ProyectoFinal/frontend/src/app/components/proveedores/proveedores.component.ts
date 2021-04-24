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
    
  bufet : Bufet[] = [];
  marcas : Marcas[] = [];
  proveedores: Proveedores[] = [];

  dataSource;
  dataSourceMarcas;
  dataSourceProveedores;

  displayedColumnsMarca: string[] = ['codigo', 'nombre', 'nacionalidad', 'empresa', 'telefono', 'update', 'a'];

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
      .subscribe((marcas: Marcas[]) => { this.dataSourceMarcas = marcas })

  } 

  viewProveedores() {
      this.taskService.getProveedores()
      .subscribe((proveedores: Proveedores[]) => { this.dataSourceProveedores = proveedores })
  }

  addMarcas(codigo, nombre, descripcion, nacionalidad, nombre_empresa, telefono_empresa, cedula_juridicaEmpresa, detalle_empresa) {
      this.taskService.postMarcas(codigo, nombre, descripcion, nacionalidad, nombre_empresa, telefono_empresa, cedula_juridicaEmpresa, detalle_empresa)
      .subscribe((marcas: Marcas[]) => this.router.navigate(['successful-insert']));
  }

  deleteMarcas(codigo) {
    if (window.confirm('¿Desea eliminar el proveedor?')) {
        this.taskService.deleteMarcas(codigo)
        .subscribe((marca: Marcas) =>{
          this.marcas.filter(t => t._id != marca._id)
          this.router.navigate(['/successful-delete'])
        });
      }
  }

//   addProvedores(codigo, nombre, primer_apellido, segundo_apellido, telefono_oficina, fax, celular, cedula, fecha_ingreso, nombre_proveedor, correo, direccion, nombre_contactoEmpresa, telefono_contactoEmpresa, direccion_empresa) {
//       console.log(nombre);
//       this.taskService.postProveedores(codigo, nombre, primer_apellido, segundo_apellido, telefono_oficina, fax, celular, cedula, fecha_ingreso, nombre_proveedor, correo, direccion, nombre_contactoEmpresa, telefono_contactoEmpresa, direccion_empresa)
//       .subscribe((proveedores : Proveedores) => this.router.navigate(['/succesful-insert']))
//   }

//   addProveedores() {
//       this.taskService.postProveedores()
//       .subscribe((proveedores: Proveedores) => this.router.navigate(['/successful-insert']));
//   }
}
