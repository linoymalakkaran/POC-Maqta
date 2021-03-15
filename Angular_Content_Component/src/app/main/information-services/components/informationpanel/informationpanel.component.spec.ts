import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationpanelComponent } from './informationpanel.component';

describe('InformationpanelComponent', () => {
  let component: InformationpanelComponent;
  let fixture: ComponentFixture<InformationpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
