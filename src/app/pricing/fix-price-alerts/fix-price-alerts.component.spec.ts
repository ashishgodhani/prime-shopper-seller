import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixPriceAlertsComponent } from './fix-price-alerts.component';

describe('FixPriceAlertsComponent', () => {
  let component: FixPriceAlertsComponent;
  let fixture: ComponentFixture<FixPriceAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixPriceAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixPriceAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
