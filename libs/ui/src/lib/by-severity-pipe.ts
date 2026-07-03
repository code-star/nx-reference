import { Pipe, PipeTransform } from '@angular/core';
import { LogItem, Severity } from '@star/shared/types';

@Pipe({
  name: 'bySeverity',
})
export class BySeverity implements PipeTransform {
  transform(value: LogItem[], severity: Severity): LogItem[] {
    return value.filter((item) => item.severity === severity);
  }
}
