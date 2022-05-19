import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadManageVideosComponent } from './upload-manage-videos.component';

describe('UploadManageVideosComponent', () => {
  let component: UploadManageVideosComponent;
  let fixture: ComponentFixture<UploadManageVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadManageVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadManageVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
