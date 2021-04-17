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

  patchUsuario(codigo: string, nombre: string, primer_apellido: string, segundo_apellido: string, telefono_1: string, telefono_2: string, login: string, contrasena: string, tipo_privilegio: string){
    return this.webService.patch(`usuarios/${codigo}`, {codigo, nombre, primer_apellido, segundo_apellido, telefono_1, telefono_2, login, contrasena, tipo_privilegio})
  }

  deleteUsuario(codigo: String){
    return this.webService.delete(`usuarios/${codigo}`)
  }

  getConsecutivos() {
    return this.webService.get('consecutivos');
  }

  postConsecutivos(tipo_consecutivo : string, descripcion : string, valor_consecutivo : string, prefijo_consecutivo : string, prefijo : string) {
    return this.webService.post('consecutivos', {tipo_consecutivo, descripcion, valor_consecutivo, prefijo_consecutivo, prefijo})
  }

  patchConsecutivos(codigo: String,tipo_consecutivo : string, descripcion : string, valor_consecutivo : string, prefijo_consecutivo : string, prefijo : string){
    return this.webService.patch(`consecutivos/${codigo}`,{tipo_consecutivo, descripcion, valor_consecutivo, prefijo_consecutivo, prefijo} )
  }

  deleteConsecutivos(codigo:String){
    return this.webService.delete(`consecutivos/${codigo}`)
  }

  getPaises() {
    return this.webService.get('paises');
  }

  postPais(codigo: string, nombre: string, bandera: string) {
    return this.webService.post('paises', {codigo, nombre, bandera})
  }

  patchPais(codigo: string, nombre: string, bandera: string){
      return this.webService.patch(`paises/${codigo}`,{codigo, nombre, bandera} )
  }

  deletePais(codigo:String){
    return this.webService.delete(`paises/${codigo}`)
  }


  getRolesYEventos() {
    return this.webService.get('roles-y-eventos');
  }

  postRolento(codigo: string, nombre: string, descripcion: string) {
    return this.webService.post('roles-y-eventos', {codigo, nombre, descripcion});
  }

  patchRolento(codigo: string, nombre: string, descripcion: string){
    return this.webService.patch(`roles-y-eventos/${codigo}`, {codigo, nombre, descripcion})
  }

  deleteRolento(codigo:String){
    return this.webService.delete(`roles-y-eventos/${codigo}`)
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

  patchUnidadMedida(codigo: string, unidad: string, escala: string, detalle: string, simbolo: string, simbologia: string){
    return this.webService.patch(`unidad-de-medida/${codigo}`, {codigo, unidad, escala, detalle, simbolo, simbologia})
  }

  deleteUnidadMedida(codigo:String){
    return this.webService.delete(`unidad-de-medida/${codigo}`)
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

  getBitacoras(){
    return this.webService.get('bitacoras')
  }

  postBitacoras(codigo: String, fecharango: Date, usuario: String, fechaini: Date, fechafin: Date, descripcion: String){
    return this.webService.post('bitacoras',{codigo, fecharango, usuario, fechaini, fechafin, descripcion} )
  }

  getDatosCliente(){
    return this.webService.get('datoscliente')
  }

  postDatosCliente(codigo: String, nombre: String, num_mesa: Number, monto: Number, restaurante: String, hora_entrada: Date, hora_salida: Date, duracion: Date ){
    return this.webService.post('datoscliente', {codigo, nombre, num_mesa, monto, restaurante, hora_entrada, hora_salida, duracion})
  }

  getEspecialidades(){
    return this.webService.get('especialidades');
  }

  postEspecialidades(codigo:String, nombre: String, ingredientes:String, precio:Number, detalle: String){
    return this.webService.post('especialidades', {codigo, nombre, ingredientes, precio, detalle})
  }

  getFacturacion(){
    return this.webService.get('facturacion')
  }

  postFacturacion(codigo: String, fecha: Date, descripcion: String, dineroentrada: Number, cajaapertura: Number, cajacierre:Number, restaurante: String, estadocuenta: Number){
    return this.webService.post('facturacion', {codigo, fecha, descripcion, dineroentrada, cajaapertura, cajacierre, restaurante, estadocuenta})
  }

  getFechascliente(){
    return this.webService.get('fechascliente')
  }

  postFechascliente(codigo: String, reservacion: String, fechallegada:Date, fechaReservacion: Date){
    return this.webService.post('fechascliente', {codigo, reservacion, fechallegada, fechaReservacion})
  }

  getPrivilegios(){
    return this.webService.get('privilegios')
  }

  postPrivilegios(codigo:String, adminsistema: String, adminseguridad:String, adminrest:String, admincuentas: String){
    return this.webService.post('privilegios', {codigo, adminsistema, adminseguridad, adminrest, admincuentas})
  }

  getinfoPedido(){
    return this.webService.get('infopedido')
  }

  postinfoPedido(codigo:String, numMesa: String, pedidoSilla1: String, pedidoSilla2: String, pedidoSilla3: String, pedidoSilla4: String, precioSilla1: Number,precioSilla2: Number,precioSilla3: Number,precioSilla4: Number){
    return this.webService.post('infopedido', {codigo, numMesa, pedidoSilla1, pedidoSilla2, pedidoSilla3, pedidoSilla4, precioSilla1, precioSilla2,precioSilla3,precioSilla4})
  }

  getinfoContacto(){
    return this.webService.get('info-contacto')
  }

  postinfoContacto(codigo:String, nombre:String, detalleempresa: String, telefono: Number, foto: String){
    return this.webService.post('info-contacto', {codigo, nombre, detalleempresa, telefono, foto})
  }

  //Marcas
  getMarcas() {
    return this.webService.get('marcas');
  }
  postMarcas(nombre : string, descripcion : string, nacionalidad : string, nombre_empresa : string, telefono_empresa : number, cedula_juridicaEmpresa : string, detalle_empresa : string) {
    return this.webService.post('marcas', {nombre, descripcion, nacionalidad, nombre_empresa, telefono_empresa, cedula_juridicaEmpresa, detalle_empresa})
  }
  patchMarcas(codigo: string, nombre : string, descripcion : string, nacionalidad : string, nombre_empresa : string, telefono_empresa : number, cedula_juridicaEmpresa : string, detalle_empresa : string){
    return this.webService.patch(`marcas/${codigo}`,{codigo, nombre, descripcion, nacionalidad, nombre_empresa, telefono_empresa, cedula_juridicaEmpresa, detalle_empresa} )
  }
  deleteMarcas(codigo:String){
    return this.webService.delete(`marcas/${codigo}`)
  }

  //Limpieza
  getLimpieza() {
    return this.webService.get('limpieza');
  }
  postLimpieza(nombre : string, cantidad : number, nombre_restaurante : string, marca : string, descripcion : number) {
    return this.webService.post('limpieza', {nombre, cantidad, nombre_restaurante, marca, descripcion})
  }
  patchLimpieza(codigo: string, nombre : string, cantidad : number, nombre_restaurante : string, marca : string, descripcion : number){
    return this.webService.patch(`limpieza/${codigo}`,{codigo, nombre, cantidad, nombre_restaurante, marca, descripcion} )
  }
  deleteLimpieza(codigo:String){
    return this.webService.delete(`limpieza/${codigo}`)
  }

  //Proveedores
  getProveedores() {
    return this.webService.get('proveedores');
  }
  postProveedores(nombre : string, primer_apellido : string, segundo_apellido : string, telefono_oficina : number, fax : string, celular : number, cedula : string, fecha_ingreso : string, nombre_proveedor : string, correo : string, direccion : string, nombre_contactoEmpresa : number, telefono_contactoEmpresa : number, direccion_empresa : string) {
    return this.webService.post('proveedores', {nombre, primer_apellido, segundo_apellido, telefono_oficina, fax, celular, cedula, fecha_ingreso, nombre_proveedor, correo, direccion, nombre_contactoEmpresa, telefono_contactoEmpresa, direccion_empresa})
  }
  patchProveedores(codigo: string, nombre : string, primer_apellido : string, segundo_apellido : string, telefono_oficina : number, fax : string, celular : number, cedula : string, fecha_ingreso : string, nombre_proveedor : string, correo : string, direccion : string, nombre_contactoEmpresa : number, telefono_contactoEmpresa : number, direccion_empresa : string){
    return this.webService.patch(`proveedores/${codigo}`,{codigo, nombre, primer_apellido, segundo_apellido, telefono_oficina, fax, celular, cedula, fecha_ingreso, nombre_proveedor, correo, direccion, nombre_contactoEmpresa, telefono_contactoEmpresa, direccion_empresa} )
  }
  deleteProveedores(codigo:String){
    return this.webService.delete(`proveedores/${codigo}`)
  }

  //Restaurantes
  getRestaurantes() {
    return this.webService.get('restaurantes');
  }
  postRestaurantes(nombre : string, direccion : string, cantidadClientes : number, telefono : number) {
    return this.webService.post('restaurantes', {nombre, direccion, cantidadClientes, telefono})
  }
  patchRestaurantes(codigo: string, nombre : string, direccion : string, cantidadClientes : number, telefono : number){
    return this.webService.patch(`restaurantes/${codigo}`,{codigo, nombre, direccion, cantidadClientes, telefono} )
  }
  deleteRestaurantes(codigo:String){
    return this.webService.delete(`restaurantes/${codigo}`)
  }

  //Tecnologia
  getTecnologia() {
    return this.webService.get('tecnologia');
  }
  postTecnologia(nombre : string, cantidad : number, nombre_restaurante : string, precio: number, marca : string, descripcion : number) {
    return this.webService.post('tecnologia', {nombre, cantidad, nombre_restaurante, precio, marca, descripcion})
  }
  patchTecnologia(codigo: string, nombre : string, cantidad : number, nombre_restaurante : string, precio: number, marca : string, descripcion : number){
    return this.webService.patch(`tecnologia/${codigo}`,{codigo, nombre, cantidad, nombre_restaurante, precio, marca, descripcion} )
  }
  deleteTecnologia(codigo:String){
    return this.webService.delete(`tecnologia/${codigo}`)
  }

  //Desechables
  getDesechables() {
    return this.webService.get('desechables');
  }
  postDesechables(nombre : string, cantidad : number, nombre_restaurante : string, marca : string, descripcion : number) {
    return this.webService.post('desechables', {nombre, cantidad, nombre_restaurante, marca, descripcion})
  }
  patchDesechables(codigo: string, nombre : string, cantidad : number, nombre_restaurante : string, marca : string, descripcion : number){
    return this.webService.patch(`desechables/${codigo}`,{codigo, nombre, cantidad, nombre_restaurante, marca, descripcion} )
  }
  deleteDesechables(codigo:String){
    return this.webService.delete(`desechables/${codigo}`)
  }
  
  //Equipos
  getEquipos() {
    return this.webService.get('equipos');
  }
  postEquipos(nombre : string, cantidad : number, nombre_restaurante : string, marca : string, descripcion : number) {
    return this.webService.post('equipos', {nombre, cantidad, nombre_restaurante, marca, descripcion})
  }
  patchEquipos(codigo: string, nombre : string, cantidad : number, nombre_restaurante : string, marca : string, descripcion : number){
    return this.webService.patch(`equipos/${codigo}`,{codigo, nombre, cantidad, nombre_restaurante, marca, descripcion} )
  }
  deleteEquipos(codigo:String){
    return this.webService.delete(`equipos/${codigo}`)
  }

  //Vinos
  getVinos() {
    return this.webService.get('vinos');
  }
  postVinos(nombre : string, cantidad : number, marca : string, descripcion : string, nacionalidad : string, precio_unitario : number, anio_cosecha : number, precio_botella : number) {
    return this.webService.post('vinos', {nombre, cantidad, marca, descripcion, nacionalidad, precio_unitario, anio_cosecha, precio_botella})
  }
  patchVinos(codigo: string,nombre : string, cantidad : number, marca : string, descripcion : string, nacionalidad : string, precio_unitario : number, anio_cosecha : number, precio_botella : number){
    return this.webService.patch(`vinos/${codigo}`,{codigo, nombre, cantidad, marca, descripcion, nacionalidad, precio_unitario, anio_cosecha, precio_botella} )
  }
  deleteVinos(codigo:String){
    return this.webService.delete(`vinos/${codigo}`)
  }
}
