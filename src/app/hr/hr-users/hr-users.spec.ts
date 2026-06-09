import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrUsers } from './hr-users';

describe('HrUsers', () => {
  let component: HrUsers;
  let fixture: ComponentFixture<HrUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrUsers],
    }).compileComponents();

    fixture = TestBed.createComponent(HrUsers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
