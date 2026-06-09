import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveBalance } from './leave-balance';

describe('LeaveBalance', () => {
  let component: LeaveBalance;
  let fixture: ComponentFixture<LeaveBalance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaveBalance],
    }).compileComponents();

    fixture = TestBed.createComponent(LeaveBalance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
