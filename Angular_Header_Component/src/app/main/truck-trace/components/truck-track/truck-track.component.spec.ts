import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckTrackComponent } from './truck-track.component';

describe('TruckTrackComponent', () => {
  let component: TruckTrackComponent;
  let fixture: ComponentFixture<TruckTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
