import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Bufet from 'src/app/models/bufet';
import BebidasCalientes from 'src/app/models/bebidas_calientes';
import BebidasFrias from 'src/app/models/bebidas_frias';
import BebidasGaseosas from 'src/app/models/bebidas_gaseosas';
import { Router } from '@angular/router';

interface Especiales {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-especiales',
  templateUrl: './especiales.component.html',
  styleUrls: ['./especiales.component.css']
})
export class EspecialesComponent implements OnInit {
  especialesSelect;
  bufet : Bufet[] = [];
  bebidas_calientes : BebidasCalientes[] = [];
  bebidas_frias : BebidasFrias[] = [];
  bebidas_gaseosas : BebidasGaseosas[] = [];
  dataSource;
  dataSourceBebidasCalientes;
  dataSourceBebidasFrias;
  dataSourceBebidasGaseosas;
  userInputName: string;
  userInputCodigo: string;

  displayedColumns: string[] = ['codigo', 'nombre', 'precio', 'tipo', 'unidad_medida', 'editar', 'eliminar'];

  displayedColumnsBebidasCalientes: string[] = ['codigo', 'nombre', 'precio', 'restaurante', 'editar', 'eliminar'];

  displayedColumnsBebidasGaseosas: string[] = ['codigo', 'nombre', 'precio', 'editar', 'eliminar'];

  displayedColumnsLicores: string[] = ['codigo', 'nombre', 'cantidad', 'precio', 'nacionalidad', 'editar', 'eliminar'];

  displayedColumnsVinos: string[] = ['codigo', 'nombre', 'precio', 'nacionalidad', 'anio', 'editar', 'eliminar'];

  displayedColumnsEspeciales: string[] = ['codigo', 'nombre', 'ingredientes', 'precio', 'detalles', 'editar', 'eliminar'];

  especiales: Especiales[] = [
    {value: 'bufet', viewValue: 'Bufet'},
    {value: 'bebidas', viewValue: 'Bebidas'},
    {value: 'especiales', viewValue: 'Especiales'}
  ];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.viewBufet();
    this.viewBebidasCalientes();
    this.viewBebidasFrias();
    this.viewBebidasGaseosas();
  }

  /* BUFET */
  addBufet(codigo: string, nombre: string, precio: string, tipo: string, unidad_medida: string) {
    this.taskService.postBufet(codigo, nombre, precio, tipo, unidad_medida)
    .subscribe((bufets : Bufet) => this.router.navigate(['/restaurantes']));
  }
  deleteBufet(codigo) {
    console.log(codigo);
    if (window.confirm('¿Desea eliminar el bufet?')) {
      this.taskService.deleteBufet(codigo)
      .subscribe((bufet: Bufet) =>{
        this.bufet.filter(t => t._id != bufet._id)
      });
    }
  }

  viewBufet() {
    this.taskService.getBufet()
    .subscribe((bufet: Bufet[]) =>{ this.dataSource = bufet });
  }


  /* BEBIDAS CALIENTES */
  viewBebidasCalientes() {
    this.taskService.getBebidasCalientes()
    .subscribe((bebidas_calientes : BebidasCalientes[]) => { this.dataSourceBebidasCalientes = bebidas_calientes });
  }

  addBebidasCalientes(codigo: string, nombre: string, ingredientes: string, precio: string, restaurante: string, descripcion: string) {
    this.taskService.postBebidasCalientes(codigo, nombre, ingredientes, precio, restaurante, descripcion)
    .subscribe((bebidascalientes: BebidasCalientes) => this.router.navigate(['/']))
  }

  deleteBebidasCalientes(codigo) {
    console.log(codigo);
    if (window.confirm('¿Desea eliminar la bebida caliente?')) {
      this.taskService.deleteBebidasCalientes(codigo)
      .subscribe((bebidas_calientes: BebidasCalientes) =>{
        this.bebidas_calientes.filter(t => t._id != bebidas_calientes._id)
      });
    }
  }


  /* BEBIDAS FRIAS */
  viewBebidasFrias() {
    this.taskService.getBebidasFrias()
    .subscribe((bebidas_frias : BebidasFrias[]) => { this.dataSourceBebidasFrias = bebidas_frias });
  }

  addBebidasFrias(codigo: string, nombre: string, ingredientes: string, precio: string, restaurante: string, descripcion: string) {
    this.taskService.postBebidasFrias(codigo, nombre, ingredientes, precio, restaurante, descripcion)
    .subscribe((bebidas_frias: BebidasFrias) => this.router.navigate(['/']))
  }

  deleteBebidasFrias(codigo) {
    console.log(codigo);
    if (window.confirm('¿Desea eliminar la bebida fria?')) {
      this.taskService.deleteBebidasFrias(codigo)
      .subscribe((bebidas_frias: BebidasFrias) =>{
        this.bebidas_frias.filter(t => t._id != bebidas_frias._id)
      });
    }
  }


  /* BEBIDAS GASEOSAS */
  viewBebidasGaseosas() {
    this.taskService.getBebidasGaseosas()
    .subscribe((bebidas_gaseosas : BebidasGaseosas[]) => { this.dataSourceBebidasGaseosas = bebidas_gaseosas });
  }

  addBebidasGaseosas(codigo: String, nombre: String, marca: String, nacionalidad: String, precio: String, restaurante: String, cantidad: String, descripcion: String) {
    this.taskService.postBebidasGaseosas(codigo, nombre, marca, nacionalidad, precio, restaurante, cantidad, descripcion)
    .subscribe((bebidas_gaseosas: BebidasGaseosas) => this.router.navigate(['/']))
  }
  deleteBebidasGaseosas(codigo) {
    console.log(codigo);
    if (window.confirm('¿Desea eliminar la bebida gaseosa?')) {
      this.taskService.deleteBebidasGaseosas(codigo)
      .subscribe((bebidas_gaseosas: BebidasGaseosas) =>{
        this.bebidas_gaseosas.filter(t => t._id != bebidas_gaseosas._id)
      });
    }
  }

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
