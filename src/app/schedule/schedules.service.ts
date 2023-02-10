import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from './schedule';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {

  model = 'schedules'

  constructor(
    private http: HttpClient
  ) { }

  //URL Base
  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id) {
    return `${this.getUrl()}/${id}`;
  }

  private localHost = 'http://localhost:3000/schedules'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
  }

  getSchedules(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.getUrl());
  }

  getSchedule(id: number | string): Observable<Schedule> {
    const url = `${this.getUrl()}/${id}`;
    return this.http.get<Schedule>(url).pipe();
  }

  //GET
  all() {
    return this.http.get(this.getUrl());
  }

  //GET (by id) - used for searching?
  find(id) {
    return this.http.get(this.getUrlWithID(id));
  }

  //POST (used to save new)
  create(play) {
    return this.http.post(this.getUrl(), play);
  }

  //PUT (used to update as new)
  update(play) {
    return this.http.put(this.getUrlWithID(play.id), play);
  }

  //DELETE
  delete(id) {
    return this.http.delete(this.getUrlWithID(id));
  }
}
