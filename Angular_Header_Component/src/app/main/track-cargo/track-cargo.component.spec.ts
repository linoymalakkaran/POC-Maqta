import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackCargoComponent } from './track-cargo.component';

describe('TrackCargoComponent', () => {
  let component: TrackCargoComponent;
  let fixture: ComponentFixture<TrackCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackCargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
