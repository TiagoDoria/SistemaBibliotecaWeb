import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/Book.model';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  private apiUrl = 'https://localhost:7088/api/livro';
  constructor(private http: HttpClient) { }

  createBook(book : Book): Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl + '/CriarLivroAsync', book);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/BuscarTodosLivrosAsync`);
  }

  deleteBook(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/DeletarLivroAsync/${id}`);
  }

  // Método para atualizar livro
  updateBook(book: any): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiUrl}/AtualizarLivroAsync`, book);
  }
}