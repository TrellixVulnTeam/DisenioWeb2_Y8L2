import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewTareaComponent } from './components/new-tarea/new-tarea.component';
import { EditTareaComponent } from './components/edit-tarea/edit-tarea.component';

const routes: Routes = [
  {path: 'new-tarea', component: NewTareaComponent},
  {path: 'edit-tarea/:id', component: EditTareaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutesApp = [NewTareaComponent, EditTareaComponent]
