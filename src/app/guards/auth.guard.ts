import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: UsuarioService, private router: Router) {}

  canActivate(): boolean {
    const token = this.authService.getToken();
    if (token) {
      return true; // Permite o acesso à rota
    } else {
      this.router.navigate(['/']); // Redireciona para o login
      return false; // Bloqueia o acesso
    }
  }
}
