import { TestBed } from '@angular/core/testing';

import { GuestEntryService } from './guest-entry.service';

describe('GuestEntryService', () => {
  let service: GuestEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
