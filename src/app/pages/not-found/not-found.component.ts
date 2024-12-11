import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PanelModule } from 'primeng/panel'; 
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [PanelModule, ButtonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigate(['/']); 
  }
}