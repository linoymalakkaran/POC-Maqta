import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MFETodoComponent} from './todo.component';

describe('TodoComponent', () => {
    let component: MFETodoComponent;
    let fixture: ComponentFixture<MFETodoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MFETodoComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MFETodoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
