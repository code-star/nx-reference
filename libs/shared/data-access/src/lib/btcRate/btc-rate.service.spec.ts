import { TestBed } from '@angular/core/testing';

import { BtcRateService } from './btc-rate.service';

describe('BtcRateService', () => {
  let service: BtcRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtcRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
