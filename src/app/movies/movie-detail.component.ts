import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'movie-detail',
    templateUrl:'./movie-detail.component.html',
    styles:[`
        .card-container{
          margin-top: 30px;
          -webkit-box-shadow: 5px 7px 21px -1px rgba(255,255,255,255.72), -5px -7px 21px -1px rgba(255,255,255,0.5);
          box-shadow: 5px 7px 21px -1px rgba(255,255,255,0.72), -5px -7px 21px -1px rgba(255,255,255,0.5);
        }
        .image-card{
          padding:0px;
        }
        .title{
          font-weight: 700;
          font-size: 34px;

        }
        .img-top{
          height: 500px;
          width: 400px;
        }
        .body{
          padding:20px;
        }

    `]

})

export class MovieDetailComponent implements OnInit{

        movie:any;
        move:any;
    constructor(private movieService: MovieService, private route:ActivatedRoute){
    }

    ngOnInit(){
      this.movie = this.route.snapshot.data['movie'];
      console.log(this.movie)
    }


}
