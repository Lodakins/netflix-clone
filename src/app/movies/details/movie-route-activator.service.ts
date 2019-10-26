import { CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { MovieService} from '../../services/movie.service';

@Injectable()
export class MovieRouteActivator implements CanActivate {

    constructor(private movieService: MovieService, private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot){
          const routeExist = !!this.movieService.getMovie(+route.params['id']);

          if(!routeExist){
              this.router.navigate(['movies/error'])
          }else{
            return routeExist
          }
    }
}
