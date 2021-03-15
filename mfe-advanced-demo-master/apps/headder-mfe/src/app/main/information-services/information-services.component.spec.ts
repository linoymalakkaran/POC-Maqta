import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationServicesComponent } from './information-services.component';

describe('InformationServicesComponent', () => {
  let component: InformationServicesComponent;
  let fixture: ComponentFixture<InformationServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
