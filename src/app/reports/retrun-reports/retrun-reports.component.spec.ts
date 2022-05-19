import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrunReportsComponent } from './retrun-reports.component';

describe('RetrunReportsComponent', () => {
  let component: RetrunReportsComponent;
  let fixture: ComponentFixture<RetrunReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrunReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrunReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
