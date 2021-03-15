import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckTraceComponent } from './truck-trace.component';

describe('TruckTraceComponent', () => {
  let component: TruckTraceComponent;
  let fixture: ComponentFixture<TruckTraceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckTraceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckTraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
