import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingHealthComponent } from './pricing-health.component';

describe('PricingHealthComponent', () => {
  let component: PricingHealthComponent;
  let fixture: ComponentFixture<PricingHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
