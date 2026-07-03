import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Rate } from '@star/shared/types';

@Component({
  selector: 'star-rates-table',
  templateUrl: './rates-table.html',
  styleUrl: './rates-table.scss',
  imports: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatesTable {
  /** A list of tuples of dates (milliseconds since epoch) and rates. */
  readonly rates = input<[number, Rate][]>([]);
}
