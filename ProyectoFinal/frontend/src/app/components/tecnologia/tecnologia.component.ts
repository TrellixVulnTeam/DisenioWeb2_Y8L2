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

  displayedColumnsLimpiezaHigiene: string[] = ['codigo', 'nombre', 'cantidad', 'restaurante', 'update', 'delete'];

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

  postTecnologia(codigo: string, nombre: string, cantidad: number, nombre_restaurante: string, precio : number, marca: string, descripcion: string) {
    this.taskService.postTecnologia(codigo, nombre, cantidad, nombre_restaurante, precio, marca, descripcion)
    .subscribe((tecnologia : Tecnologia) => this.router.navigate(['/']));
  }
}
