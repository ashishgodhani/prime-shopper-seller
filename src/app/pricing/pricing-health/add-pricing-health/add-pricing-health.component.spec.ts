import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPricingHealthComponent } from './add-pricing-health.component';

describe('AddPricingHealthComponent', () => {
  let component: AddPricingHealthComponent;
  let fixture: ComponentFixture<AddPricingHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPricingHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPricingHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
