import { TestBed } from '@angular/core/testing';

import { HostelCallService } from './hostel-call.service';

describe('HostelCallService', () => {
  let service: HostelCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostelCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
