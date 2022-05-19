import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadOrderRelatedFilesComponent } from './upload-order-related-files.component';

describe('UploadOrderRelatedFilesComponent', () => {
  let component: UploadOrderRelatedFilesComponent;
  let fixture: ComponentFixture<UploadOrderRelatedFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadOrderRelatedFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadOrderRelatedFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
