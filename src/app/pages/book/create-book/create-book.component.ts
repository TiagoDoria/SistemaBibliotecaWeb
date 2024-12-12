import { Component , Input} from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importando o CommonModule
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { Router } from '@angular/router';
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
  selector: 'app-create-book',
  standalone: true,
  imports: [InputTextModule, FormsModule, PanelModule, ButtonModule, CardModule, CommonModule, CalendarModule, DropdownModule, InputNumberModule],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css'
})
export class CreateBookComponent {
  formData: Livro = {
    id: uuidv4(),
    nome: { value: '' },
    dataLancamento: { value: '' },
    autorId: '',
    generoId: ''
  };

  authors: Autor[] = []; // Lista de autores para o dropdown
  genres: Genero[] = [];

  constructor ( private bookService: BookService, private authorService: AuthorService, private genreService: GenreService, private router: Router) { }

  ngOnInit(): void {
    this.loadAuthors(); // Carregar autores ao inicializar o componente
    this.loadGenres();
  }

  loadAuthors(): void {
    this.authorService.getAuthors().subscribe(
      (response: ResponseDTO) => {
        this.authors = response.result;
      },
      (error) => {
        console.error('Erro ao carregar autores:', error);
      }
    );
  }


  loadGenres() {
    this.genreService.getGenres().subscribe(
      (response : ResponseDTO) => {
        this.genres = response.result;
      },
      (error) => {
        console.error('Erro ao carregar gêneros:', error);
      }
    );
  }

  onSubmit() {
    if (this.formData.nome.value && this.formData.dataLancamento.value) {
      this.bookService.createBook(this.formData).subscribe(
        (response) => {
          console.log('Autor criado com sucesso:', response);
          this.router.navigate(['/livro/listar']);
        },
        (error) => {
          console.error('Erro ao criar livro:', error);
          // Lógica para tratar o erro (exibir uma mensagem ao usuário, por exemplo)
        }
      );
    } else {
      console.log('Preencha todos os campos');
    }
  }
}
