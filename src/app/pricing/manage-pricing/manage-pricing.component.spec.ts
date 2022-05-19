import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePricingComponent } from './manage-pricing.component';

describe('ManagePricingComponent', () => {
  let component: ManagePricingComponent;
  let fixture: ComponentFixture<ManagePricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
