import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genero } from '../models/Genero.model';
import { ResponseDTO } from '../models/ResponseDTO';

@Injectable({
  providedIn: 'root'
})

export class GenreService {
  private apiUrl = 'https://localhost:7074/genero';
  constructor(private http: HttpClient) { }

  createGenre(genre : Genero): Observable<ResponseDTO> {
    return this.http.post<ResponseDTO>(this.apiUrl,genre);
  }

  getGenres(): Observable<ResponseDTO> {
    return this.http.get<ResponseDTO>(this.apiUrl);
  }

  deleteGenre(id: string): Observable<ResponseDTO> {
    return this.http.delete<ResponseDTO>(`${this.apiUrl}/${id}`);
  }

  updateGenre(genre: any): Observable<ResponseDTO> {
    return this.http.put<ResponseDTO>(this.apiUrl, genre);
  }

  getGenreById(id: string): Observable<ResponseDTO> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ResponseDTO>(url);
  }
}