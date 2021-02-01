import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';

const routes: Routes = [
  {component: NewBookComponent, path: 'new-book'},
  {path: 'edit-book/:id', component: EditBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutesApp = [NewBookComponent, EditBookComponent]
