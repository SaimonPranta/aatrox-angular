import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachImpressionComponent } from './reach-impression.component';

describe('ReachImpressionComponent', () => {
  let component: ReachImpressionComponent;
  let fixture: ComponentFixture<ReachImpressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReachImpressionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReachImpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
