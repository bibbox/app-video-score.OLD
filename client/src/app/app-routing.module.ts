import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent }      from './movies/movies.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { MovieDetailComponent }  from './movie-detail/movie-detail.component';

import {TaskListComponent} from './task/task-list/task-list.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: MovieDetailComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
