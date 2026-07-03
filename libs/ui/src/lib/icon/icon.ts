import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconType = 'loading' | 'home' | 'code' | 'star';

@Component({
  selector: 'star-icon[type]',
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {
  /** Name of the icon to display. */
  readonly type = input<IconType>('home');
}
