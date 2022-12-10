import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSevenComponent } from './item-seven.component';

describe('ItemSevenComponent', () => {
  let component: ItemSevenComponent;
  let fixture: ComponentFixture<ItemSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
