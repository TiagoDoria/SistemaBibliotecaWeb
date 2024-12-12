import { Component , Input} from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importando o CommonModule
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../../../../models/Livro.model';
import { Autor } from '../../../../models/Autor.model';
import { AuthorService } from '../../../../services/author.service';
import { DropdownModule } from 'primeng/dropdown';
import { GenreService } from '../../../../services/genre.service';
import { Genero } from '../../../../models/Genero.model';
import { ResponseDTO } from '../../../../models/ResponseDTO';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';

import { v4 as uuidv4 } from 'uuid';
import { BookService } from '../../../../services/book.service';
@Component({
  selector: 'app-update-genre',
  standalone: true,
  imports: [InputTextModule, FormsModule, PanelModule, ButtonModule, CardModule, CommonModule, CalendarModule, DropdownModule, InputNumberModule],
  templateUrl: './update-genre.component.html',
  styleUrl: './update-genre.component.css'
})
export class UpdateGenreComponent  {
  formData: Genero = {
    id: '',
    nome: { value: '' },
    livros: []
  };

  genreSend: Genero = {
    id: '',
    nome: { value: '' },
    livros: []
  };

  constructor(
    private route: ActivatedRoute,
    private genreService: GenreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const authorId = this.route.snapshot.paramMap.get('id');
    if (authorId) {
      this.getGenre(authorId);
    }
  }

  getGenre(id: string): void {
    this.genreService.getGenreById(id).subscribe((data) => {
      this.formData = data.result;
    });
  }

  updateGenre(): void {
    this.genreSend.id = this.formData.id;
    this.genreSend.nome = { value: this.formData.nome.value };
    this.genreService.updateGenre(this.genreSend).subscribe(
      (response) => {
        console.log('Livro atualizado com sucesso!', response);
        this.router.navigate(['/genero/listar']);  // Redireciona para a lista de autores
      },
      (error) => {
        console.error('Erro ao atualizar o livro', error);
      }
    );
  }


}
