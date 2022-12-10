import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOneComponent } from './item-one.component';

describe('ItemOneComponent', () => {
  let component: ItemOneComponent;
  let fixture: ComponentFixture<ItemOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
