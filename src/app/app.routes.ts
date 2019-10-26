import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieContainerComponent} from './movies/movie-container.component';
import { MovieDetailComponent } from './movies/movie-detail.component';
import { ErrorComponent} from './movies/error.component';
import { MovieRouteActivator } from './movies/details/movie-route-activator.service'
import { MovieResolver} from './services/movie-resolve.service';
import { DetailResolver } from './services/detail-resolve.service';
import { FavouriteComponent} from './movies/favourite.component';
import { FavouriteResolver } from './services/favorite-resolve.service';


export const routes: Routes = [
  {path:'movies', component:MovieContainerComponent, resolve: { movies: MovieResolver }},
  {path:'favourite',component:FavouriteComponent, resolve: { favourites: FavouriteResolver} },
  {path:'movies/error', component: ErrorComponent},
  {path:'movies/:id', component: MovieDetailComponent, canActivate:[MovieRouteActivator], resolve:{movie: DetailResolver }},
  { path:'', redirectTo:'/movies',pathMatch:'full'},
  {path: 'user', loadChildren: './user/user.module#UserModule'}
];

