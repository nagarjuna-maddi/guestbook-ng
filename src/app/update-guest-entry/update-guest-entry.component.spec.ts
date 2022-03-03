import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGuestEntryComponent } from './update-guest-entry.component';

describe('UpdateGuestEntryComponent', () => {
  let component: UpdateGuestEntryComponent;
  let fixture: ComponentFixture<UpdateGuestEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGuestEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGuestEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
