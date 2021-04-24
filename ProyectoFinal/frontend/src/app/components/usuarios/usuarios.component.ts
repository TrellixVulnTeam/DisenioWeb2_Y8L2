import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Bufet from 'src/app/models/bufet';
import Usuarios from 'src/app/models/usuarios';
import { Router } from '@angular/router';

interface OptionsAdmin {
  value: string;
  viewValue: string;
}

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

  optionsAdmin: OptionsAdmin[] =
  [
    {value: 'Administrador del systema', viewValue: 'Administrador del systema'},
    {value: 'Administrador de seguridad', viewValue: 'Administrador de seguridad'},
    {value: 'Administrador del restaurante', viewValue: 'Administrador del restaurante'},
    {value: 'Administrador de cuentas', viewValue: 'Administrador de cuentas'}
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
