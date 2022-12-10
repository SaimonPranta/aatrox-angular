import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTowComponent } from './item-tow.component';

describe('ItemTowComponent', () => {
  let component: ItemTowComponent;
  let fixture: ComponentFixture<ItemTowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
