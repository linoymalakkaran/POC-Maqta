import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackCargoTableComponent } from './track-cargo-table.component';

describe('TrackCargoTableComponent', () => {
  let component: TrackCargoTableComponent;
  let fixture: ComponentFixture<TrackCargoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackCargoTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackCargoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
