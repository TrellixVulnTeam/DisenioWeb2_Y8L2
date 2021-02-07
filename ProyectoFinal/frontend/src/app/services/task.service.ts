import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webService : WebService) { }

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
