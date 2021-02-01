import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';

const routes: Routes = [
  {path: 'seguridad', component: SeguridadComponent},
  {path: 'restaurantes', component: RestaurantesComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'proveedores', component: ProveedoresComponent},
  {path: 'administracion', component: AdministracionComponent},
  {path: 'reportes', component: ReportesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComps = [SeguridadComponent, RestaurantesComponent, ClientesComponent,ProveedoresComponent, AdministracionComponent, ReportesComponent];
