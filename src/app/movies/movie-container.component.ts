import { Component, OnInit  } from '@angular/core';
import {  MovieService } from '../services/movie.service';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector:'movie-container',
  template:`
            <hr>
            <div class="container-fluid">
              <div class="row">
              <div class="col-md-3" *ngFor="let movie of movies" id="thumb">
                <movie-thumbnail [movie]="movie"></movie-thumbnail>
              </div>
              </div>
            </div>

  `,
  styles:[`
      #thumb{
        max-height: 500px!important;
      }
  `]



})

export class MovieContainerComponent implements OnInit {
      movie:any;
      movies:any;
      constructor(private movieService: MovieService , private router: Router, private route:ActivatedRoute ){

      }

      ngOnInit(){
          let data = this.route.snapshot.data['movies'];
          let { results } = data ;
            this.movies= results;
            console.log(this.movies[0].poster_path);
          //this.datab = this.movieService.getMovies().subscribe((data)=>{ this.movies= data});

      }


};
