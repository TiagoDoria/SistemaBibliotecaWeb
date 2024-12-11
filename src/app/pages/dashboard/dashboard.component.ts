import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';


//api service
import { Subscription } from 'rxjs';
import { FooterComponent } from '../../shared/footer/footer.component';
import { User } from '../../../models/User.model';
import { CommunicationService } from '../../../services/CommunicationService';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MenubarModule,
    TableModule,
    CommonModule,
    CardModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    FooterComponent
],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {
  private subscription: Subscription = new Subscription(); // Inicializa com uma nova instância

  visible: boolean = false;
  visibleCreate: boolean = false;

  usuario: User = {
    name: '',
    email: '',
    password: ''
  };

  usuNome: string = '';
  usuEmail: string = '';

  selectedUser: User | null = null; // Usuário selecionado que será passado ao modal

  showDialog() {
      this.visible = true;
  }

  // Dados que serão exibidos na tabela
  data: any;

  constructor(private router : Router, private communicationService: CommunicationService) { }

  ngOnInit() {
    this.subscription = this.communicationService.event$.subscribe(eventName => {
      this.handleEvent(eventName);
    });
  }

  handleEvent(eventName: string) {
    switch (eventName) {
      case 'cadastroClicked':
        this.onCreateClick();
        break;
    }
  }

  onCreateClick() {
    console.log('Cadastro clicked');
    this.visibleCreate = true;
  }
}