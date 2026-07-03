import { btc } from './btc';

describe('btc', () => {
  it('returns a numeric rate between 0 and 100000', () => {
    const value = btc();
    expect(typeof value).toBe('number');
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThan(100000);
  });
});
