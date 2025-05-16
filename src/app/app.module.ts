import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  // Agrega esta importación
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsuarioDetalleComponent } from './usuarios/usuario-detalle/usuario-detalle.component';
import { UsuariosListaComponent } from './usuarios/usuarios-lista/usuarios-lista.component';
import { AppRoutingModule } from './app-routing.module';
import { UsuarioNuevoComponent } from './usuarios/usuario-nuevo/usuario-nuevo.component';
import { FormsModule } from '@angular/forms';
import { UsuarioEditarComponent } from './usuarios/usuario-editar/usuario-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioDetalleComponent,
    UsuariosListaComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
