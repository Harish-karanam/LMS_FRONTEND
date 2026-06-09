import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrApprovals } from './hr-approvals';

describe('HrApprovals', () => {
  let component: HrApprovals;
  let fixture: ComponentFixture<HrApprovals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrApprovals],
    }).compileComponents();

    fixture = TestBed.createComponent(HrApprovals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
