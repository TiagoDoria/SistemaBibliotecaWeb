import { Component, OnInit } from '@angular/core';
import { Autor } from '../../../../models/Autor.model';
import { AuthorService } from '../../../../services/author.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ResponseDTO } from '../../../../models/ResponseDTO';



@Component({
  selector: 'app-view-author',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './view-author.component.html',
  styleUrl: './view-author.component.css'
})
export class ViewAuthorComponent implements OnInit {
  authors: Autor[] = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.loadAuthors();
  }

  // Método para carregar os autores da API
  loadAuthors() {
    this.authorService.getAuthors().subscribe(
      (response : ResponseDTO) => {
        this.authors = response.result;
        console.log( this.authors);
      },
      (error) => {
        console.error('Erro ao carregar autores:', error);
      }
    );
  }

  deleteAuthor(authorId: string) {
    this.authorService.deleteAuthor(authorId).subscribe(
      () => {
        // Handle successful deletion, e.g., remove the author from the list
        this.authors = this.authors.filter(a => a.id !== authorId);
      },
      (error) => {
        console.error('Error deleting author:', error);
      }
    );
  }

  updateAuthor(author: Autor) {
    this.authorService.updateAuthor(author).subscribe(
      (success) => {
        if (success) {
          // Handle successful update, e.g., update the author in the list
          // ...
        } else {
          console.error('Error updating author');
        }
      },
      (error) => {
        console.error('Error updating author:', error);
      }
    );
  }

}
