import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarReportsComponent } from './navbar-reports.component';

describe('NavbarReportsComponent', () => {
  let component: NavbarReportsComponent;
  let fixture: ComponentFixture<NavbarReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
