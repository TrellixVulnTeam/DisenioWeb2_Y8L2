import { Component, OnInit } from '@angular/core';
import Proveedores from 'src/app/models/proveedore';
import { TaskService } from '../../services/task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-proveedores',
  templateUrl: './edit-proveedores.component.html',
  styleUrls: ['./edit-proveedores.component.css']
})
export class EditProveedoresComponent implements OnInit {
    getId: any;

  constructor(private taskService: TaskService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('codigo');
  }

  ngOnInit(): void {
  }

  updateProveedor(codigo, nombre, primer_apellido, segundo_apellido, telefono_oficina, fax, celular, cedula, fecha_ingreso, nombre_proveedor, correo, direccion, nombre_contactoEmpresa, telefono_contactoEmpresa, direccion_empresa) {
      this.taskService.postProveedores(codigo, nombre, primer_apellido, segundo_apellido, telefono_oficina, fax, celular, cedula, fecha_ingreso, nombre_proveedor, correo, direccion, nombre_contactoEmpresa, telefono_contactoEmpresa, direccion_empresa)
      .subscribe((proveedores: Proveedores) => this.router.navigate(['/success-update']));
  }

}
