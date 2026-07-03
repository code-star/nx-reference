import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Primary button atom. Presentational, without state.
 *
 * Usage: `<star-primary-button>label</star-primary-button>`
 *
 * @example
 * `<star-primary-button>label</star-primary-button>`
 */
@Component({
  selector: 'star-primary-button',
  templateUrl: './primary-button.html',
  styleUrl: './primary-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimaryButton {
  /** When true, clicking the button has no effect. */
  readonly disabled = input(false);
}
