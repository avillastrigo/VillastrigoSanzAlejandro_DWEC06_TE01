import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService, Usuario } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  standalone: false
})
export class UsuarioDetalleComponent implements OnInit {
  usuario: Usuario | null = null;

  constructor(
    private route: ActivatedRoute,
    private usuariosService: UsuariosService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.usuariosService.getUsuarioPorId(id).subscribe(data => {
        this.usuario = data;
      });
    }
  }
}
