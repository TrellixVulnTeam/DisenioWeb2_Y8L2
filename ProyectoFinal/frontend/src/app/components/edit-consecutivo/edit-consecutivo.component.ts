import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Consecutivos from 'src/app/models/consecutivos';
import { Router, ActivatedRoute } from '@angular/router';
import {MatCheckbox} from '@angular/material/checkbox';

@Component({
  selector: 'app-edit-consecutivo',
  templateUrl: './edit-consecutivo.component.html',
  styleUrls: ['./edit-consecutivo.component.css']
})
export class EditConsecutivoComponent implements OnInit {
 getId: any;
  constructor(private taskService : TaskService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('codigo');
   }

   optionsTipoConsecutivo: string[] =
   [
     'CLI', 'PE', 'PRO', 'PU', 'EVE', 'USU',
     'UM', 'P', 'M', 'COM', 'DE', 'EU',
     'LH', 'TEC', 'RES', 'BUF', 'ESP',
     'BC', 'BH', 'BG', 'L', 'V',
     'EMP', 'ME', 'BIT', 'FAC'
   ];

   falseValue = 'No';
   trueValue = 'Sí';
   CheckedBox = false;

   checkboxChange(checkbox: MatCheckbox, checked: boolean) {
     checkbox.value = checked ? this.trueValue : this.falseValue;
   }

  ngOnInit(): void {
  }

  editConse(ConsecutivoId: string, codigo:string, tipo: string, descripcion: string, valor: string, contiene_prefijo: string, prefijo: string) {
    this.taskService.patchConsecutivos(this.getId, codigo, tipo, descripcion, valor, contiene_prefijo, prefijo)
    .subscribe((consecutivo: Consecutivos) => this.router.navigate(['/']));
  }

}
