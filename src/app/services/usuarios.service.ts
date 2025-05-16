import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  edad: number;
  activo: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiUrl = 'https://682220fbb342dce8004d398c.mockapi.io/api/v1/Users';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  getUsuarioPorId(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }
  updateUsuario(id: string, usuario: Usuario) {
    return this.http.put<Usuario>(`${this.apiUrl}/${id}`, usuario);
  }
  deleteUsuario(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

