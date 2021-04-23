import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Bufet from 'src/app/models/bufet';
import Tecnologia from 'src/app/models/tecnologia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {
  tecnologia: Tecnologia[] = [];
  bufet : Bufet[] = [];
  dataSource;

  displayedColumnsLimpiezaHigiene: string[] = ['codigo', 'nombre', 'cantidad', 'restaurante'];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.viewTecnologia();
  }

  viewTecnologia() {
    this.taskService.getTecnologia()
    .subscribe((tecnologia: Tecnologia) => { this.dataSource = tecnologia});
  }
}
