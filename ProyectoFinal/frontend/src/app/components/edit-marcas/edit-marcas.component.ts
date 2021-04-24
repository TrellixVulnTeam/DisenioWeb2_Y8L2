import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Router, ActivatedRoute } from '@angular/router';
import Marcas from 'src/app/models/marcas';

@Component({
  selector: 'app-edit-marcas',
  templateUrl: './edit-marcas.component.html',
  styleUrls: ['./edit-marcas.component.css']
})
export class EditMarcasComponent implements OnInit {
    marcas : Marcas[] = [];
    getId: any;

  constructor(private taskService: TaskService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('codigo');
  }

  ngOnInit(): void {
  }

  d() {

  }
  
  addMarcas(idMarcas, nombre, descripcion, nacionalidad, nombre_empresa, telefono_empresa, cedula_juridicaEmpresa, detalle_empresa) {
      this.taskService.patchMarcas(this.getId, nombre, descripcion, nacionalidad, nombre_empresa, telefono_empresa, cedula_juridicaEmpresa, detalle_empresa)
      .subscribe((marcas: Marcas[]) => this.router.navigate(['successful-update']));
    }

}
