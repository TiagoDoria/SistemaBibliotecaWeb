import { Component , Input} from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importando o CommonModule
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { Router } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { GenreService } from '../../../../services/genre.service';
import { Genero } from '../../../../models/Genero.model';
@Component({
  selector: 'app-create-genre',
  standalone: true,
  imports: [CommonModule,CardModule,ButtonModule, PanelModule, FormsModule, DropdownModule],
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css'
})
export class CreateGenreComponent {
  genres: Genero[] = [];
  formData: Genero = {} as Genero;

  constructor(private genreService: GenreService, private router: Router) { }

  onSubmit() {
    if (this.formData.nome.value) {
      this.genreService.createGenre(this.formData).subscribe(
        (response) => {
          console.log('Gênero criado com sucesso:', response);
          this.router.navigate(['/genero/listar']);
        },
        (error) => {
          console.error('Erro ao criar gênero:', error);
        }
      );
    } else {
      console.log('Preencha todos os campos');
    }
  }
}
