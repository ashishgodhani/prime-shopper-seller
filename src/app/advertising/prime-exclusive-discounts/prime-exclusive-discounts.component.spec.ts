import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeExclusiveDiscountsComponent } from './prime-exclusive-discounts.component';

describe('PrimeExclusiveDiscountsComponent', () => {
  let component: PrimeExclusiveDiscountsComponent;
  let fixture: ComponentFixture<PrimeExclusiveDiscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeExclusiveDiscountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeExclusiveDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
