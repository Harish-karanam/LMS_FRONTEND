import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrProjects } from './hr-projects';

describe('HrProjects', () => {
  let component: HrProjects;
  let fixture: ComponentFixture<HrProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrProjects],
    }).compileComponents();

    fixture = TestBed.createComponent(HrProjects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
