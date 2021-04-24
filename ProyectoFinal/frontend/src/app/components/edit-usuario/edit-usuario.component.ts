import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Usuarios from 'src/app/models/usuarios';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {
    getId: any;
  constructor(private taskService: TaskService, private router: Router, private activatedRoute : ActivatedRoute) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('codigo');
   }

  ngOnInit(): void {

  }

  editUsuario(usrId: string, codigo: string, nombre: string, primer_apellido: string, segundo_apellido: string, telefono: string, email: string, login: string, contrasena: string, tipo_privilegio: string) {
    this.taskService.patchUsuario(this.getId,codigo, nombre, primer_apellido, segundo_apellido, telefono, email, login, contrasena, tipo_privilegio)
    .subscribe((usuario: Usuarios) => this.router.navigate(['/']));
  }

}
