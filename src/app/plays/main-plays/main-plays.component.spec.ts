import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPlaysComponent } from './main-plays.component';

describe('MainPlaysComponent', () => {
  let component: MainPlaysComponent;
  let fixture: ComponentFixture<MainPlaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPlaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPlaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
