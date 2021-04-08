import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Bufet from 'src/app/models/bufet';
import Usuarios from 'src/app/models/usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuario: Usuarios[] = [];
  bufet: Bufet[] = [];
  keys: Array<string>;
  items;
  selected;
  dataSource;

  optionsAdmin: string[] = ['Administrador del systema', 'Administrador de seguridad', 'Administrador del restaurante', 'Administrador de cuentas'];
  displayedColumnsUsuarios: string[] = ['codigo'];
  // displayedColumnsUsuarios: string[] = ['codigo', 'nombre', 'prim_apellido', 'seg_apellido', 'tel_fijo', 'tel_celular'];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  getKeys(obj: any): Array<string> {
    return Object.keys(obj);
  }

  ngAfterViewInit() {
    // this.taskService.getBufet()
    // .subscribe((bufet: Bufet[]) =>{ this.dataSource = bufet });


    this.taskService.getUsuarios()
    .subscribe((usuario: Usuarios[]) => {this.dataSource = usuario});

    // this.taskService.getUsuarios()
    // .subscribe((usuario: Usuario[]) => {this.items = usuario});
  }

}
