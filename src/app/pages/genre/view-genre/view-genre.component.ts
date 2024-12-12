import { Component, OnInit } from '@angular/core';
import { Genero } from '../../../../models/Genero.model';
import { GenreService } from '../../../../services/genre.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-view-genre',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './view-genre.component.html',
  styleUrl: './view-genre.component.css'
})
export class ViewGenreComponent implements OnInit {
  genres: Genero[] = [];

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.loadGenres();
  }

  loadGenres() {
    this.genreService.getGenres().subscribe(
      (response) => {
        this.genres = response; // Atribui a lista de autores
      },
      (error) => {
        console.error('Erro ao carregar gêneros:', error);
      }
    );
  }

}
