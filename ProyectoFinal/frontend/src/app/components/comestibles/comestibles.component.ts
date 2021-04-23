import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Bufet from 'src/app/models/bufet';
import Comestibles from 'src/app/models/comestibles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comestibles',
  templateUrl: './comestibles.component.html',
  styleUrls: ['./comestibles.component.css']
})
export class ComestiblesComponent implements OnInit {
  // bufet : Bufet[] = [];
  comestibles : Comestibles[] = [];
  dataSource;

  displayedColumnsComestibles: string[] = ['codigo', 'nombre', 'cantidad', 'restaurante',  'update', 'delete'];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.viewComestibles();
  }

  viewComestibles() {
    this.taskService.getComestibles()
    .subscribe((comestibles: Comestibles[]) =>{ this.dataSource = comestibles });
  }

  addComestible(codigo: String, nombre: String, cantidad: Number, restaurante: String, tipo_comestible: String, marca: String, clase_comestible: String, linea_comestible: String, unidad_medida: String) {
    this.taskService.postComestibles(codigo, nombre, cantidad, restaurante, tipo_comestible, marca, clase_comestible, linea_comestible, unidad_medida)
    .subscribe((comestible: Comestibles) => this.router.navigate(['/']));
  }

}
