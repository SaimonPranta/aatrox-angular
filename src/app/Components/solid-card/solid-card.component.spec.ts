import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidCardComponent } from './solid-card.component';

describe('SolidCardComponent', () => {
  let component: SolidCardComponent;
  let fixture: ComponentFixture<SolidCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolidCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolidCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
