import { Component, OnInit } from '@angular/core';
import { UsuariosService, Usuario } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  standalone: false
})
export class UsuariosListaComponent implements OnInit {
  usuarios: Usuario[] = [];

  totalActivos: number = 0;
  mediaEdad: number = 0;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe(data => {
      this.usuarios = data;
      this.calcularEstadisticas(); // 👈 calcula al iniciar
    });
  }

  eliminarUsuario(id: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.usuariosService.deleteUsuario(id).subscribe(
        () => {
          this.usuarios = this.usuarios.filter(u => u.id !== id);
          this.calcularEstadisticas(); // 👈 actualiza después de eliminar
          console.log('Usuario eliminado');
        },
        (error) => {
          console.error('Error al eliminar el usuario:', error);
        }
      );
    }
  }

  calcularEstadisticas(): void {
    const usuariosActivos = this.usuarios.filter(u => u.activo);
    this.totalActivos = usuariosActivos.length;

    const sumaEdades = this.usuarios.reduce((total, u) => total + u.edad, 0);
    this.mediaEdad = this.usuarios.length > 0 ? Math.round(sumaEdades / this.usuarios.length) : 0;
  }
}