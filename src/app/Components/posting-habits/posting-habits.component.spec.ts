import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingHabitsComponent } from './posting-habits.component';

describe('PostingHabitsComponent', () => {
  let component: PostingHabitsComponent;
  let fixture: ComponentFixture<PostingHabitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostingHabitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostingHabitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
