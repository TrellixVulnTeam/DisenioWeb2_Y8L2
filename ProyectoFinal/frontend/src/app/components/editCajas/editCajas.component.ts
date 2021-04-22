import { Component, Input, OnInit } from '@angular/core';
import Cajas from 'src/app/models/cajas';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editCajas',
  templateUrl: './editCajas.html',
  styleUrls: ['./editCajas.component.css']
})
export class EditCajasComponent implements OnInit {
  getId: any;

  cajas: Cajas[] = [];

  constructor(private taskService : TaskService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {

  }

  updateBook(cajaId:String, codigo:String, fecha:Date, descripcion:String, dineroEntrada:Number, cajaApertura: String, cajaCierre:String, restaurante: String) {
    this.taskService.updateBook(this.getId, codigo, fecha, descripcion,dineroEntrada,cajaApertura, cajaCierre, restaurante)
    .subscribe((cajas: Cajas) => this.router.navigate(['/']));
  }

}