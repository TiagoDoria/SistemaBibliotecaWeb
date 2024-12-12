import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../models/User.model';
import { LoginDTO } from '../models/Login.dto'; 
import { LoginResponse, ResponseDTO } from '../models/LoginResponse.dto';

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

  getLogin(loginData: LoginDTO): Observable<ResponseDTO<LoginResponse>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    return this.http.post<ResponseDTO<LoginResponse>>(this.apiUrl + '/login', loginData, { headers })
      .pipe(
        tap((response: ResponseDTO<LoginResponse>) => {
          if (response && response.isSuccess && response.result?.token) {
            console.log('Token recebido:', response.result.token);
            this.setToken(response.result.token); // Armazena o token
          } else {
            console.error('Falha ao obter o token:', response);
          }
        })
      );
  }

  setToken(tok: string) {
    localStorage.setItem('authToken', tok); // Salva no localStorage
  }
  

  // Add a method to retrieve the token (if available)
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Método para verificar se o usuário está logado
  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken'); // Retorna true se o token existir
  }

  // Método para realizar logout
  logout(): void {
    localStorage.removeItem('authToken'); // Remove o token
  }
}