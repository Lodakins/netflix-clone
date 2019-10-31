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

  iconColor:string = 'white';
  @Input() voted:any;
  @Output() vote = new EventEmitter();
  @Input() set userHasVoted(val){
    this.iconColor = val ? 'red' : 'yellow';

  }

  onClick() {
    this.vote.emit({});
  }



}
