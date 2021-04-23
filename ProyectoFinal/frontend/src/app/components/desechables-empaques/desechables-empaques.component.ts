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
    desechables: Desechables[] = [];
    dataSource;

  displayedColumnsDesechablesEmpaques: string[] = ['codigo', 'nombre', 'cantidad', 'restaurante', 'update', 'delete'];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
      this.viewDesechables();

    // this.taskService.getBufet()
    // .subscribe((bufet: Bufet[]) =>{ this.dataSource = bufet });
  }

  viewDesechables() {
      this.taskService.getDesechables()
      .subscribe((desechables: Desechables) => { this.dataSource = desechables });
  }

  addDesechables(codigo: string, nombre: string, cantidad: number, nombre_restaurante: string, marca: string, descripcion: string) {
      this.taskService.postDesechables(codigo, nombre, cantidad, nombre_restaurante, marca, descripcion )
      .subscribe((desechables: Desechables) => this.router.navigate(['/']));
  }
}
