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

  postUsuario(datos_personales: [], datos_tecnicos: [], privilegios:  []) {
    return this.webService.post('usuarios', {datos_personales, datos_tecnicos, privilegios});
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


}
