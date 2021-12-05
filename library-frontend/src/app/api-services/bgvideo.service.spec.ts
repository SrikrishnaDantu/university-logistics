import { TestBed } from '@angular/core/testing';

import { BgvideoService } from './bgvideo.service';

describe('BgvideoService', () => {
  let service: BgvideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BgvideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
