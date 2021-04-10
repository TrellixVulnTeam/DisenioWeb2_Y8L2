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
  tipo_privilegio;
  all = false;

  optionsAdmin: string[] =
  [
    'Administrador del systema',
    'Administrador de seguridad',
    'Administrador del restaurante',
    'Administrador de cuentas'
  ];
  // displayedColumnsUsuarios: string[] = ['codigo'];
  displayedColumnsUsuarios: string[] = ['codigo', 'nombre', 'prim_apellido', 'seg_apellido', 'tel_fijo', 'tel_celular'];

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


    // this.taskService.getUsuarios().
    // subscribe((data : any) => {
    //   var lista = [];
    //   var lista2 = [];
    //   lista = data;
    //   for (let i = 0; i < lista.length; i++) {
    //     lista2.push(lista[0]);
    //   }
    //    this.dataSource = data;

    //    return this.dataSource;
    //   // console.log(lista2);
    // });

    this.taskService.getUsuarios()
    .subscribe((usuario: Usuarios[]) => {this.dataSource = usuario});
  }

  testoPesto() {
    alert('ss');
  }

  addUsuario(codigo: string, nombre: string, primer_apellido: string, segundo_apellido: string, telefono_1: string, telefono_2: string, login: string, contrasena: string, tipo_privilegio: string) {
    // this.taskService.post
    this.taskService.postUsuario(codigo, nombre, primer_apellido, segundo_apellido, telefono_1, telefono_2, login, contrasena, tipo_privilegio)
    .subscribe((usuario : Usuarios) => this.router.navigate(['/']));
  }

  test() {
    // console.log(this.optionsAdmin);
    // window.alert(this.optionsAdmin);

  }



}
