import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';
import { LoginDTO } from '../models/Login.dto'; 

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  private apiUrl = 'https://localhost:7088/api/Auth';
  constructor(private http: HttpClient) { }

  createUsuario(usuario : User): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/register', usuario);
  }

  getLogin(login : LoginDTO): Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl + '/login', login);
  }
}