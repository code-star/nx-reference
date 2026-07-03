import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Paper } from '@star/ui';

/**
 * The federated entry point of the portfolio remote. Rendered standalone at
 * http://localhost:4201 and, via Module Federation, inside the demo host.
 */
@Component({
  selector: 'star-portfolio-entry',
  imports: [Paper],
  templateUrl: './entry.html',
  styleUrl: './entry.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Entry {}
