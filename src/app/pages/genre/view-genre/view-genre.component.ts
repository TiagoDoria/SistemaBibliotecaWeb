import { Component, OnInit } from '@angular/core';
import { Genero } from '../../../../models/Genero.model';
import { GenreService } from '../../../../services/genre.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ResponseDTO } from '../../../../models/ResponseDTO';
import { Router } from '@angular/router';



@Component({
  selector: 'app-view-genre',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './view-genre.component.html',
  styleUrl: './view-genre.component.css'
})
export class ViewGenreComponent implements OnInit {
  genres: Genero[] = [];

  constructor(private genreService: GenreService, private router: Router) { }

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

    updateGenero(genero: Genero): void {
      // Navega para o componente de edição, passando o id do genero na URL
      this.router.navigate([`/genero/atualizar/${genero.id}`]);
  
    }
}
