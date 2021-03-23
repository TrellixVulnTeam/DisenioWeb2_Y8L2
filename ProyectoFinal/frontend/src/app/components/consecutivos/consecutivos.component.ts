import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Consecutivos from 'src/app/models/consecutivos';
import { Router } from '@angular/router';
import {MatCheckbox} from '@angular/material/checkbox';

@Component({
  selector: 'app-consecutivos',
  templateUrl: './consecutivos.component.html',
  styleUrls: ['./consecutivos.component.css']
})
export class ConsecutivosComponent implements OnInit {
  consecutivos : Consecutivos[] = [];
  selected;
  dataSource;

  falseValue = 'No';
  trueValue = 'Sí';
  CheckedBox = false;

  checkboxChange(checkbox: MatCheckbox, checked: boolean) {
    checkbox.value = checked ? this.trueValue : this.falseValue;
  }

  optionsTipoConsecutivo: string[] =
  [
    'CLI', 'PE', 'PRO', 'PU', 'EVE', 'USU',
    'UM', 'P', 'M', 'COM', 'DE', 'EU',
    'LH', 'TEC', 'RES', 'BUF', 'ESP',
    'BC', 'BH', 'BG', 'L', 'V',
    'EMP', 'ME', 'BIT', 'FAC'
  ];
  displayedColumnsConsecutivos: string[] = ['codigo', 'tipo', 'descripcion', 'valor_consecutivo', 'contiene_prefijo'];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    // this.ngAfterViewInit();
    this.taskService.getConsecutivos()
    .subscribe((consecutivos : Consecutivos) => { this.dataSource = consecutivos})
  }

  addConsecutivo(tipo: string, descripcion: string, valor: string, contiene_prefijo: string, prefijo: string) {
    this.taskService.postConsecutivos(tipo, descripcion, valor, contiene_prefijo, prefijo)
    .subscribe((consecutivo : Consecutivos) => this.router.navigate(['/']));
  }

}
