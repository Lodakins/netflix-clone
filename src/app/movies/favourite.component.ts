import { Component, OnInit  } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector:'favourite',
  template:`
      <div class="container">
        <div class="row">
          <div class="favourite" >
           <div class="col-md-6" *ngFor="let data of favourite">
              <img src="https://image.tmdb.org/t/p/w500/{{data.poster_path}}" alt="{{data.title}}" class="img-top" />
           </div>
          </div>
        </div>
      </div>
  `
})

export class FavouriteComponent implements OnInit {
          favourite:any;
    constructor( private movieService: MovieService, private route: ActivatedRoute){

    }



    ngOnInit(){
      this.favourite = this.route.snapshot.data['favourites'];
    }





}
