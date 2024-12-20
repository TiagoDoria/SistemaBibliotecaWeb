import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importando o CommonModule

import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { v4 as uuidv4 } from 'uuid';


import { Router } from '@angular/router';


import { Autor } from '../../../../models/Autor.model';
import { AuthorService } from '../../../../services/author.service';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-create-author',
  standalone: true,
  imports: [InputTextModule, FormsModule, PanelModule, ButtonModule, CardModule, CommonModule, CalendarModule, AutoCompleteModule, DropdownModule, InputNumberModule],

  templateUrl: './create-author.component.html',
  styleUrl: './create-author.component.css'
})
export class CreateAuthorComponent {

  formData: Autor = {
    id: uuidv4(),
    nome: { value: '' },
    nascimento: { value: '' },
  };

  constructor ( private authorService: AuthorService, private router: Router) { }

  onSubmit() {
    if (this.formData.nome.value && this.formData.nascimento.value) {
      console.log(this.formData);
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
