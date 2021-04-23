import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Bufet from 'src/app/models/bufet';
import Cliente from 'src/app/models/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes : Cliente[] = [];
  // bufet : Bufet[] = [];
  dataSource;
  displayedColumns: string[] =
  [
    'codigo',
    'nombre',
    'monto_pagado',
    'detalle',
    'fecha',
    'reservacion',
    'barra',
    'restaurante'
  ];
  userInputName: string;
  userInputCodigo: string;

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    // this.viewClientes();
  }

//   viewClientes() {
//     this.taskService.getClientes()
//     .subscribe((clientes: Cliente[]) =>{ this.dataSource = clientes });
//   }


  busquedaCodigo() {
    if (this.userInputCodigo !="") {
      this.dataSource = this.dataSource.filter(res =>{
        return res.codigo.toLocaleLowerCase().match(this.userInputCodigo.toLocaleLowerCase());
      });
    } else if (this.userInputCodigo == "" || this.userInputName == "") {
      this.ngOnInit();
    }
  }

  applyFilterCode() {
    if (this.userInputCodigo != "") {

      this.dataSource = this.dataSource.filter(res =>{
        return res.codigo.toLocaleLowerCase().match(this.userInputCodigo.toLocaleLowerCase())
      });

    } else if (this.userInputCodigo == "") {
      this.ngOnInit();
    }
  }

  busquedaNombre() {
    if (this.userInputName !="") {
      this.dataSource = this.dataSource.filter(res =>{
        return res.nombre.toLocaleLowerCase().match(this.userInputName.toLocaleLowerCase());
      });
    } else if (this.userInputName == "" || this.userInputCodigo == "") {
      this.ngOnInit();
    }
  }
}
