import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphsComponent } from './graphs.component';

describe('GraphComponent', () => {
    let component: GraphsComponent;
    let fixture: ComponentFixture<GraphsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GraphsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GraphsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
