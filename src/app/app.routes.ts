import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateAuthorComponent } from './pages/author/create-author/create-author.component';
import { ViewAuthorComponent } from './pages/author/view-author/view-author.component';
import { CreateBookComponent } from './pages/book/create-book/create-book.component';
import { ViewBookComponent } from './pages/book/view-book/view-book.component';
import { CreateGenreComponent } from './pages/genre/create-genre/create-genre.component';
import { ViewGenreComponent } from './pages/genre/view-genre/view-genre.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path:'', component: LoginComponent },
    { path: 'registrar', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'autor/criar', component: CreateAuthorComponent, canActivate: [AuthGuard] },
    { path: 'autor/listar', component: ViewAuthorComponent, canActivate: [AuthGuard] },
    { path: 'livro/criar', component: CreateBookComponent, canActivate: [AuthGuard] },
    { path: 'livro/listar', component: ViewBookComponent, canActivate: [AuthGuard] },
    { path: 'genero/criar', component: CreateGenreComponent, canActivate: [AuthGuard] },
    { path: 'genero/listar', component: ViewGenreComponent, canActivate: [AuthGuard] },
];
