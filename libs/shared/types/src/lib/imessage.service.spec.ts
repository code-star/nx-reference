import { TestBed } from '@angular/core/testing';

import { MinimalLoggerService } from './minimal-logger.service';

describe('MinimalLoggerService', () => {
  let service: MinimalLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinimalLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
