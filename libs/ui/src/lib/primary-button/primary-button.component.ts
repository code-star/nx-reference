import { Component, Input } from '@angular/core';

/**
 * Some primary button documentation. This is an atom, a UI component. Presentational, without state.
 * Usage: <star-primary-button label="my label" />
 */
@Component({
  selector: 'star-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
})
export class PrimaryButtonComponent {
  /**
   * The label to display on the button
   */
  @Input() label: string;
}
