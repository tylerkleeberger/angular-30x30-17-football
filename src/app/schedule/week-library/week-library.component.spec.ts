import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekLibraryComponent } from './week-library.component';

describe('WeekLibraryComponent', () => {
  let component: WeekLibraryComponent;
  let fixture: ComponentFixture<WeekLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
