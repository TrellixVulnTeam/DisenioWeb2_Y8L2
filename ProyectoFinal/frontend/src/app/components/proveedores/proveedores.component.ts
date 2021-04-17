import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Proveedores from 'src/app/models/proveedore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores : Proveedores[] = [];
  dataSource;

  displayedColumnsMarca: string[] = ['codigo', 'nombre', 'prim_apellido', 'seg_apellido', 'tel_oficina', 'fax', 'cel'];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.viewProveedores();
  }

  viewProveedores() {
    this.taskService.getProveedores()
    .subscribe((proveedores: Proveedores[]) => { this.dataSource = proveedores })
  }

}
