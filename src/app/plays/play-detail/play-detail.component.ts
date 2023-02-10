import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Play } from '../play';
import { PlaysService } from '../plays.service';

@Component({
  selector: 'app-play-detail',
  templateUrl: './play-detail.component.html',
  styleUrls: ['./play-detail.component.scss']
})
export class PlayDetailComponent {
  currentPlay: Play;
  originalTitle = '';

  constructor(
    private playsService: PlaysService,
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set play(value) {
    if(!value) return;
    this.currentPlay = {...value}
    this.originalTitle = this.currentPlay.title;
  }

  ngOnInit(): void {
    
  }


  // this.play$ = this.route.paramMap.pipe(
  //   switchMap((params: ParamMap) =>
  //   this.playsService.getPlay(params.get('id')!))
  // );

}
