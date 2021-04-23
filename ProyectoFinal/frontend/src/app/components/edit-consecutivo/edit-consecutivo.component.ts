import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Consecutivos from 'src/app/models/consecutivos';
import { Router } from '@angular/router';
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

  ngOnInit(): void {
  }

  editConse(ConsecutivoId: string, codigo:string, tipo: string, descripcion: string, valor: string, contiene_prefijo: string, prefijo: string) {
    this.taskService.patchConsecutivos(this.getId, codigo, tipo, descripcion, valor, contiene_prefijo, prefijo)
    .subscribe((consecutivo: Consecutivos) => this.router.navigate(['/']));
  }

}
