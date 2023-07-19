import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordComponent } from './components/password/password.component';
import { BookComponent } from './components/book/book.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/shared/modal/modal.component';
import { BookdosComponent } from './components/bookdos/bookdos.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { LibrosComponent } from './components/libros/libros.component';
import { AdminComponent } from './components/admin/admin.component';
import { BooktresComponent } from './components/booktres/booktres.component';


@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent,
    BookComponent,
    NavbarComponent,
    ModalComponent,
    BookdosComponent,
    LibrosComponent,
    AdminComponent,
    BooktresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
