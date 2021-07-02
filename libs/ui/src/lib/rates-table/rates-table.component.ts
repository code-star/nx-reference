import { Component, Input } from '@angular/core';
import { Rate } from '@star/shared/types';

@Component({
  selector: 'star-rates-table',
  templateUrl: './rates-table.component.html',
  styleUrls: ['./rates-table.component.scss'],
})
export class RatesTableComponent {
  /**
   * A list of tuples of dates (in milliseconds since epoch) and rates (number)
   */
  @Input() rates: [number, Rate][] = [];
}
