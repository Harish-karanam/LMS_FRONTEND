import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerApprovals } from './manager-approvals';

describe('ManagerApprovals', () => {
  let component: ManagerApprovals;
  let fixture: ComponentFixture<ManagerApprovals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerApprovals],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerApprovals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
