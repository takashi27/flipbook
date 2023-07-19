import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { BookdosComponent } from './components/bookdos/bookdos.component';
import { LibrosComponent } from './components/libros/libros.component';
import { BooktresComponent } from './components/booktres/booktres.component';

const routes: Routes = [
  {path: 'Home', component: LibrosComponent},
  {path: 'transformaccion', component: BookComponent},
  {path: 'transformaccion2', component: BookdosComponent},
  {path: 'transformaccion3', component: BooktresComponent},
  {path:'', redirectTo: 'Home', pathMatch: 'full'},
  {path:'**', redirectTo: 'Home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
