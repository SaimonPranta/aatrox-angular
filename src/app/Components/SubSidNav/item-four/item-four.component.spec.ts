import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFourComponent } from './item-four.component';

describe('ItemFourComponent', () => {
  let component: ItemFourComponent;
  let fixture: ComponentFixture<ItemFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
