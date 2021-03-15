import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyDutyContainerComponent } from './heavy-duty-container.component';

describe('HeavyDutyContainerComponent', () => {
  let component: HeavyDutyContainerComponent;
  let fixture: ComponentFixture<HeavyDutyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeavyDutyContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavyDutyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
