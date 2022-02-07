import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingApplicationComponent } from './selling-application.component';

describe('SellingApplicationComponent', () => {
  let component: SellingApplicationComponent;
  let fixture: ComponentFixture<SellingApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
