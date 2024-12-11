import { Component , Input} from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { CommonModule } from '@angular/common'; // Importando o CommonModule
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { UsuarioService } from '../../../services/user.service';
import { User } from '../../../models/User.model';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { PasswordModule } from 'primeng/password';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AutoCompleteModule, InputTextModule, FormsModule, InputNumberModule, CommonModule, CardModule, ButtonModule, PanelModule, DropdownModule, PasswordModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [
    {
      provide: HttpClient,
      useFactory: (handler: HttpBackend) => new HttpClient(handler),
      deps: [HttpBackend]
    },
    UsuarioService
  ]
})
export class RegisterComponent {
  formData: any = {};

  constructor ( private apiservice: UsuarioService, private router: Router) { }
  onSave() {
    this.apiservice.createUsuario( this.formData).subscribe(
      (response:User) => {
        console.log("Usuário cadastrado com sucesso!");
        this.router.navigate(['/']);
      }
    )
  }
}