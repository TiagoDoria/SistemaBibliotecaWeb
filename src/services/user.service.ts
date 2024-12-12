import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../models/User.model';
import { LoginDTO } from '../models/Login.dto'; 
import { LoginResponse } from '../models/LoginResponse.dto';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  private apiUrl = 'https://localhost:7088/api/Auth';
  private token?: string; // Store the token here

  constructor(private http: HttpClient) { }

  createUsuario(usuario : User): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/register', usuario);
  }

  getLogin(loginData: LoginDTO): Observable<LoginResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<LoginResponse>(this.apiUrl + '/login', loginData, { headers })
      .pipe(
        tap(response => {
          this.token = response.token;
        })   
      );
  }

  setToken(token: string) {
    this.token = token;
  }

  // Add a method to retrieve the token (if available)
  getToken(): string | undefined {
    return this.token;
  }
}