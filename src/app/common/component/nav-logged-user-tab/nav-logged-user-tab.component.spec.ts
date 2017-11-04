import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLoggedUserTabComponent } from './nav-logged-user-tab.component';

describe('NavLoggedUserTabComponent', () => {
  let component: NavLoggedUserTabComponent;
  let fixture: ComponentFixture<NavLoggedUserTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLoggedUserTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLoggedUserTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
