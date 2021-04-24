import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EntornoRestauranteComponent } from './components/entorno-restaurante/entorno-restaurante.component';
import { EspecialesComponent } from './components/especiales/especiales.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MesasComponent } from './components/mesas/mesas.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { PuestosComponent } from './components/puestos/puestos.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
import { AdminContentComponent } from './components/admin-content/admin-content.component';
import { EditPaisComponent } from './components/edit-pais/edit-pais.component';
import {EditConsecutivoComponent} from './components/edit-consecutivo/edit-consecutivo.component';
import {EditUsuarioComponent} from './components/edit-usuario/edit-usuario.component';
import {EditaPrivilegioComponent} from './components/edita-privilegio/edita-privilegio.component';
import { EditEmpleadosComponent } from './components/edit-empleados/edit-empleados.component';
import { EditMesasComponent } from './components/edit-mesas/edit-mesas.component';
import { EditPuestosComponent } from './components/edit-puestos/edit-puestos.component';
import { SuccessfulInsertComponent } from './components/successful-insert/successful-insert.component';
import { SuccessfulUpdateComponent } from './components/successful-update/successful-update.component';
import { SuccessfulDeleteComponent } from './components/successful-delete/successful-delete.component';
import { EditMarcasComponent } from './components/edit-marcas/edit-marcas.component';
import { EditComestiblesComponent } from './components/edit-comestibles/edit-comestibles.component';
import { EditDesechablesComponent } from './components/edit-desechables/edit-desechables.component';
import { EditLimpiezaComponent } from './components/edit-limpieza/edit-limpieza.component';
import { EditTecnologiaComponent } from './components/edit-tecnologia/edit-tecnologia.component';
import { EditEquiposComponent } from './components/edit-equipos/edit-equipos.component';
import { EditProveedoresComponent } from './components/edit-proveedores/edit-proveedores.component';
// import { EditProveedoresComponent } from './components/edit-proveedores/edit-proveedores.component';
// import { EditProveedoresComponent } from './components/edit-proveedores/edit-proveedores.component';
// import { EditProveedoresComponent } from './components/edit-proveedores/edit-proveedores.component';
// import { EditProveedoresComponent } from './components/edit-proveedores/edit-proveedores.component';
// import { EditProveedoresComponent } from './components/edit-proveedores/edit-proveedores.component';
// import { EditProveedoresComponent } from './components/edit-proveedores/edit-proveedores.component';
// import { EditProveedoresComponent } from './components/edit-proveedores/edit-proveedores.component';
// import { EditProveedoresComponent } from './components/edit-proveedores/edit-proveedores.component';
// import { EditProveedoresComponent } from './components/edit-proveedores/edit-proveedores.component';
// import { EditProveedoresComponent } from './components/edit-proveedores/edit-proveedores.component';
// import { EditProveedoresComponent } from './components/edit-proveedores/edit-proveedores.component';
// import { EditProveedoresComponent } from './components/edit-proveedores/edit-proveedores.component';
// import { EditProveedoresComponent } from './components/edit-proveedores/edit-proveedores.component';
// import { EditProveedoresComponent } from './components/edit-proveedores/edit-proveedores.component';

// import {EditCajasComponent} from './components/editCajas/editCajas.component'

const routes: Routes = [
  {path: 'seguridad', component: SeguridadComponent},
  {path: 'restaurantes', component: RestaurantesComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'proveedores', component: ProveedoresComponent},
  {path: 'administracion', component: AdministracionComponent},
  {path: 'reportes', component: ReportesComponent},
  {path: 'login', component: LogInComponent},
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'mesas', component: MesasComponent},
  {path: 'puestos', component: PuestosComponent},
  {path: 'especiales', component: EspecialesComponent},
  {path: 'adminCP', component: AdminContentComponent},
  {path : 'seguridad/:codigo', component: EditPaisComponent},
  {path : 'seguridad/:codigo', component: EditConsecutivoComponent},
  {path : 'seguridad/:codigo', component: EditUsuarioComponent},
  {path: 'seguridad/:codigo', component: EditaPrivilegioComponent},
  {path : 'empleados/:codigo', component: EditEmpleadosComponent},
  {path : 'mesas/:codigo', component: EditMesasComponent},
  {path : 'puestos/:codigo', component: EditPuestosComponent},
  {path: 'proveedores/marcas/:codigo', component: EditMarcasComponent},
  {path: 'proveedores/comestibles/:codigo', component: EditComestiblesComponent},
  {path: 'proveedores/desechables/:codigo', component: EditDesechablesComponent},
  {path: 'proveedores/limpieza/:codigo', component: EditLimpiezaComponent},
  {path: 'proveedores/tecnologia/:codigo', component: EditTecnologiaComponent},
  {path: 'proveedores/equipos/:codigo', component: EditEquiposComponent},
  {path: 'proveedores/proveedores/:codigo', component: EditProveedoresComponent},
  {path : 'successful-insert', component: SuccessfulInsertComponent},
  {path: 'successful-update', component: SuccessfulUpdateComponent},
  {path: 'successful-delete', component: SuccessfulDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComps =
[
  SeguridadComponent, RestaurantesComponent,
  ClientesComponent,ProveedoresComponent,
  AdministracionComponent, ReportesComponent,
  LogInComponent, EntornoRestauranteComponent,
  EspecialesComponent, EmpleadosComponent,
  MesasComponent, PuestosComponent
];
