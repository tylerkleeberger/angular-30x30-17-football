import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './login/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { MainPlaysComponent } from './plays/main-plays/main-plays.component';
import { PlayDetailComponent } from './plays/play-detail/play-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'plays', component: MainPlaysComponent }, 
  { path: 'play/:id', component: PlayDetailComponent },
  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
