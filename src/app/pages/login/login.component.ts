import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';

import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';

import { UsuarioService } from '../../../services/user.service';
import { LoginDTO } from '../../../models/Login.dto';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { LoginResponse, ResponseDTO } from '../../../models/LoginResponse.dto';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule,
    CardModule,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    PasswordModule,
    CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [
    {
      provide: HttpClient,
      useFactory: (handler: HttpBackend) => new HttpClient(handler),
      deps: [HttpBackend]
    },
    UsuarioService
  ]
})
export class LoginComponent {
  usuario: LoginDTO = {
    userName: '',
    password: ''
  };
  mensagemErro: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  login(): void {
      //Verifica se is campos foram preenchidos
    if (this.usuario.userName && this.usuario.password) {
      this.usuarioService.getLogin(this.usuario).subscribe(
        (response : ResponseDTO<LoginResponse>) => {
          console.log(response);
          if (response.result.token != "") //se for true ele redireciona
          this.router.navigate(['/dashboard']);
        else
        //alert ("Erro ao Logar");
          this.mensagemErro = 'Verifique seu email e(ou) sua senha'
        },
        err => {
          console.error('Erro ao logar usuário');
          this.mensagemErro = 'Verifique seu email e(ou) sua senha'
        }
      );
    } else {
      this.mensagemErro = 'Informe seu email e sua senha'
      console.error('Informe seu email e sua senha');
    }
  }
}