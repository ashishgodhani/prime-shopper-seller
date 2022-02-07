import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInventoryReportsComponent } from './add-inventory-reports.component';

describe('AddInventoryReportsComponent', () => {
  let component: AddInventoryReportsComponent;
  let fixture: ComponentFixture<AddInventoryReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInventoryReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInventoryReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
