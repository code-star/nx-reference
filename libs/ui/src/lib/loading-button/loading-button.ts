import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from '../icon/icon';
import { PrimaryButton } from '../primary-button/primary-button';

/**
 * Button with a loading state, shown while an action keeps this button disabled.
 */
@Component({
  selector: 'star-loading-button',
  templateUrl: './loading-button.html',
  styleUrl: './loading-button.scss',
  imports: [PrimaryButton, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingButton {
  /** When true, the button is disabled and a loading animation is displayed. */
  readonly loading = input(false);
}
