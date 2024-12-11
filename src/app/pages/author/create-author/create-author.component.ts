import { Component , Input} from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importando o CommonModule
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { Router } from '@angular/router';
import { Author } from '../../../../models/Author.model';
import { AuthorService } from '../../../../services/author.service';

@Component({
  selector: 'app-create-author',
  standalone: true,
  imports: [InputTextModule, FormsModule, PanelModule, ButtonModule, CardModule, CommonModule],
  templateUrl: './create-author.component.html',
  styleUrl: './create-author.component.css'
})
export class CreateAuthorComponent {

  formData: Author = {} as Author;

  constructor ( private authorService: AuthorService, private router: Router) { }

  onSubmit() {
    if (this.formData.name.value && this.formData.birthDate.value) {
      this.authorService.createAuthor(this.formData).subscribe(
        (response) => {
          console.log('Autor criado com sucesso:', response);
          this.router.navigate(['/autor/listar']);
        },
        (error) => {
          console.error('Erro ao criar autor:', error);
          // Lógica para tratar o erro (exibir uma mensagem ao usuário, por exemplo)
        }
      );
    } else {
      console.log('Preencha todos os campos');
    }
  }
}
