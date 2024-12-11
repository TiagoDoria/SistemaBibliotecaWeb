import { Component , Input} from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importando o CommonModule
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { Router } from '@angular/router';
import { Book } from '../../../../models/Book.model';
import { BookService } from '../../../../services/book.service';

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [FormsModule, PanelModule, ButtonModule, CardModule, CommonModule, InputTextModule],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css'
})
export class CreateBookComponent {
  formData: Book = {} as Book;

  constructor ( private bookService: BookService, private router: Router) { }

  onSubmit() {
    if (this.formData.name.value && this.formData.releaseDate.value) {
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
