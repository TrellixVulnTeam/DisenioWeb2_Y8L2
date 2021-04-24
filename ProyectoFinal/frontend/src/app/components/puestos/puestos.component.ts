import { Component, OnInit } from '@angular/core';
import Puestos from 'src/app/models/puestos';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-puestos',
  templateUrl: './puestos.component.html',
  styleUrls: ['./puestos.component.css']
})
export class PuestosComponent implements OnInit {
  puestos : Puestos[] = [];

  displayedColumnsPuestos: string[] = ['codigo', 'nombre', 'rol', 'interno', 'externo', 'editar', 'eliminar'];

  dataSource;

  constructor(private taskService: TaskService, private router: Router) { }

  ngAfterViewInit() {
    this.viewPuestos();

  }

  viewPuestos() {
    this.taskService.getPuestos()
    .subscribe((puestos: Puestos[]) =>{ this.dataSource = puestos });
  }

  addPuestos(codigo: String, nombre: String, interno: String, externo: String, rol_restaurante: String) {
    this.taskService.postPuestos(codigo, nombre, interno, externo, rol_restaurante)
    .subscribe((puestos : Puestos) => this.router.navigate(['/']));
  }

  deletePuestos(codigo) {
    console.log(codigo);
    if (window.confirm('¿Desea eliminar el puesto?')) {
      this.taskService.deletePuestos(codigo)
      .subscribe((puestos: Puestos) =>{
        this.puestos.filter(t => t._id != puestos._id)
      });
    }
  }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

}
