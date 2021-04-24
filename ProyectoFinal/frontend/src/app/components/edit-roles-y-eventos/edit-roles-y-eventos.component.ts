import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Rolentos from 'src/app/models/roles_y_eventos';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-roles-y-eventos',
  templateUrl: './edit-roles-y-eventos.component.html',
  styleUrls: ['./edit-roles-y-eventos.component.css']
})
export class EditRolesYEventosComponent implements OnInit {
  getId: any;
  constructor(private taskService: TaskService, private router: Router, private activatedRoute : ActivatedRoute) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('codigo');
   }

  ngOnInit(): void {
  }

 editRolento(rolentoId:string, codigo: string, nombre: string, descripcion: string) {
    this.taskService.patchRolento(this.getId, codigo, nombre, descripcion)
    .subscribe((rolento: Rolentos) => this.router.navigate(['/']));
  }

}
