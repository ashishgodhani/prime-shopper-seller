import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceNotificationsComponent } from './performance-notifications.component';

describe('PerformanceNotificationsComponent', () => {
  let component: PerformanceNotificationsComponent;
  let fixture: ComponentFixture<PerformanceNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
