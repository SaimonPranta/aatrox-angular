import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerGrowthDetailsComponent } from './follower-growth-details.component';

describe('FollowerGrowthDetailsComponent', () => {
  let component: FollowerGrowthDetailsComponent;
  let fixture: ComponentFixture<FollowerGrowthDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowerGrowthDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowerGrowthDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
