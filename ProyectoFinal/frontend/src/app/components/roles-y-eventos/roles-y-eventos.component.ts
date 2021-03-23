import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Rolentos from 'src/app/models/roles_y_eventos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles-y-eventos',
  templateUrl: './roles-y-eventos.component.html',
  styleUrls: ['./roles-y-eventos.component.css']
})
export class RolesYEventosComponent implements OnInit {
  rolentos : Rolentos[] = [];
  selected;
  dataSource;

  optionsAdmin: string[] = ['Administrador del systema', 'Administrador de seguridad', 'Administrador del restaurante', 'Administrador de cuentas'];
  displayedColumnsRoles: string[] = ['codigo', 'nombre_rol'];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.taskService.getRolesYEventos()
    .subscribe((roleventos: Rolentos[]) =>{ this.dataSource = roleventos });
  }

  addRolento(codigo: string, nombre: string, descripcion: string) {
    this.taskService.postRolento(codigo, nombre, descripcion)
    .subscribe((rolento: Rolentos) => this.router.navigate(['/']));
  }
}
