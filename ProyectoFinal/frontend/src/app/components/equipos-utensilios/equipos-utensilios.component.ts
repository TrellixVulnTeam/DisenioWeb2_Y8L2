import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Bufet from 'src/app/models/bufet';
import Equipos from 'src/app/models/equipos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipos-utensilios',
  templateUrl: './equipos-utensilios.component.html',
  styleUrls: ['./equipos-utensilios.component.css']
})
export class EquiposUtensiliosComponent implements OnInit {
  equipos : Equipos[] = [];
  bufet : Bufet[] = [];
  dataSource;

  displayedColumnsEquiposUtensilios: string[] = ['codigo', 'nombre', 'cantidad', 'restaurante'];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.viewEquipos();
  }

  viewEquipos() {
    this.taskService.getEquipos()
    .subscribe((equipos : Equipos[]) => { this.dataSource = equipos });
  }

}
