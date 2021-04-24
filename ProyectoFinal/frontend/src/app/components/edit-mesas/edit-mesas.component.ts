import { Component, OnInit } from '@angular/core';
import Mesas from 'src/app/models/mesas';
import { TaskService } from '../../services/task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-mesas',
  templateUrl: './edit-mesas.component.html',
  styleUrls: ['./edit-mesas.component.css']
})
export class EditMesasComponent implements OnInit {

  getId: any;

  constructor(private taskService : TaskService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('codigo');
  }

  ngOnInit(): void {
  }

  reportId() {
    console.log(this.getId);
}

  editMesas(idMesas: string, codigo: String, nombre: String, numero: Number, cantidad_sillas: Number, nombre_restaurante: String) {
    this.taskService.patchMesas(this.getId, codigo, nombre, numero, cantidad_sillas, nombre_restaurante)
    .subscribe((mesas : Mesas)  => this.router.navigate(['/']));
  }

}
