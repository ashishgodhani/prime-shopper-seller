import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReportsAddComponent } from './customer-reports-add.component';

describe('CustomerReportsAddComponent', () => {
  let component: CustomerReportsAddComponent;
  let fixture: ComponentFixture<CustomerReportsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerReportsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReportsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
