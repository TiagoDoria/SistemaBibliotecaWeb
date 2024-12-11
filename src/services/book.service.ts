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
}