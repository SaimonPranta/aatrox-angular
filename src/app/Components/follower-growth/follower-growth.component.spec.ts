import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerGrowthComponent } from './follower-growth.component';

describe('FollowerGrowthComponent', () => {
  let component: FollowerGrowthComponent;
  let fixture: ComponentFixture<FollowerGrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowerGrowthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowerGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
