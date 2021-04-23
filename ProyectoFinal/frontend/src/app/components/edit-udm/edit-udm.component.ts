import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import UDM from 'src/app/models/unidad_de_medida';
import detalleUDM from 'src/app/models/detalleUDM';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-udm',
  templateUrl: './edit-udm.component.html',
  styleUrls: ['./edit-udm.component.css']
})
export class EditUDMComponent implements OnInit {
    getId: any;
  constructor(private taskService: TaskService, private router: Router) { 
  this.getId = this.activatedRoute.snapshot.paramMap.get('codigo');
  }
  ngOnInit(): void {
  }


editUDM(udmId: string, codigo: string, unidad: string, escala: string, detalle: string, simbolo: string, simologia: string) {
    this.taskService.patchUnidadMedida(this.getId, codigo, unidad, escala, detalle, simbolo, simologia)
    .subscribe((udm: UDM ) => this.router.navigate(['/seguridad']));
  }

}
