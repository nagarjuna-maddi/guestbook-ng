import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestentryComponent } from './guestentry.component';

describe('GuestentryComponent', () => {
  let component: GuestentryComponent;
  let fixture: ComponentFixture<GuestentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
