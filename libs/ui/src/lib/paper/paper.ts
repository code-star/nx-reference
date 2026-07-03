import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * A card to group other components together. Presentational, without state.
 *
 * Usage: `<star-paper><h1>Card Title</h1><p>card content</p></star-paper>`
 *
 * @example `<star-paper><h1>Card Title</h1><p>card content</p></star-paper>`
 */
@Component({
  selector: 'star-paper',
  templateUrl: './paper.html',
  styleUrl: './paper.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Paper {}
