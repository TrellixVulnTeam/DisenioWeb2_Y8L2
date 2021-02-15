import { Component, OnInit } from '@angular/core';
import Bufet from 'src/app/models/bufet';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-puestos',
  templateUrl: './puestos.component.html',
  styleUrls: ['./puestos.component.css']
})
export class PuestosComponent implements OnInit {
  bufet : Bufet[] = [];

  displayedColumnsPuestos: string[] = ['codigo', 'nombre', 'rol', 'interno', 'externo'];

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
