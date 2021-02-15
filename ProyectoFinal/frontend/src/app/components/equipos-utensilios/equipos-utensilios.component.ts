import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Bufet from 'src/app/models/bufet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipos-utensilios',
  templateUrl: './equipos-utensilios.component.html',
  styleUrls: ['./equipos-utensilios.component.css']
})
export class EquiposUtensiliosComponent implements OnInit {
  bufet : Bufet[] = [];
  dataSource;

  displayedColumnsEquiposUtensilios: string[] = ['codigo', 'nombre', 'cantidad', 'restaurante'];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.taskService.getBufet()
    .subscribe((bufet: Bufet[]) =>{ this.dataSource = bufet });
  }

}
