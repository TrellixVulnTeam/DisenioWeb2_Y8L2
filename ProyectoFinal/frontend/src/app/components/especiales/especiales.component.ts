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
  dataSource;
  dataSourceBebidasCalientes;
  dataSourceBebidasFrias;
  dataSourceBebidasGaseosas;
  userInputName: string;
  userInputCodigo: string;

  displayedColumns: string[] = ['codigo', 'nombre', 'precio', 'tipo', 'unidad_medida'];

  displayedColumnsBebidasCalientes: string[] = ['codigo', 'nombre', 'precio', 'restaurante'];

  displayedColumnsBebidasGaseosas: string[] = ['codigo', 'nombre', 'precio'];

  displayedColumnsLicores: string[] = ['codigo', 'nombre', 'cantidad', 'precio', 'nacionalidad'];

  displayedColumnsVinos: string[] = ['codigo', 'nombre', 'precio', 'nacionalidad', 'anio'];

  displayedColumnsEspeciales: string[] = ['codigo', 'nombre', 'ingredientes', 'precio', 'detalles'];

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

  addBufet(codigo: string, nombre: string, precio: string, tipo: string, unidad_medida: string) {
    this.taskService.postBufet(codigo, nombre, precio, tipo, unidad_medida)
    .subscribe((bufets : Bufet) => this.router.navigate(['/restaurantes']));
  }

  viewBufet() {
    this.taskService.getBufet()
    .subscribe((bufet: Bufet[]) =>{ this.dataSource = bufet });
  }

  viewBebidasCalientes() {
    this.taskService.getBebidasCalientes()
    .subscribe((bebidas_calientes : BebidasCalientes[]) => { this.dataSourceBebidasCalientes = bebidas_calientes });
  }

  addBebidasCalientes(codigo: string, nombre: string, ingredientes: string, precio: string, restaurante: string, descripcion: string) {
    this.taskService.postBebidasCalientes(codigo, nombre, ingredientes, precio, restaurante, descripcion)
    .subscribe((bebidascalientes: BebidasCalientes) => this.router.navigate(['/']))
  }

  viewBebidasFrias() {
    this.taskService.getBebidasFrias()
    .subscribe((bebidas_frias : BebidasFrias[]) => { this.dataSourceBebidasFrias = bebidas_frias });
  }

  addBebidasFrias(codigo: string, nombre: string, ingredientes: string, precio: string, restaurante: string, descripcion: string) {
    this.taskService.postBebidasFrias(codigo, nombre, ingredientes, precio, restaurante, descripcion)
    .subscribe((bebidas_frias: BebidasFrias) => this.router.navigate(['/']))
  }

  viewBebidasGaseosas() {
    this.taskService.getBebidasGaseosas()
    .subscribe((bebidas_gaseosas : BebidasGaseosas[]) => { this.dataSourceBebidasGaseosas = bebidas_gaseosas });
  }

  addBebidasGaseosas(codigo: String, nombre: String, marca: String, nacionalidad: String, precio: String, restaurante: String, cantidad: String, descripcion: String) {
    this.taskService.postBebidasGaseosas(codigo, nombre, marca, nacionalidad, precio, restaurante, cantidad, descripcion)
    .subscribe((bebidas_gaseosas: BebidasGaseosas) => this.router.navigate(['/']))
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
