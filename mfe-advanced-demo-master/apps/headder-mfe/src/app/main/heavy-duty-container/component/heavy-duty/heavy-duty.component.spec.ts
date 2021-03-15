import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyDutyComponent } from './heavy-duty.component';

describe('HeavyDutyComponent', () => {
  let component: HeavyDutyComponent;
  let fixture: ComponentFixture<HeavyDutyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeavyDutyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavyDutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
