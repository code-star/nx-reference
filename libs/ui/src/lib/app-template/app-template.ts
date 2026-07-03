import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from '../icon/icon';

@Component({
  selector: 'star-app-template[title]',
  templateUrl: './app-template.html',
  styleUrl: './app-template.scss',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppTemplate {
  readonly title = input('');
}
