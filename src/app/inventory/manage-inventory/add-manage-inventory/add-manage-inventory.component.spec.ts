import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManageInventoryComponent } from './add-manage-inventory.component';

describe('AddManageInventoryComponent', () => {
  let component: AddManageInventoryComponent;
  let fixture: ComponentFixture<AddManageInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddManageInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddManageInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
