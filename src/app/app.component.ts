import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { CommonModule } from '@angular/common'; // Import CommonModule
import { filter } from 'rxjs';
import { MenubarComponent } from './shared/menubar/menubar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, MenubarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements  OnInit{
  title = 'Biblioteca';
  showNavbar: boolean = true;
  showSidebar: boolean = true;

  constructor(private router: Router) {}


  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentRoute = this.router.url;
      this.showNavbar = currentRoute !== '/' && currentRoute !== '/registrar';
      this.showSidebar = currentRoute !== '/' && currentRoute !== '/registrar';
    });
  }
}