import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importando o CommonModule

import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { v4 as uuidv4 } from 'uuid';


import { ActivatedRoute, Router } from '@angular/router';


import { Autor } from '../../../../models/Autor.model';
import { AuthorService } from '../../../../services/author.service';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';


@Component({
  selector: 'app-update-author',
  standalone: true,
  imports: [InputTextModule, FormsModule, PanelModule, ButtonModule, CardModule, CommonModule, CalendarModule, AutoCompleteModule, DropdownModule, InputNumberModule],
  templateUrl: './update-author.component.html',
  styleUrl: './update-author.component.css'
})
export class UpdateAuthorComponent {
  formData: Autor = {
    id: uuidv4(),
    nome: { value: '' },
    nascimento: { value: '' },
  };

  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const authorId = this.route.snapshot.paramMap.get('id');
    if (authorId) {
      this.getAuthor(authorId);
    }

  }

  getAuthor(id: string): void {
    this.authorService.getAuthorById(id).subscribe((data) => {
      this.formData = data.result;
    });
  }

  updateAuthor(): void {
    this.authorService.updateAuthor(this.formData).subscribe(
      (response) => {
        console.log('Autor atualizado com sucesso!', response);
        this.router.navigate(['/autor/listar']);  // Redireciona para a lista de autores
      },
      (error) => {
        console.error('Erro ao atualizar o autor', error);
      }
    );
  }

}
