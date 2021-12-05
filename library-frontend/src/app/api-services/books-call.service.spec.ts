import { TestBed } from '@angular/core/testing';

import { BooksCallService } from './books-call.service';

describe('BooksCallService', () => {
  let service: BooksCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
