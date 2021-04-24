import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {RoutingComps} from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ComestiblesComponent } from './components/comestibles/comestibles.component';
import { DesechablesEmpaquesComponent } from './components/desechables-empaques/desechables-empaques.component';
import { LimpiezaHigieneComponent } from './components/limpieza-higiene/limpieza-higiene.component';
import { TecnologiaComponent } from './components/tecnologia/tecnologia.component';
import { EquiposUtensiliosComponent } from './components/equipos-utensilios/equipos-utensilios.component';
import { BitacorasComponent } from './components/bitacoras/bitacoras.component';
import { ClienteReportesComponent } from './components/cliente-reportes/cliente-reportes.component';
import { FacturacionComponent } from './components/facturacion/facturacion.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ConsecutivosComponent } from './components/consecutivos/consecutivos.component';
import { PaisesComponent } from './components/paises/paises.component';
// import { CajasComponent } from './components/cajas/cajas.component';
import { RolesYEventosComponent } from './components/roles-y-eventos/roles-y-eventos.component';
import { UnidadesDeMedidaComponent } from './components/unidades-de-medida/unidades-de-medida.component';
import { AdminContentComponent } from './components/admin-content/admin-content.component';
// import { WavesModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md'
import {HttpClientModule} from '@angular/common/http';
import { EditPaisComponent } from './components/edit-pais/edit-pais.component';
import { EditConsecutivoComponent } from './components/edit-consecutivo/edit-consecutivo.component';
import { EditRolesYEventosComponent } from './components/edit-roles-y-eventos/edit-roles-y-eventos.component';
import { EditUsuarioComponent } from './components/edit-usuario/edit-usuario.component';
import { PrivilegiosComponent } from './components/privilegios/privilegios.component';
import { EditaPrivilegioComponent } from './components/edita-privilegio/edita-privilegio.component';
import { CajaComponent } from './components/caja/caja.component';
import { CajasComponent } from './components/cajas/cajas.component';
import { EditCajasComponent } from './edit-cajas/edit-cajas.component';
import { EditEmpleadosComponent } from './components/edit-empleados/edit-empleados.component';
import { EditMesasComponent } from './components/edit-mesas/edit-mesas.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    RoutingComps,
    MarcasComponent,
    ComestiblesComponent,
    DesechablesEmpaquesComponent,
    LimpiezaHigieneComponent,
    TecnologiaComponent,
    EquiposUtensiliosComponent,
    BitacorasComponent,
    ClienteReportesComponent,
    FacturacionComponent,
    UsuariosComponent,
    ConsecutivosComponent,
    PaisesComponent,
    // CajasComponent,
    RolesYEventosComponent,
    UnidadesDeMedidaComponent,
    AdminContentComponent,
    EditPaisComponent,
    EditConsecutivoComponent,
    EditRolesYEventosComponent,
    EditUsuarioComponent,
    PrivilegiosComponent,
    EditaPrivilegioComponent,
    CajaComponent,
    CajasComponent,
    EditCajasComponent
    EditEmpleadosComponent,
    EditMesasComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatIconModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
