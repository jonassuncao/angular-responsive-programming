import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ObservableComponent } from '../observable/observable.component';
import { FormularioReativoComponent } from '../formulario-reativo/formulario-reativo.component';
import { UsuarioService } from '../formulario-reativo/usuario.service';
import { CommonModule } from '@angular/common';
import { FormStatusComponent } from '../form-status/form-status.component';
import { SubjectComponent } from '../subject/subject.component';
import { BibliotecasService } from '../observable/bibliotecas.service';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    SubjectComponent,
    ObservableComponent,
    FormStatusComponent,
    FormularioReativoComponent,
  ],
  providers: [UsuarioService, BibliotecasService],
  bootstrap: [AppComponent],
})
export class AppModule {}
