import { Component, OnInit } from '@angular/core';
import Mesas from 'src/app/models/marcas';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})

export class MarcasComponent implements OnInit {

  displayedColumnsMesas: string[] = ['codigo', 'nombre', 'numero', 'cantidad', 'restaurante'];

  dataSource;

  constructor(private taskService: TaskService, private router: Router) { }

  ngAfterViewInit() {
    this.viewMesas();
  }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  viewMesas() {
    this.taskService.getMesas()
    .subscribe((mesas : Mesas[]) => { this.dataSource = mesas });
  }

  postMesas(codigo: String, nombre: String, numero: Number, cantidad_sillas: Number, nombre_restaurante: String) {
    this.taskService.postMesas(codigo, nombre, numero, cantidad_sillas, nombre_restaurante)
    .subscribe((mesas : Mesas)  => this.router.navigate(['/']));
  }
}
