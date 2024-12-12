import { Component , Input} from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importando o CommonModule
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { Router } from '@angular/router';
import { Livro } from '../../../../models/Livro.model';
import { BookService } from '../../../../services/book.service';
import { Autor } from '../../../../models/Autor.model';
import { AuthorService } from '../../../../services/author.service';
import { DropdownModule } from 'primeng/dropdown';
import { GenreService } from '../../../../services/genre.service';
import { Genero } from '../../../../models/Genero.model';
import { ResponseDTO } from '../../../../models/ResponseDTO';

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [FormsModule, PanelModule, ButtonModule, CardModule, CommonModule, InputTextModule, DropdownModule],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css'
})
export class CreateBookComponent {
  formData: Livro = {} as Livro;
  authors: Autor[] = []; // Lista de autores para o dropdown
  genres: Genero[] = [];

  constructor ( private bookService: BookService, private authorService: AuthorService, private genreService: GenreService, private router: Router) { }

  ngOnInit(): void {
    this.loadAuthors(); // Carregar autores ao inicializar o componente
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
      (response) => {
        this.genres = response;
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
