import { Component, OnInit } from '@angular/core';
import Bufet from 'src/app/models/bufet';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit {
  bufet : Bufet[] = [];

  displayedColumnsMesas: string[] = ['codigo', 'nombre', 'numero', 'cantidad', 'restaurante'];

  dataSource;

  constructor(private taskService: TaskService, private router: Router) { }

  ngAfterViewInit() {
    this.taskService.getBufet()
    .subscribe((bufet: Bufet[]) =>{ this.dataSource = bufet });
  }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

}
