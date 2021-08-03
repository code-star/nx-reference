import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bySeverity'
})
export class BySeverityPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
