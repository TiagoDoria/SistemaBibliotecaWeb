import { Component, OnInit } from '@angular/core';
import { Genero } from '../../../../models/Genero.model';
import { GenreService } from '../../../../services/genre.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ResponseDTO } from '../../../../models/ResponseDTO';



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
      (response : ResponseDTO) => {
        this.genres =  response.result?.$values; // Atribui a lista de autores
        console.log(this.genres)
      },
      (error) => {
        console.error('Erro ao carregar gêneros:', error);
      }
    );
  }

  deleteGenero(generoId: string) {
    this.genreService.deleteGenre(generoId).subscribe(
      () => {
        // Handle successful deletion, e.g., remove the author from the list
        this.genres = this.genres.filter(a => a.id !== generoId);
      },
      (error) => {
        console.error('Error deleting genero:', error);
      }
    );
  }

  updateGenero(genero: Genero) {
    this.genreService.updateGenre(genero).subscribe(
      (success) => {
        if (success) {
          // Handle successful update, e.g., update the author in the list
          // ...
        } else {
          console.error('Error updating genero');
        }
      },
      (error) => {
        console.error('Error updating author:', error);
      }
    );
  }

}
