import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models/Livro.model';
import { ResponseDTO } from '../models/ResponseDTO';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  private apiUrl = 'https://localhost:7074/Livro';
  constructor(private http: HttpClient) { }

  createBook(book : Livro): Observable<ResponseDTO> {
    return this.http.post<ResponseDTO>(this.apiUrl, book);
  }

  getBooks(): Observable<ResponseDTO> {
    return this.http.get<ResponseDTO>(this.apiUrl);
  }

  deleteBook(id: string): Observable<ResponseDTO> {
    return this.http.delete<ResponseDTO>(`${this.apiUrl}/${id}`);
  }

  // Método para atualizar livro
  updateBook(book: Livro): Observable<ResponseDTO> {
    return this.http.put<ResponseDTO>(this.apiUrl, book);
  }

  getBookById(id: string): Observable<ResponseDTO> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ResponseDTO>(url);
  }
}