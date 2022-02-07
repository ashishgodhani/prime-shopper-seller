import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeDiscountAddComponent } from './fee-discount-add.component';

describe('FeeDiscountAddComponent', () => {
  let component: FeeDiscountAddComponent;
  let fixture: ComponentFixture<FeeDiscountAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeDiscountAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeDiscountAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
