import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from '../models/Autor.model';
import { ResponseDTO } from '../models/ResponseDTO';

@Injectable({
  providedIn: 'root'
})

export class AuthorService {
  private apiUrl = 'https://localhost:7074/Autor';
  constructor(private http: HttpClient) { }

  createAuthor(author : Autor): Observable<ResponseDTO> {
    return this.http.post<ResponseDTO>(this.apiUrl , author);
  }

  getAuthors(): Observable<ResponseDTO> {
    return this.http.get<ResponseDTO>(this.apiUrl);
  }

  deleteAuthor(id: string): Observable<ResponseDTO> {
    return this.http.delete<ResponseDTO>(`${this.apiUrl}/${id}`);
  }

  // Método para atualizar autor
  updateAuthor(author: Autor): Observable<ResponseDTO> {
    return this.http.put<ResponseDTO>(this.apiUrl, author);
  }
}