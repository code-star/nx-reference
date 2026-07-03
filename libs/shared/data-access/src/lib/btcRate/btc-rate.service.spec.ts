import { TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { IMessageService, LogItem, Severity } from '@star/shared/types';

import { BtcRateService } from './btc-rate.service';

class StubMessageService implements IMessageService {
  readonly logs = signal<LogItem[]>([]);
  log = (message: string, severity: Severity) => {
    this.logs.update((logs) => [...logs, { message, severity }]);
  };
}

describe('BtcRateService', () => {
  let service: BtcRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: IMessageService, useClass: StubMessageService },
      ],
    });
    service = TestBed.inject(BtcRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
