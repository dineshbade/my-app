import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserTabComponent } from './register-user-tab.component';

describe('RegisterUserTabComponent', () => {
  let component: RegisterUserTabComponent;
  let fixture: ComponentFixture<RegisterUserTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterUserTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUserTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
