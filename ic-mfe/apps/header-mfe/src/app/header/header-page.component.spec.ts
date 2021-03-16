import {ComponentFixture, TestBed} from '@angular/core/testing';

import {headerPageComponent} from './header-page.component';

describe('headerRouteComponent', () => {
    let component: headerPageComponent;
    let fixture: ComponentFixture<headerPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [headerPageComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(headerPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
