import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Bufet from 'src/app/models/bufet';
import Limpieza from 'src/app/models/limpieza';
import { Router } from '@angular/router';

@Component({
  selector: 'app-limpieza-higiene',
  templateUrl: './limpieza-higiene.component.html',
  styleUrls: ['./limpieza-higiene.component.css']
})
export class LimpiezaHigieneComponent implements OnInit {
  bufet : Bufet[] = [];
  limpieza : Limpieza[] = [];
  dataSource;

  displayedColumnsLimpiezaHigiene: string[] = ['codigo', 'nombre', 'cantidad', 'restaurante', 'update', 'delete'];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.viewLimpiezas();
  }

  viewLimpiezas() {
    this.taskService.getLimpieza()
    .subscribe((limpieza : Limpieza) => {this.dataSource = limpieza});
  }

  postLimpiezas(codigo: string, nombre: string, cantidad: number, nombre_restaurante: string, marca: string, descripcion: string) {
    console.log(codigo);
    this.taskService.postLimpieza(codigo, nombre, cantidad, nombre_restaurante, marca, descripcion)
    .subscribe((limpieaza : Limpieza) => this.router.navigate(['/']));
  }

}
