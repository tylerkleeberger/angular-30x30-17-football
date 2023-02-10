import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Play } from '../play';
import { PlaysService } from '../plays.service';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})
export class PlaysListComponent implements OnInit{
  @Input() plays: Play[] = [];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();


  ngOnInit(): void {
    
  }
}