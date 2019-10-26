import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationComponent} from './nav/nav.component';
import { MovieContainerComponent} from './movies/movie-container.component';
import { MovieThumbnailComponent } from './movies/movie-thumbnail.component';
import {  MovieDetailComponent } from './movies/movie-detail.component';
import { MovieService} from './services/movie.service';
import { ErrorComponent } from './movies/error.component';
import { MovieRouteActivator} from './movies/details/movie-route-activator.service'
import { MovieResolver } from './services/movie-resolve.service';
import { routes} from './app.routes'
import { RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { DetailResolver } from './services/detail-resolve.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavouriteComponent } from './movies/favourite.component';
import { UpvoteComponent } from './movies/upvote.component';
import { FavouriteResolver } from './services/favorite-resolve.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MovieContainerComponent,
    MovieThumbnailComponent,
    MovieDetailComponent,
    ErrorComponent,
    FavouriteComponent,
    UpvoteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
    providers: [ MovieService,
            MovieRouteActivator,
            MovieResolver,
            DetailResolver,
            FavouriteResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
