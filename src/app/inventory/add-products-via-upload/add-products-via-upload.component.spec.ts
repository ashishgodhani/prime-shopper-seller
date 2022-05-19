import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductsViaUploadComponent } from './add-products-via-upload.component';

describe('AddProductsViaUploadComponent', () => {
  let component: AddProductsViaUploadComponent;
  let fixture: ComponentFixture<AddProductsViaUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductsViaUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductsViaUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
