import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxDocumentLibraryComponent } from './tax-document-library.component';

describe('TaxDocumentLibraryComponent', () => {
  let component: TaxDocumentLibraryComponent;
  let fixture: ComponentFixture<TaxDocumentLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxDocumentLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxDocumentLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
