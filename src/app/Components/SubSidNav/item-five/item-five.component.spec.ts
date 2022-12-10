import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFiveComponent } from './item-five.component';

describe('ItemFiveComponent', () => {
  let component: ItemFiveComponent;
  let fixture: ComponentFixture<ItemFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
