import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CommunicationService } from '../../../services/CommunicationService';
import { UsuarioService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']  // Corrigido de 'styleUrl' para 'styleUrls'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = []; // Inicialize como um array vazio

  constructor(private communicationService: CommunicationService, private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/dashboard'  // Navegação para Home
      },
      {
        label: 'Cadastro',
        icon: 'pi pi-plus-circle',
        items : [
            {
              label: 'Autor',
              icon: 'pi pi-user',
              routerLink:'/autor/criar'
            },
            {
              label: 'Livro',
              icon: 'pi pi-mobile',
              routerLink : '/livro/criar'
            },
            {
              label: 'Gênero',
              icon: 'pi pi-mobile',
              routerLink : '/genero/criar'
            }
        ]
      },
      {
        label: 'Listagem',
        icon: 'pi pi-search',
        items : [
            {
              label: 'Autor',
              icon: 'pi pi-user',
              routerLink:'/autor/listar'
            },
            {
              label: 'Livro',
              icon: 'pi pi-mobile',
              routerLink : '/livro/listar'
            },
            {
              label: 'Gênero',
              icon: 'pi pi-mobile',
              routerLink : '/genero/listar'
            },
        ]
      },
      {
        label: 'Sair',
        icon: 'pi pi-sign-out',
        command: () => this.logout()  // Navegação para Login
      }
    ];
  }

  logout(): void {
    this.usuarioService.logout(); // Remove o token
    this.router.navigate(['/']); // Redireciona para a página de login
  }

  onCreateClick() {
    this.communicationService.sendEvent('cadastroClicked');
  }
}