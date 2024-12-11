import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../models/Genre.model';

@Injectable({
  providedIn: 'root'
})

export class GenreService {
  private apiUrl = 'https://localhost:7088/api/genero';
  constructor(private http: HttpClient) { }

  createGenre(genre : Genre): Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl + '/CriarGeneroAsync', genre);
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${this.apiUrl}/BuscarTodosGenerosAsync`);
  }
}