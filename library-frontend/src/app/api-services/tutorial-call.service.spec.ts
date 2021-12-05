import { TestBed } from '@angular/core/testing';

import { TutorialCallService } from './tutorial-call.service';

describe('TutorialCallService', () => {
  let service: TutorialCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorialCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
