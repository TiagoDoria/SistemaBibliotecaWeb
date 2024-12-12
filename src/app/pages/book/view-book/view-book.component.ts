import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Livro } from '../../../../models/Livro.model';
import { BookService } from '../../../../services/book.service';
import { ResponseDTO } from '../../../../models/ResponseDTO';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-book',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './view-book.component.html',
  styleUrl: './view-book.component.css'
})
export class ViewBookComponent implements OnInit  {
  books: Livro[] = [];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  // Método para carregar os livros da API
  loadBooks() {
    this.bookService.getBooks().subscribe(
      (response : ResponseDTO) => {
        this.books = JSON.parse(JSON.stringify(response.result?.$values || []));


        console.log(this.books)
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

  

  updateLivro(livro: Livro): void {
    // Navega para o componente de edição, passando o id do autor na URL
    this.router.navigate([`/livro/atualizar/${livro.id}`]);
  }
}
