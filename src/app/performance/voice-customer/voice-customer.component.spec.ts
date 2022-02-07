import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceCustomerComponent } from './voice-customer.component';

describe('VoiceCustomerComponent', () => {
  let component: VoiceCustomerComponent;
  let fixture: ComponentFixture<VoiceCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
