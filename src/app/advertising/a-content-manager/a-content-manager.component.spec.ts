import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AContentManagerComponent } from './a-content-manager.component';

describe('AContentManagerComponent', () => {
  let component: AContentManagerComponent;
  let fixture: ComponentFixture<AContentManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AContentManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AContentManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
