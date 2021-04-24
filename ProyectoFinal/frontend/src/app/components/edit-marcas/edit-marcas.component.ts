import { Component, OnInit } from '@angular/core';
import Marcas from 'src/app/models/marcas';
import { TaskService } from '../../services/task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-marcas',
  templateUrl: './edit-marcas.component.html',
  styleUrls: ['./edit-marcas.component.css']
})
export class EditMarcasComponent implements OnInit {
    getId: any;

  constructor(private taskService : TaskService, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.getId = this.activatedRoute.snapshot.paramMap.get('codigo');
  }

  ngOnInit(): void {
  }

  editMarcas(codigo, nombre, descripcion, nacionalidad, nombre_empresa, telefono_empresa, cedula_juridica, detalle_empresa) {
      this.taskService.patchMarcas(codigo, nombre, descripcion, nacionalidad, nombre_empresa, telefono_empresa, cedula_juridica, detalle_empresa)
      .subscribe((marcas : Marcas) => this.router.navigate(['/success-update']))
  }

}
