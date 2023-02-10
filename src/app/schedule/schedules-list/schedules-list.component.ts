import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Schedule } from '../schedule';
import { SchedulesService } from '../schedules.service';

@Component({
  selector: 'app-schedules-list',
  templateUrl: './schedules-list.component.html',
  styleUrls: ['./schedules-list.component.scss']
})
export class SchedulesListComponent implements OnInit{

  schedules$?: Observable<Schedule[]>;
  selectedId = 0;

  constructor(
    private scheduleService: SchedulesService,
    private route: ActivatedRoute) { }

  
  ngOnInit(): void {
    this.schedules$ = this.route.firstChild?.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.scheduleService.getSchedules();
      })
    );
  }

}
