import { Component, OnInit, ViewChild } from '@angular/core';
import Licores from 'src/app/models/licores';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

interface Opciones {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {
  licores: Licores[] = [];
  nameliqour: string;
  codeliqour: string;
  nationalityliqour: string;
  namerestaurant: string;
  dataSource;
  testSelect;

  actualPaginator: MatPaginator;
  @ViewChild(MatPaginator)
  set paginator(value: MatPaginator) {
    this.actualPaginator = value;
  }

  ngAfterViewInit() {
  var dataSource;
    this.taskService.getLicores()
    .subscribe((licores: Licores[]) => {this.dataSource = licores, this.dataSource.paginator = this.paginator});
  }


  displayedColumns: string[] = ['codigo', 'nombre', 'cantidad', 'punitario', 'pbotella', 'nacionalidad'];


  opciones: Opciones[] = [
    {value: 'Entorno del restaurante', viewValue: 'Entorno del restaurante'},
    {value: 'Licores', viewValue: 'Licores'},
    {value: 'Vinos', viewValue: 'Vinos'}
  ];

  constructor(private taskService: TaskService, private router: Router) {

  }


  ngOnInit(): void {
    this.licores;
    this.ngAfterViewInit();
  }

  onPaginateChange($event) {
    console.log($event);
    }

  applyFilterName() {
    if (this.nameliqour != "") {

      this.dataSource = this.dataSource.filter(res =>{
        return res.nombre.toLocaleLowerCase().match(this.nameliqour.toLocaleLowerCase())
      });
    } else if (this.nameliqour == "") {
      this.ngOnInit();
    }
  }

  applyFilterNationality() {
    if (this.nationalityliqour != "") {

      this.dataSource = this.dataSource.filter(res =>{
        return res.nacionalidad.toLocaleLowerCase().match(this.nationalityliqour.toLocaleLowerCase())
      });
    } else if (this.nationalityliqour == "") {
      this.ngOnInit();
    }
  }

  applyFilterCode() {
    if (this.codeliqour != "") {

      this.dataSource = this.dataSource.filter(res =>{
        return res.codigo.toLocaleLowerCase().match(this.codeliqour.toLocaleLowerCase())
      });
    } else if (this.codeliqour == "") {
      this.ngOnInit();
    }
  }

  applyFilterRestautant() {
    if (this.namerestaurant != "") {

      this.dataSource = this.dataSource.filter(res =>{
        return res.restaurante.toLocaleLowerCase().match(this.namerestaurant.toLocaleLowerCase())
      });
    } else if (this.namerestaurant == "") {
      this.ngOnInit();
    }
  }

  addLiqour(codigo: string, restaurante: string, nombre: string, cantidad: string, marca: string, descripcion: string, nacionalidad: string, precio_unitario: number, precio_botella: number) {
    this.taskService.postLicor(codigo, restaurante, nombre, cantidad, marca, descripcion, nacionalidad, precio_unitario, precio_botella)
    .subscribe((licores: Licores) => this.router.navigate(['/']));
  }

}
