import {ComponentFixture, TestBed} from '@angular/core/testing';

import {menuPageComponent} from './menu-page.component';

describe('menuRouteComponent', () => {
    let component: menuPageComponent;
    let fixture: ComponentFixture<menuPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [menuPageComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(menuPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
