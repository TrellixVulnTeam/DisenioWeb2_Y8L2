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

  constructor(private taskService: TaskService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('codigo');
  }

  ngOnInit(): void {

  }

  editCajas(cajaId: string, codigo:string, fecha:Date, descripcion:String, dineroEntrada:Number, cajaApertura: String, cajaCierre:String, restaurante: String){
    this.taskService.patchCajas(this.getId,codigo, fecha, descripcion,dineroEntrada,cajaApertura, cajaCierre, restaurante )
    .subscribe((caja: Cajas) => this.router.navigate(['/']));
  }

}