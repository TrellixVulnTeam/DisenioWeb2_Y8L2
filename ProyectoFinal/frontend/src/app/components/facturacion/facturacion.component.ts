import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Bufet from 'src/app/models/bufet';
import Facturacion from 'src/app/models/facturacion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {
  facturacion : Facturacion[] = [];
  dataSource;

  displayedColumnsFacturacion: string[] = ['codigo', 'fecha_registro', 'descripcion', 'entrada_dinero', 'apertura_caja', 'cierre_caja', 'restaurante'];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.taskService.getFacturacion()
    .subscribe((facturacion: Facturacion[]) =>{ this.dataSource = facturacion });
  }
}
