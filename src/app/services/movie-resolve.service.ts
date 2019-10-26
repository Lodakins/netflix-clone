import { Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import { MovieService } from './movie.service';
import { map } from 'rxjs/operators';

@Injectable()
export class MovieResolver implements Resolve<any> {

      constructor( private movieService: MovieService){}

    resolve(){
        return this.movieService.getMovieData();
    }

}
