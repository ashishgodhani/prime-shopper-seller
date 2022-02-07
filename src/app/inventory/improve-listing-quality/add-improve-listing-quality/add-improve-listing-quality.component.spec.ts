import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImproveListingQualityComponent } from './add-improve-listing-quality.component';

describe('AddImproveListingQualityComponent', () => {
  let component: AddImproveListingQualityComponent;
  let fixture: ComponentFixture<AddImproveListingQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddImproveListingQualityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImproveListingQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
