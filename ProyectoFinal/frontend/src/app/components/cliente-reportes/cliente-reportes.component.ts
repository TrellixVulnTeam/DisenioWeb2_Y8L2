import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Bufet from 'src/app/models/bufet';
import Cliente from 'src/app/models/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-reportes',
  templateUrl: './cliente-reportes.component.html',
  styleUrls: ['./cliente-reportes.component.css']
})
export class ClienteReportesComponent implements OnInit {
  bufet : Bufet[] = [];
  cliente : Cliente[] = [];
  dataSource;

  displayedColumnsClienteReportes: string[] = ['codigo', 'nombre', 'monto_pagado', 'detalle', 'fecha', 'reservacion', 'barra', 'restaurante'];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.taskService.getDatosCliente()
    .subscribe((cliente: Cliente[]) =>{ this.dataSource = cliente });
  }

}
