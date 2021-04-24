import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Bufet from 'src/app/models/bufet';
import BebidasCalientes from 'src/app/models/bebidas_calientes';
import BebidasFrias from 'src/app/models/bebidas_frias';
import BebidasGaseosas from 'src/app/models/bebidas_gaseosas';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-especiales',
  templateUrl: './edit-especiales.component.html',
  styleUrls: ['./edit-especiales.component.css']
})
export class EditEspecialesComponent implements OnInit {

  getId: any;
  constructor(private taskService: TaskService, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.getId = this.activatedRoute.snapshot.paramMap.get('codigo');
  }

  ngOnInit(): void {
  }

  reportId() {
    console.log(this.getId);
}

  editBufet(bufetId: String, codigo: string, nombre: string, precio: string, tipo: string, unidad_medida: string) {
    this.taskService.patchBufet(this.getId, codigo, nombre, precio, tipo, unidad_medida)
    .subscribe((bufets : Bufet) => this.router.navigate(['/restaurantes']));
  }

  editBebidasCalientes(bebidaCId: String, codigo: string, nombre: string, ingredientes: string, precio: string, restaurante: string, descripcion: string) {
    this.taskService.patchBebidasCalientes(this.getId, codigo, nombre, ingredientes, precio, restaurante, descripcion)
    .subscribe((bebidascalientes: BebidasCalientes) => this.router.navigate(['/']))
  }

  editBebidasFrias(bebidaFId: String, codigo: string, nombre: string, ingredientes: string, precio: string, restaurante: string, descripcion: string) {
    this.taskService.patchBebidasFrias(this.getId, codigo, nombre, ingredientes, precio, restaurante, descripcion)
    .subscribe((bebidas_frias: BebidasFrias) => this.router.navigate(['/']))
  }

  editBebidasGaseosas(bebidaGId: String, codigo: String, nombre: String, marca: String, nacionalidad: String, precio: String, restaurante: String, cantidad: String, descripcion: String) {
    this.taskService.patchBebidasGaseosas(this.getId, codigo, nombre, marca, nacionalidad, precio, restaurante, cantidad, descripcion)
    .subscribe((bebidas_gaseosas: BebidasGaseosas) => this.router.navigate(['/']))
  }
}
