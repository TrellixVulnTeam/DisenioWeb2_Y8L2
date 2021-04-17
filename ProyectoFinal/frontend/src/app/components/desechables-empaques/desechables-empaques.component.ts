import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Bufet from 'src/app/models/bufet';
import Desechables from 'src/app/models/desechables';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desechables-empaques',
  templateUrl: './desechables-empaques.component.html',
  styleUrls: ['./desechables-empaques.component.css']
})
export class DesechablesEmpaquesComponent implements OnInit {
  // bufet : Bufet[] = [];
  desechables : Desechables[] = [];
  dataSource;

  displayedColumnsDesechablesEmpaques: string[] = ['codigo', 'nombre', 'cantidad', 'restaurante'];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.taskService.getBufet()
    .subscribe((bufet: Bufet[]) =>{ this.dataSource = bufet });
  }
}
