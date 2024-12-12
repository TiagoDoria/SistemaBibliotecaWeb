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
import { UpdateAuthorComponent } from './pages/author/update-author/update-author.component';
import { UpdateBookComponent } from './pages/book/update-book/update-book.component';
import { UpdateGenreComponent } from './pages/genre/update-genre/update-genre.component';

export const routes: Routes = [
    { path:'', component: LoginComponent },
    { path: 'registrar', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'autor/criar', component: CreateAuthorComponent, canActivate: [AuthGuard] },
    { path: 'autor/atualizar/:id', component: UpdateAuthorComponent, canActivate: [AuthGuard] },
    { path: 'autor/listar', component: ViewAuthorComponent, canActivate: [AuthGuard] },
    { path: 'livro/criar', component: CreateBookComponent, canActivate: [AuthGuard] },
    { path: 'livro/atualizar/:id', component: UpdateBookComponent, canActivate: [AuthGuard] },
    { path: 'livro/listar', component: ViewBookComponent, canActivate: [AuthGuard] },
    { path: 'genero/criar', component: CreateGenreComponent, canActivate: [AuthGuard] },
    { path: 'genero/listar', component: ViewGenreComponent, canActivate: [AuthGuard] },
    { path: 'genero/atualizar/:id', component: UpdateGenreComponent, canActivate: [AuthGuard] },

];
