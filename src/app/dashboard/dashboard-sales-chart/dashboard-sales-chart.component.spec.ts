import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSalesChartComponent } from './dashboard-sales-chart.component';

describe('DashboardSalesChartComponent', () => {
  let component: DashboardSalesChartComponent;
  let fixture: ComponentFixture<DashboardSalesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSalesChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSalesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
