import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Bufet from 'src/app/models/bufet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  // especialesSelect;
  bufet : Bufet[] = [];
  dataSource;
  // userInputName: string;
  // userInputCodigo: string;

  // displayedColumns: string[] = ['codigo', 'nombre', 'precio', 'tipo', 'unidad_medida'];

  displayedColumnsMarca: string[] = ['codigo', 'nombre', 'descripcion', 'nacionalidad', 'empresa', 'telefono'];

  // displayedColumnsBebidasGaseosas: string[] = ['codigo', 'nombre', 'precio'];

  // displayedColumnsLicores: string[] = ['codigo', 'nombre', 'cantidad', 'precio', 'nacionalidad'];

  // displayedColumnsVinos: string[] = ['codigo', 'nombre', 'precio', 'nacionalidad', 'anio'];

  // displayedColumnsEspeciales: string[] = ['codigo', 'nombre', 'ingredientes', 'precio', 'detalles'];

  // especiales: Especiales[] = [
  //   {value: 'bufet', viewValue: 'Bufet'},
  //   {value: 'bebidas', viewValue: 'Bebidas'},
  //   {value: 'especiales', viewValue: 'Especiales'}
  // ];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.taskService.getBufet()
    .subscribe((bufet: Bufet[]) =>{ this.dataSource = bufet });
  }

  // addBufet(codigo: string, nombre: string, precio: string, tipo: string, unidad_medida: string) {
  //   this.taskService.postBufet(codigo, nombre, precio, tipo, unidad_medida)
  //   .subscribe((bufets : Bufet) => this.router.navigate(['/restaurantes']));

  // }

  postMarcas(
    codigo: string, nombre: string, descripcion: string,
    nacionalidad: string,
    nombre_empresa: string, telefono_empresa: number,
    cedula_juridicaEmpresa: string, detalle_empresa: string) {
      this.taskService.postMarcas(
        codigo, nombre, descripcion,
        nacionalidad, nombre_empresa, telefono_empresa,
        cedula_juridicaEmpresa, detalle_empresa)
      .subscribe((marcas : Marcas) => this.router.navigate(['/']));
  }

  addProvedores(codigo: String, nombre: String, primer_apellido: String, segundo_apellido: String, telefono_oficina: Number, fax: String, celular: Number, cedula: String, fecha_ingreso: Number, nombre_proveedor: String, correo: String, direccion: String, nombre_contactoEmpresa: String, telefono_contactoEmpresa: Number, direccion_empresa: String) {
    this.taskService.postProveedores(codigo, nombre, primer_apellido, segundo_apellido, telefono_oficina, fax, celular, cedula, fecha_ingreso, nombre_proveedor, correo, direccion, nombre_contactoEmpresa, telefono_contactoEmpresa, direccion_empresa)
    .subscribe((proveedores: Proveedores) => this.router.navigate[('/')]);

  //     this.dataSource = this.dataSource.filter(res =>{
  //       return res.codigo.toLocaleLowerCase().match(this.userInputCodigo.toLocaleLowerCase())
  //     });

  //   } else if (this.userInputCodigo == "") {
  //     this.ngOnInit();
  //   }
  // }


  // busquedaNombre() {
  //   if (this.userInputName !="") {
  //     this.dataSource = this.dataSource.filter(res =>{
  //       return res.nombre.toLocaleLowerCase().match(this.userInputName.toLocaleLowerCase());
  //     });
  //   } else if (this.userInputName == "" || this.userInputCodigo == "") {
  //     this.ngOnInit();
  //   }
  // }
}
