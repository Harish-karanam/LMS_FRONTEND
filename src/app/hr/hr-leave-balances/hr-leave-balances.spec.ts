import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrLeaveBalances } from './hr-leave-balances';

describe('HrLeaveBalances', () => {
  let component: HrLeaveBalances;
  let fixture: ComponentFixture<HrLeaveBalances>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrLeaveBalances],
    }).compileComponents();

    fixture = TestBed.createComponent(HrLeaveBalances);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
