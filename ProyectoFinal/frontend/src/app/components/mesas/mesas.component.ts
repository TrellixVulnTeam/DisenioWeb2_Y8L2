import { Component, OnInit } from '@angular/core';
import Bufet from 'src/app/models/bufet';
import Mesas from 'src/app/models/mesas';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit {
  bufet : Bufet[] = [];
  mesas : Mesas[] = [];

  displayedColumnsMesas: string[] = ['codigo', 'nombre', 'numero', 'cantidad', 'restaurante', 'editar', 'eliminar'];

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

  deleteMesas(codigo) {
    console.log(codigo);
    if (window.confirm('¿Desea eliminar el país?')) {
      this.taskService.deletePais(codigo)
      .subscribe((mesas: Mesas) =>{
        this.mesas.filter(t => t._id != mesas._id)
      });
    }
  }

}
