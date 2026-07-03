import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('appends log items immutably', () => {
    const before = service.logs();
    service.log('hello', 'info');

    expect(service.logs()).not.toBe(before);
    expect(service.logs()).toEqual([{ message: 'hello', severity: 'info' }]);
  });

  it('clears logs', () => {
    service.log('boom', 'error');
    service.clear();

    expect(service.logs()).toEqual([]);
  });
});
