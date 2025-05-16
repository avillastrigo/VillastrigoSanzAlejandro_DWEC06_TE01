import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsuarioDetalleComponent } from './usuarios/usuario-detalle/usuario-detalle.component';
import { UsuariosListaComponent } from './usuarios/usuarios-lista/usuarios-lista.component';
import { UsuarioNuevoComponent } from './usuarios/usuario-nuevo/usuario-nuevo.component';
import { UsuarioEditarComponent } from './usuarios/usuario-editar/usuario-editar.component';


const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: UsuariosListaComponent },
  { path: 'usuarios/nuevo', component: UsuarioNuevoComponent },
  {path: 'usuarios/editar/:id',component: UsuarioEditarComponent},
  { path: 'usuarios/:id', component: UsuarioDetalleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
