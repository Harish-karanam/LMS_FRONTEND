import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrLeaveTypes } from './hr-leave-types';

describe('HrLeaveTypes', () => {
  let component: HrLeaveTypes;
  let fixture: ComponentFixture<HrLeaveTypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrLeaveTypes],
    }).compileComponents();

    fixture = TestBed.createComponent(HrLeaveTypes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
