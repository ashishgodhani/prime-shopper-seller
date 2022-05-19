import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceCusomerAddComponent } from './voice-cusomer-add.component';

describe('VoiceCusomerAddComponent', () => {
  let component: VoiceCusomerAddComponent;
  let fixture: ComponentFixture<VoiceCusomerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceCusomerAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceCusomerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
