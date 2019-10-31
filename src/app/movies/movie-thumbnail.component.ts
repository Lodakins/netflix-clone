import { Component, Input, OnInit } from '@angular/core';
import {  MovieService } from '../services/movie.service';

@Component({
    selector: 'movie-thumbnail',
    templateUrl: './movie-thumbnail.component.html',
    styles:[`
        .card{
          margin-bottom: 12px;
          border:0px;
          max-height: 500px!important;
          background: rgba(255,255,255,.2);
          -webkit-box-shadow: -5px -7px 10px -1px rgba(0,0,0,0.5);
          box-shadow:  -5px -7px 10px -1px rgba(0,0,0,0.5);
        }
        h5{ color: #fff;}
        .btn{
          background-color:red;
          border:0px;
        }
        .card-image-top{
          height: 300px;
        }
        .far{
          font-size: 16px;
          color:#fff;
        }
        .fa-heart{
          color:#fff;
        }
    `]

})


export class MovieThumbnailComponent {
     @Input() movie:any

     constructor(private moviesService: MovieService){

     }

     toggleVote(val){
       console.log(`now in toggle vote \${val}`);
        console.log(val);
        console.log(this.userHasVoted);
       if(!this.userHasVoted(val)){
         this.moviesService.addToFavourite(val);
           console.log('ok !!!');
       }
     }
      userHasVoted(value){
       let valu =this.moviesService.userHasVoted(value);
          return valu;
      }


}
