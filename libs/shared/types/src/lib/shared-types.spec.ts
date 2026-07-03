import { IMessageService, LogItem, Severity } from './imessage.service';
import { BtcResponse, Rate } from './shared-types';

describe('shared/types', () => {
  it('exposes the IMessageService DI token', () => {
    expect(IMessageService).toBeDefined();
    expect(typeof IMessageService).toBe('function');
  });

  it('models a LogItem with severity and message', () => {
    const item: LogItem = { severity: 'info', message: 'hello' };
    const severity: Severity = 'error';
    expect(item.message).toBe('hello');
    expect(severity).toBe('error');
  });

  it('models a BtcResponse rate', () => {
    const rate: Rate = 42000;
    const response: BtcResponse = { btc: rate };
    expect(response.btc).toBe(42000);
  });
});
