import { TestBed, inject } from '@angular/core/testing';

import { LogSearchService } from './log-search.service';

describe('LogSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogSearchService]
    });
  });

  it('should be created', inject([LogSearchService], (service: LogSearchService) => {
    expect(service).toBeTruthy();
  }));
});
