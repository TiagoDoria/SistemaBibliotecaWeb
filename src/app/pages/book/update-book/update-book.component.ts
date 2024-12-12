import { Component , Input, OnInit} from '@angular/core';
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
  selector: 'app-update-book',
  standalone: true,
  imports: [InputTextModule, FormsModule, PanelModule, ButtonModule, CardModule, CommonModule, CalendarModule, DropdownModule, InputNumberModule],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent implements OnInit {
  formData: Livro = {
    id: '',
    nome: { value: '' },
    dataLancamento: { value: '' },
    autorId: '',
    generoId: ''
  };

  livroSend: Livro = {
    id: '',
    nome: { value: '' },
    dataLancamento: { value: '' },
    autorId: '',
    generoId: ''
  };


  authors: Autor[] = []; // Lista de autores para o dropdown
  genres: Genero[] = []; // Lista de autores para o dropdown


  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private genreService: GenreService,
    private authorService: AuthorService,
    private router: Router
  ) {}

  
  ngOnInit(): void {
    const authorId = this.route.snapshot.paramMap.get('id');
    if (authorId) {
      this.getBook(authorId);
    }
    this.loadAuthors(); // Carregar autores ao inicializar o componente
    this.loadGenres();
  }

  loadAuthors(): void {
    this.authorService.getAuthors().subscribe(
      (response: ResponseDTO) => {
        this.authors = response.result?.$values;
      },
      (error) => {
        console.error('Erro ao carregar autores:', error);
      }
    );
  }

  loadGenres() {
    this.genreService.getGenres().subscribe(
      (response : ResponseDTO) => {
        this.genres = response.result?.$values;
      },
      (error) => {
        console.error('Erro ao carregar gêneros:', error);
      }
    );
  }

  getBook(id: string): void {
    this.bookService.getBookById(id).subscribe((data) => {
      this.formData = data.result;
    });
  }

  updateBook(): void {
    this.livroSend.id = this.formData.id;
    this.livroSend.nome = { value: this.formData.nome.value };
    this.livroSend.dataLancamento = { value: this.formData.dataLancamento.value };
    this.livroSend.autorId = this.formData.autorId;
    this.livroSend.generoId = this.formData.generoId;
    console.log(this.livroSend);
    this.bookService.updateBook(this.livroSend).subscribe(
      (response) => {
        console.log('Livro atualizado com sucesso!', response);
        this.router.navigate(['/livro/listar']);  // Redireciona para a lista de autores
      },
      (error) => {
        console.error('Erro ao atualizar o livro', error);
      }
    );
  }

}
