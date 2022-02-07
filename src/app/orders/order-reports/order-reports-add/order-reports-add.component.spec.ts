import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReportsAddComponent } from './order-reports-add.component';

describe('OrderReportsAddComponent', () => {
  let component: OrderReportsAddComponent;
  let fixture: ComponentFixture<OrderReportsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderReportsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReportsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
