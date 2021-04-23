import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewChild } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Cajas from '/src/app/models/cajas' 

@Component({
  selector: 'app-edit-cajas',
  templateUrl: './edit-cajas.component.html',
  styleUrls: ['./edit-cajas.component.css']
})
export class EditCajasComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router, ) { 
  this.getId = this.activatedRoute.snapshot.paramMap.get('codigo');
  }
  ngOnInit(): void {
  }



editCajas(cajaId: String, codigo:String, fecha:Date, descripcion:String, dineroEntrada:Number, cajaApertura: String, cajaCierre:String, restaurante: String){
    this.taskService.patchCajas(codigo, fecha, descripcion,dineroEntrada,cajaApertura, cajaCierre, restaurante )
    .subscribe((caja : Cajas) => this.router.navigate(['/']));
  }
}