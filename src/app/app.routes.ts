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

export const routes: Routes = [
    { path:'', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'autor/criar', component: CreateAuthorComponent },
    { path: 'autor/listar', component: ViewAuthorComponent },
    { path: 'livro/criar', component: CreateBookComponent },
    { path: 'livro/listar', component: ViewBookComponent },
    { path: 'genero/criar', component: CreateGenreComponent },
    { path: 'genero/listar', component: ViewGenreComponent },
    { path: '**', component: NotFoundComponent }
];
