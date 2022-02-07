import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixPriceAlertsAddComponent } from './fix-price-alerts-add.component';

describe('FixPriceAlertsAddComponent', () => {
  let component: FixPriceAlertsAddComponent;
  let fixture: ComponentFixture<FixPriceAlertsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixPriceAlertsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixPriceAlertsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
