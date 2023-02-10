import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulesComponent } from '../schedules/schedules.component';
import { SchedulesListComponent } from '../schedules-list/schedules-list.component';
import { ScheduleDetailComponent } from '../schedule-detail/schedule-detail.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleRoutingModule } from './schedule-routing.module';



@NgModule({
  declarations: [
    SchedulesComponent,
    SchedulesListComponent,
    ScheduleDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ScheduleRoutingModule,
  ]
})
export class ScheduleModule { }
