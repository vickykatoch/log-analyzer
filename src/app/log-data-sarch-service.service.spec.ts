import { TestBed, inject } from '@angular/core/testing';

import { LogDataSarchServiceService } from './log-data-sarch-service.service';

describe('LogDataSarchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogDataSarchServiceService]
    });
  });

  it('should be created', inject([LogDataSarchServiceService], (service: LogDataSarchServiceService) => {
    expect(service).toBeTruthy();
  }));
});
