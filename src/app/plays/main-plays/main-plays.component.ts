import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Play } from '../play';
import { PlaysService } from '../plays.service';

//variable to set actions to, based on interface data
const emptyPlay: Play = {
  id: null,
  title: '',
  description: '',
  favorite: false,
}

@Component({
  selector: 'app-main-plays',
  templateUrl: './main-plays.component.html',
  styleUrls: ['./main-plays.component.scss']
})
export class MainPlaysComponent {
  plays = []; //base variable
  plays$: any;
  currentPlay = null;

  constructor(
    private playsService: PlaysService,
    private route: ActivatedRoute,
    private router: Router) { }

//Lifecycle hook to show all items based on current actions. 
//Referred to after every action that changes data
  ngOnInit(): void {
    this.fetchPlays();
    this.route.paramMap.subscribe(params => {
      this.currentId = params.get('id');
      if(this.currentId) {
        this.setCurrentPlay(this.currentId);
      }
    })
    
  }

  setCurrentPlay(id) {
    this.currentPlay = this.plays.find(play => play.id === id)
  }

  currentId = null

  

//other variables used to manipulate information
  selectedPlay = emptyPlay;
  originalTitle = '';

//DOM method to interact with UI
  selectPlay(play) {
    this.selectedPlay = {...play}; //creates replica to avoid shared-mutable
  }
  
//response method to reset form -- called with cancel button
  reset() {
    this.selectPlay({...emptyPlay})//creates blank replica to avoid shared-mutable
  }

//base method for lifecycle hook
  fetchPlays() {
    this.plays$ = this.playsService.all();
  }

//called with save button
  savePlay(play) {
    if(play.id) {
      this.updatePlay(play);
    } else {
      this.createPlay(play);
    }
  }

//used in form
  createPlay(play) {
    this.playsService.create(play)
    .subscribe(result => this.fetchPlays());
  }

//used in form
  updatePlay(play) {
    this.playsService.create(play)
    .subscribe(result => this.fetchPlays());
  }

//delete button
  deletePlay(id) {
    this.playsService.delete(id)
    .subscribe(result => this.fetchPlays());
  }


}
