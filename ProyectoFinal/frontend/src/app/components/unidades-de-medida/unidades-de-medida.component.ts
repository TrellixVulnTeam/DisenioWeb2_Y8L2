import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Bufet from 'src/app/models/bufet';
import UDM from 'src/app/models/unidad_de_medida';
import detalleUDM from 'src/app/models/detalleUDM';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unidades-de-medida',
  templateUrl: './unidades-de-medida.component.html',
  styleUrls: ['./unidades-de-medida.component.css']
})
export class UnidadesDeMedidaComponent implements OnInit {
  bufet : Bufet[] = [];
  selected;
  dataSource;

  // aab;

  detalles : detalleUDM[] = [];

  optionsAdmin: string[] = ['Administrador del systema', 'Administrador de seguridad', 'Administrador del restaurante', 'Administrador de cuentas'];
  displayedColumnsUDM: string[] = ['codigo', 'unidad_medida', 'escala', 'detalle', 'simbologia'];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.taskService.getUnidadMedida()
    .subscribe((udm: UDM[]) =>{ this.dataSource = udm });

    this.taskService.getDetalle()
    .subscribe((detalle: detalleUDM[]) =>{ this.detalles = detalle })

  }

  addUDM(codigo: string, unidad: string, escala: string, detalle: string, simbolo: string, simologia: string) {
    this.taskService.postUnidadMedida(codigo, unidad, escala, detalle, simbolo, simologia)
    .subscribe((udm: UDM ) => this.router.navigate(['/seguridad']));
  }

  // loadSelector() {
  //   this.taskService.getDetalle()
  //   .subscribe((detalle: detalleUDM) => { this.aab = detalle });
  // }
}
