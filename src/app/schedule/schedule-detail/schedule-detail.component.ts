import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Schedule } from '../schedule';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.scss']
})
export class ScheduleDetailComponent implements OnInit{
  schedule!: Schedule;
  editName = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

   ngOnInit(): void {
     this.route.data
     .subscribe(data => {
       const schedule: Schedule = data['schedule'];
       this.editName = schedule.name;
       this.schedule = schedule;
     });
   }

   cancel() {
    this.gotoSchedule();
  }

  save() {
    this.schedule.name = this.editName;
    this.gotoSchedule();
  }

  
  gotoSchedule() {
    const scheduleId = this.schedule ? this.schedule.id : null;
    this.router.navigate(['../', {id: scheduleId }], {relativeTo: this.route });
  }

}
