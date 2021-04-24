import { Component, OnInit } from '@angular/core';
import Puestos from 'src/app/models/puestos';
import { TaskService } from '../../services/task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-puestos',
  templateUrl: './edit-puestos.component.html',
  styleUrls: ['./edit-puestos.component.css']
})
export class EditPuestosComponent implements OnInit {

  getId: any;

  constructor(private taskService: TaskService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('codigo');
  }

  ngOnInit(): void {
  }

  reportId() {
    console.log(this.getId);
  }

  editPuestos(puestoId: String, codigo: String, nombre: String, interno: String, externo: String, rol_restaurante: String) {
    this.taskService.patchPuestos(this.getId, codigo, nombre, interno, externo, rol_restaurante)
      .subscribe((puestos: Puestos) => this.router.navigate(['/']));
  }

}
