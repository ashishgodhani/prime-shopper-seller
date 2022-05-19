import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImproveListingQualityComponent } from './improve-listing-quality.component';

describe('ImproveListingQualityComponent', () => {
  let component: ImproveListingQualityComponent;
  let fixture: ComponentFixture<ImproveListingQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImproveListingQualityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImproveListingQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
