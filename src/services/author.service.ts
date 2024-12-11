import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../models/Author.model';

@Injectable({
  providedIn: 'root'
})

export class AuthorService {
  private apiUrl = 'https://localhost:7088/api/autor';
  constructor(private http: HttpClient) { }

  createAuthor(author : Author): Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl + '/CriarAutorAsync', author);
  }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.apiUrl}/BuscarTodosAutoresAsync`);
  }
}