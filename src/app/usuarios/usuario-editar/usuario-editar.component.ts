import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService, Usuario } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css'],
  standalone: false
})
export class UsuarioEditarComponent implements OnInit {
  usuario: Usuario = {
    id: '',
    nombre: '',
    email: '',
    edad: 0,
    activo: false
  };

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuariosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.usuarioService.getUsuarioPorId(id).subscribe(
        (data) => (this.usuario = data),
        (error) => console.error('Error al obtener usuario:', error)
      );
    }
  }

  actualizarUsuario(): void {
    this.usuarioService.updateUsuario(this.usuario.id, this.usuario).subscribe(
      (response) => {
        console.log('Usuario actualizado:', response);
        this.router.navigate(['/usuarios']);
      },
      (error) => {
        console.error('Error al actualizar el usuario:', error);
      }
    );
  }
}

