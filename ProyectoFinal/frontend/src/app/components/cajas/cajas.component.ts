import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Cajas from 'src/app/models/cajas';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';

interface OptionsAdmin {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cajas',
  templateUrl: './cajas.component.html',
  styleUrls: ['./cajas.component.css']
})
export class CajasComponent implements OnInit {
  caja : Cajas[] = [];
  selected;
  dataSource;



  optionsAdmin: OptionsAdmin[] =
  [
    {value: 'Administrador del systema', viewValue: 'Administrador del systema'},
    {value: 'Administrador de seguridad', viewValue: 'Administrador de seguridad'},
    {value: 'Administrador del restaurante', viewValue: 'Administrador del restaurante'},
    {value: 'Administrador de cuentas', viewValue: 'Administrador de cuentas'}
  ];

  @ViewChild('myCheckbox') myCheckbox;

  isChecked = false;
  // optionsAdmin: string[] = ['Administrador del systema', 'Administrador de seguridad', 'Administrador del restaurante', 'Administrador de cuentas'];
  //displayedColumnsConsecutivos: string[] = ['codigo', 'fecha_registro', 'descripcion', 'entrada_dinero', 'apertura_caja', 'cierre_caja', 'restaurante'];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.taskService.getCajas()
    .subscribe((caja: Cajas[]) =>{ this.dataSource = caja });
  }


  checkCheckBoxvalue(event){
    console.log(event.checked)
  }

  addCajas(codigo:String, fecha:Date, descripcion:String, dineroEntrada:Number, cajaApertura: String, cajaCierre:String, restaurante: String){
    this.taskService.postCajas(codigo, fecha, descripcion,dineroEntrada,cajaApertura, cajaCierre, restaurante )
    .subscribe((caja : Cajas) => this.router.navigate(['/']));
  }

}

