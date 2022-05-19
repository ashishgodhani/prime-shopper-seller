import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceNotificationAddComponent } from './performance-notification-add.component';

describe('PerformanceNotificationAddComponent', () => {
  let component: PerformanceNotificationAddComponent;
  let fixture: ComponentFixture<PerformanceNotificationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceNotificationAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceNotificationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
