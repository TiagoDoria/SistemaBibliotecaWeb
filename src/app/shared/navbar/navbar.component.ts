import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CommunicationService } from '../../../services/CommunicationService';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']  // Corrigido de 'styleUrl' para 'styleUrls'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = []; // Inicialize como um array vazio

  constructor(private communicationService: CommunicationService) {}

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
              label: 'Clientes',
              icon: 'pi pi-user',
              routerLink:'/cliente/criar'
            },
            {
              label: 'Equipamento',
              icon: 'pi pi-mobile',
              routerLink : '/equipamento/criar'
            },
            // {
            //   label: 'Lote',
            //   icon: 'pi pi-objects-column',
            //   routerLink :'/lote'
            // }
        ]
      },
      {
        label: 'Listagem',
        icon: 'pi pi-search',
        items : [
            {
              label: 'Clientes',
              icon: 'pi pi-user',
              routerLink:'/cliente/listar'
            },
            {
              label: 'Equipamento',
              icon: 'pi pi-mobile',
              routerLink : '/equipamento/listar'
            },
            {
              label: 'Lote',
              icon: 'pi pi-objects-column',
              routerLink :'/lote'
            }
        ]
      },
      {
        label: 'Sair',
        icon: 'pi pi-sign-out',
        routerLink: '/'  // Navegação para Login
      }
    ];
  }

  onCreateClick() {
    this.communicationService.sendEvent('cadastroClicked');
  }
}