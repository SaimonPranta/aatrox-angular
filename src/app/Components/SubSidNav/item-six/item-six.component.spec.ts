import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSixComponent } from './item-six.component';

describe('ItemSixComponent', () => {
  let component: ItemSixComponent;
  let fixture: ComponentFixture<ItemSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
