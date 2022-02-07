import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteDraftsComponent } from './complete-drafts.component';

describe('CompleteDraftsComponent', () => {
  let component: CompleteDraftsComponent;
  let fixture: ComponentFixture<CompleteDraftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteDraftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteDraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
