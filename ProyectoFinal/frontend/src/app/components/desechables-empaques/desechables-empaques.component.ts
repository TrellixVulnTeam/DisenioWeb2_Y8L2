import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Bufet from 'src/app/models/bufet';
import Desechables from 'src/app/models/desechables';
import { Router } from '@angular/router';

interface Restaurantes {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-desechables-empaques',
  templateUrl: './desechables-empaques.component.html',
  styleUrls: ['./desechables-empaques.component.css']
})
export class DesechablesEmpaquesComponent implements OnInit {

  options: Restaurantes[] = [
    {value: 'Piccola Stella', viewValue: 'Piccola Stella'},
    {value: 'Turin Anivo', viewValue: 'Turin Anivo'},
    {value: 'Notte di Fuoco', viewValue: 'Notte di Fuoco'}
  ];



  // bufet : Bufet[] = [];
  desechables : Desechables[] = [];
  dataSource;

  displayedColumnsDesechablesEmpaques: string[] = ['codigo', 'nombre', 'cantidad', 'restaurante'];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.viewDesechables();
  }

  viewDesechables() {
    this.taskService.getDesechables()
    .subscribe((desechables : Desechables[]) => { this.dataSource = desechables });
  }

  addDesechable(codigo: String, nombre: String, cantidad: Number, nombre_restaurante: String, marca: String, descripcion: Number) {
    this.taskService.postDesechables(codigo, nombre, cantidad, nombre_restaurante, marca, descripcion)
    .subscribe((desebacles: Desechables[]) => this.router.navigate[('/')])
  }
}
