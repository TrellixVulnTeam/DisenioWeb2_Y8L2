import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Pais from 'src/app/models/paises';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  pais : Pais[] = [];
  selected;
  dataSource;

  //d

  displayedColumnsPaises: string[] = ['codigo', 'pais'];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    // this.taskService.getPaises()
    // .subscribe((paises: Pais[]) =>{ this.dataSource = paises });

    this.taskService.getPaises()
    .subscribe((pais : Pais) =>{ this.dataSource = pais})
  }

  addPais(codigo: string, nombre: string, bandera: string) {
    this.taskService.postPais(codigo, nombre, bandera)
    .subscribe((pais : Pais) => this.router.navigate(['/']));
  }

}
