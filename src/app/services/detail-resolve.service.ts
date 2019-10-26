import { Injectable} from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { MovieService } from './movie.service';
import { map } from 'rxjs/operators';

@Injectable()
export class DetailResolver implements Resolve<any> {

      constructor( private movieService: MovieService){

      }

    resolve(route: ActivatedRouteSnapshot){
        return this.movieService.getMovie(route.params['id']);
    }

}
