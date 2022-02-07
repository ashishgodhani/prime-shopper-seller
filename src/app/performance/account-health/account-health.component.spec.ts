import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountHealthComponent } from './account-health.component';

describe('AccountHealthComponent', () => {
  let component: AccountHealthComponent;
  let fixture: ComponentFixture<AccountHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
