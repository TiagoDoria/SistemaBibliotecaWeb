
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [MenuModule, ToastModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            label: 'Autor',
            icon: 'pi pi-cog',
            items: [
                {
                    label: 'Cadastrar',
                    icon: 'pi pi-plus',
                    routerLink:'/autor/criar'
                },
                {
                    label: 'Listar',
                    icon: 'pi pi-search',
                    routerLink: '/autor/listar'
                }
            ]
        },
        {
            label: 'Livro',
            icon: 'pi pi-cog',
            items: [
                {
                    label: 'Cadastrar',
                    icon: 'pi pi-plus',
                    routerLink: '/livro/criar'
                },
                {
                    label: 'Listar',
                    icon: 'pi pi-search',
                    routerLink: '/livro/listar'
                }
            ]
        },
        {
          label: 'Gênero',
          icon: 'pi pi-cog',
          items: [
              {
                  label: 'Cadastrar',
                  icon: 'pi pi-plus',
                  routerLink: '/genero/criar'
              },
              {
                  label: 'Listar',
                  icon: 'pi pi-search',
                  routerLink: '/genero/listar'
              }
          ]
      }
    ];
  }
}