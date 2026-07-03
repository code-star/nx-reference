import { LogItem } from '@star/shared/types';
import { BySeverity } from './by-severity-pipe';

describe('BySeverity', () => {
  const pipe = new BySeverity();
  const items: LogItem[] = [
    { message: 'all good', severity: 'info' },
    { message: 'boom', severity: 'error' },
    { message: 'fyi', severity: 'info' },
  ];

  it('keeps only items matching the severity', () => {
    expect(pipe.transform(items, 'error')).toEqual([
      { message: 'boom', severity: 'error' },
    ]);
    expect(pipe.transform(items, 'info')).toEqual([
      { message: 'all good', severity: 'info' },
      { message: 'fyi', severity: 'info' },
    ]);
  });

  it('returns an empty array when nothing matches', () => {
    expect(
      pipe.transform([{ message: 'x', severity: 'info' }], 'error'),
    ).toEqual([]);
  });
});
