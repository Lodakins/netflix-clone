import {Component, Input, Output, EventEmitter } from '@angular/core';
import { MovieService} from '../services/movie.service';

@Component({
  selector:'upvote',
  template:`
  <div class="votingWidgetContainer pointable" (click)="onClick()">
    <div class="votingButton">
          <fa name="heart" [style.color]="iconColor"></fa>
    </div>
  </div>
  `,
  styles:[`
      .votingWidgetContainer{
        width: 50px;
      }
  `]

})

export class UpvoteComponent {

  @Input() voted:any;
  @Output() vote = new EventEmitter();
  @Input() set userHasVoted(val){
    this.iconColor = val ? 'yellow' : 'red';

  }
        iconColor:string;
  onClick() {
    this.vote.emit({});
  }



}
