import { Component } from '@angular/core';

/**
 * A Card to group other components together. This is an atom, a UI component. Presentational, without state.
 *
 * Usage: `<star-paper><h1>Card Title</h1><p>card content</p></star-paper>`
 *
 * @example `<star-paper><h1>Card Title</h1><p>card content</p></star-paper>`
 */
@Component({
  selector: 'star-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.scss'],
})
export class PaperComponent {}
