import { Component, OnInit } from '@angular/core';
import { Autor } from '../../../../models/Autor.model';
import { AuthorService } from '../../../../services/author.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ResponseDTO } from '../../../../models/ResponseDTO';
import { Router } from '@angular/router';



@Component({
  selector: 'app-view-author',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './view-author.component.html',
  styleUrl: './view-author.component.css'
})
export class ViewAuthorComponent implements OnInit {
  authors: Autor[] = [];

  constructor(private authorService: AuthorService,  private router: Router) { }

  ngOnInit(): void {
    this.loadAuthors();
  }

  // Método para carregar os autores da API
  loadAuthors() {
    this.authorService.getAuthors().subscribe(
      (response : ResponseDTO) => {
        this.authors =  response.result?.$values;
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

  updateAuthor(autor: Autor): void {
    // Navega para o componente de edição, passando o id do autor na URL
    this.router.navigate([`/autor/atualizar/${autor.id}`]);

  }

}
