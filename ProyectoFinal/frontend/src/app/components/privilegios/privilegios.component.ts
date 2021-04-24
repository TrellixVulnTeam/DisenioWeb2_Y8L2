import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Privilegios from 'src/app/models/privilegios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privilegios',
  templateUrl: './privilegios.component.html',
  styleUrls: ['./privilegios.component.css']
})
export class PrivilegiosComponent implements OnInit {

    dataSource;
    priv: Privilegios[] = [];
    displayedColumnPrivilegios: string[] = ['codigo', 'adminsis', 'adminseg', 'adminrest', 'admincuen', 'editar', 'eliminar'];
  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.taskService.getPrivilegios()
    .subscribe((privi: Privilegios[]) =>{ this.dataSource = privi });

  }

  addPrivilegios(codigo: string, adminsistema: string, adminseguridad: string, adminrest: string, admincuentas: string){
      this.taskService.postPrivilegios(codigo, adminsistema, adminseguridad, adminrest, admincuentas)
      .subscribe((privi: Privilegios) => this.router.navigate(['/seguridad']));
    }

    deletePrivi(codigo){
        if (window.confirm('¿Desea eliminar el privilegio?')) {
            this.taskService.deletePrivilegios(codigo)
            .subscribe((privi: Privilegios) =>{
              this.priv.filter(t => t._id != privi._id)
            });
          }
    }
}
