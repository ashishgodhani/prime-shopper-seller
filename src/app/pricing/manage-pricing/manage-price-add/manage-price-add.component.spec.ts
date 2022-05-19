import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePriceAddComponent } from './manage-price-add.component';

describe('ManagePriceAddComponent', () => {
  let component: ManagePriceAddComponent;
  let fixture: ComponentFixture<ManagePriceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePriceAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePriceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
