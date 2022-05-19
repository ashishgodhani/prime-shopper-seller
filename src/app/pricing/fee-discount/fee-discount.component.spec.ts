import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeDiscountComponent } from './fee-discount.component';

describe('FeeDiscountComponent', () => {
  let component: FeeDiscountComponent;
  let fixture: ComponentFixture<FeeDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
