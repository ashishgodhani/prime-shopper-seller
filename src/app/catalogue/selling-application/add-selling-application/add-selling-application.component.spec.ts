import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSellingApplicationComponent } from './add-selling-application.component';

describe('AddSellingApplicationComponent', () => {
  let component: AddSellingApplicationComponent;
  let fixture: ComponentFixture<AddSellingApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSellingApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSellingApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
