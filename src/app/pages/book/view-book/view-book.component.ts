import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Livro } from '../../../../models/Livro.model';
import { BookService } from '../../../../services/book.service';
import { ResponseDTO } from '../../../../models/ResponseDTO';


@Component({
  selector: 'app-view-book',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './view-book.component.html',
  styleUrl: './view-book.component.css'
})
export class ViewBookComponent implements OnInit  {
  books: Livro[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  // Método para carregar os livros da API
  loadBooks() {
    this.bookService.getBooks().subscribe(
      (response : ResponseDTO) => {
        this.books = response.result; // Atribui a lista de autores
      },
      (error) => {
        console.error('Erro ao carregar livros:', error);
      }
    );
  }

  deleteLivro(livroId: string) {
    this.bookService.deleteBook(livroId).subscribe(
      () => {
        // Handle successful deletion, e.g., remove the author from the list
        this.books = this.books.filter(a => a.id !== livroId);
      },
      (error) => {
        console.error('Error deleting author:', error);
      }
    );
  }

  updateLivro(livro: Livro) {
    this.bookService.updateBook(livro).subscribe(
      (success) => {
        if (success) {
          // Handle successful update, e.g., update the author in the list
          // ...
        } else {
          console.error('Error updating livro');
        }
      },
      (error) => {
        console.error('Error updating author:', error);
      }
    );
  }
}
