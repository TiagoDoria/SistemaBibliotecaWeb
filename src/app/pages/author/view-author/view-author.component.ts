import { Component, OnInit } from '@angular/core';
import { Author } from '../../../../models/Author.model';
import { AuthorService } from '../../../../services/author.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-view-author',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './view-author.component.html',
  styleUrl: './view-author.component.css'
})
export class ViewAuthorComponent implements OnInit {
  authors: Author[] = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.loadAuthors();
  }

  // Método para carregar os autores da API
  loadAuthors() {
    this.authorService.getAuthors().subscribe(
      (response) => {
        this.authors = response; // Atribui a lista de autores
      },
      (error) => {
        console.error('Erro ao carregar autores:', error);
      }
    );
  }

}
