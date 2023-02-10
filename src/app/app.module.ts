import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './login/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { MainPlaysComponent } from './plays/main-plays/main-plays.component';
import { PlaysListComponent } from './plays/play-list/play-list.component';
import { PlayDetailComponent } from './plays/play-detail/play-detail.component';
import { SchedulesComponent } from './schedule/schedules/schedules.component';
import { SchedulesListComponent } from './schedule/schedules-list/schedules-list.component';
import { ScheduleDetailComponent } from './schedule/schedule-detail/schedule-detail.component';
import { WeekLibraryComponent } from './schedule/week-library/week-library.component';
import { ScheduleModule } from './schedule/schedule/schedule.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainPlaysComponent,
    PlaysListComponent,
    PlayDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ScheduleModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
