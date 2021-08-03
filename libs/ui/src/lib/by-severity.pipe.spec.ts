import { BySeverityPipe } from './by-severity.pipe';

describe('BySeverityPipe', () => {
  it('create an instance', () => {
    const pipe = new BySeverityPipe();
    expect(pipe).toBeTruthy();
  });
});
