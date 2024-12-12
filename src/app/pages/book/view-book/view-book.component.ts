import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Livro } from '../../../../models/Livro.model';
import { BookService } from '../../../../services/book.service';


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
      (response) => {
        this.books = response; // Atribui a lista de autores
      },
      (error) => {
        console.error('Erro ao carregar livros:', error);
      }
    );
  }
}
