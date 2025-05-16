import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService, Usuario } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrls: ['./usuario-nuevo.component.css'],
  standalone: false
})
export class UsuarioNuevoComponent {
  usuario: Usuario = {
    id: '',
    nombre: '',
    email: '',
    edad:0,
    activo:false
  };

  constructor(private usuarioService: UsuariosService, private router: Router) {}

  crearUsuario() {
    this.usuarioService.createUsuario(this.usuario).subscribe(
      (response) => {
        console.log('Usuario creado:', response);
        this.router.navigate(['/usuarios']);
      },
      (error) => {
        console.error('Error al crear el usuario:', error);
      }
    );
  }
}
