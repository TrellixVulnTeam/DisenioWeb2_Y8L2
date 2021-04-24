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
import { EditMarcasComponent } from './components/edit-marcas/edit-marcas.component';
import { EditProveedoresComponent } from './components/edit-proveedores/edit-proveedores.component';
import { InformationUpdatedComponent } from './components/information-updated/information-updated.component';
import { InformationDeletedComponent } from './components/information-deleted/information-deleted.component';
import { InformationInsertedComponent } from './components/information-inserted/information-inserted.component';
import { EditComestiblesComponent } from './components/edit-comestibles/edit-comestibles.component';

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
  {path: 'proveedores/proveedores/:codigo', component: EditProveedoresComponent},
  {path: 'success-update', component: InformationUpdatedComponent},
  {path: 'success-delete', component: InformationDeletedComponent},
  {path: 'success-insert', component: InformationInsertedComponent},
  {path: 'proveedores/comestibles/:codigo', component: EditComestiblesComponent},
  {path: 'proveedores/desechables-empaques/:codigo', component: EditComestiblesComponent},
  {path: 'proveedores/limpieza-higiene/:codigo', component: EditComestiblesComponent},
  {path: 'proveedores/tecnologia/:codigo', component: EditComestiblesComponent},
  {path: 'proveedores/equipos-utensilios/:codigo', component: EditComestiblesComponent}
  // {path : 'seguridad/:codigo', component: EditCajasComponent},
  // {path: 'entorno-restaurante', component: EntornoRestauranteComponent}
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
