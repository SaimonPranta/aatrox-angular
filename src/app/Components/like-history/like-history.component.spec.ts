import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeHistoryComponent } from './like-history.component';

describe('LikeHistoryComponent', () => {
  let component: LikeHistoryComponent;
  let fixture: ComponentFixture<LikeHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
