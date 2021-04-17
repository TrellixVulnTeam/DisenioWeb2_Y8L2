import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webService : WebService) { }

  getUsuarios() {
    return this.webService.get('usuarios');
  }

  // postUsuarios() {
  //   this.webService.post('')
  // }

  getUsuariosAnidados() {
    console.log(this.webService.getTablasAnidadas('usuarios'));
    return this.webService.getTablasAnidadas('usuarios');
  }

  postUsuario(codigo: string, nombre: string, primer_apellido: string, segundo_apellido: string, telefono_1: string, telefono_2: string, login: string, contrasena: string, tipo_privilegio: string) {
    return this.webService.post('usuarios', {codigo, nombre, primer_apellido, segundo_apellido, telefono_1, telefono_2, login, contrasena, tipo_privilegio});
  }

  getConsecutivos() {
    return this.webService.get('consecutivos');
  }

  postConsecutivos(tipo_consecutivo : string, descripcion : string, valor_consecutivo : string, prefijo_consecutivo : string, prefijo : string) {
    return this.webService.post('consecutivos', {tipo_consecutivo, descripcion, valor_consecutivo, prefijo_consecutivo, prefijo})
  }

  getPaises() {
    return this.webService.get('paises');
  }

  postPais(codigo: string, nombre: string, bandera: string) {
    return this.webService.post('paises', {codigo, nombre, bandera})
  }

  getRolesYEventos() {
    return this.webService.get('roles-y-eventos');
  }

  postRolento(codigo: string, nombre: string, descripcion: string) {
    return this.webService.post('roles-y-eventos', {codigo, nombre, descripcion});
  }

  getDetalle() {
    return this.webService.get('detalleUDM');
  }

  getUnidadMedida() {
    return this.webService.get('unidad-de-medida');
  }

  postUnidadMedida(codigo: string, unidad: string, escala: string, detalle: string, simbolo: string, simbologia: string) {
    return this.webService.post('unidad-de-medida', {codigo, unidad, escala, detalle, simbolo, simbologia});
  }

  getBufet() {
    return this.webService.get('bufet');
  }

  postBufet(codigo: string, nombre: string, precio: string, tipo: string, unidad_medida: string) {
    return this.webService.post('bufet', {codigo, nombre, precio, tipo, unidad_medida});

  }

  getLicores() {
    return this.webService.get('licores');
  }

  postLicor(codigo: string, restaurante: string, nombre: string, cantidad: string, marca: string, descripcion: string, nacionalidad: string, precio_unitario: number, precio_botella: number) {
    return this.webService.post('licores', { codigo, restaurante, nombre, cantidad, marca, descripcion, nacionalidad, precio_unitario, precio_botella});
  }

  getBebidasCalientes() {
    return this.webService.get('bebidas_calientes');
  }

  postBebidasCalientes(codigo: string, nombre: string, ingredientes: string, precio: string, restaurante: string, descripcion: string) {
    return this.webService.post('bebidas_calientes', {codigo, nombre, ingredientes, precio, restaurante, descripcion});
  }

  getBebidasFrias() {
    return this.webService.get('bebidas_frias');
  }

  postBebidasFrias(codigo: string, nombre: string, ingredientes: string, precio: string, restaurante: string, descripcion: string) {
    return this.webService.post('bebidas_frias', {codigo, nombre, ingredientes, precio, restaurante, descripcion});
  }

  getBebidasGaseosas() {
    return this.webService.get('bebidas_gaseosas');
  }

  postBebidasGaseosas(codigo: String, nombre: String, marca: String, nacionalidad: String, precio: String, restaurante: String, cantidad: String, descripcion: String) {
    return this.webService.post('bebidas_gaseosas', {codigo, nombre, marca, nacionalidad, precio, restaurante, cantidad, descripcion});
  }

  getCajas() {
    return this.webService.get('cajas');
  }

  getEmpleados() {
    return this.webService.get('empleados');
  }

  postEmpleados(codigo: String, cedula: String, nombre: String, primer_apellido: String, segundo_apellido: String, telefono_1: String, telefono_2: String, puesto: String, nacionalidad: String) {
    return this.webService.post('empleados', {codigo, cedula, nombre, primer_apellido, segundo_apellido, telefono_1, telefono_2, puesto, nacionalidad});
  }

  getMesas() {
    return this.webService.get('mesas');
  }

  postMesas(codigo: String, nombre: String, numero: Number, cantidad_sillas: Number, nombre_restaurante: String) {
    return this.webService.post('mesas', {codigo, nombre, numero, cantidad_sillas, nombre_restaurante});
  }

  getPuestos() {
    return this.webService.get('puestos');
  }

  postPuestos(codigo: String, nombre: String, interno: String, externo: String, rol_restaurante: String) {
    return this.webService.post('puestos', {codigo, nombre, interno, externo, rol_restaurante})
  }

  getClientes() {
    return this.webService.get('datoscliente');
  }

  getEquipos() {
    return this.webService.get('equipos');
  }

  postEquipos(codigo: string, nombre: string) {
    return this.webService.post('equipos', {codigo, nombre})

  }

  updateEquipos(codigo: string, nombre: string) {
    return this.webService.patch(`equipos/${codigo}`, {codigo, nombre});
    // localhost:3000/equipos/:codig
  }



  // updateBook(bookId: string, title: string, author: string, summary: string, genre: string) {
  //   return this.webService.patch(`books/${bookId}`, { title, author, summary, genre });
  // }

  // deleteBook(bookId: string) {
  //   return this.webService.delete(`books/${bookId}`);
  // }


  // app.get('/equipos')
  // req.body

}
