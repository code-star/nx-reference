import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { LogItem } from '@star/shared/types';

@Component({
  selector: 'star-alert[item]',
  templateUrl: './alert.html',
  styleUrl: './alert.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Alert {
  /** LogItem contains the message and severity to show in an alert block. */
  readonly item = input<LogItem>({ message: '', severity: 'info' });

  readonly prefix = computed(() => this.item().severity.toUpperCase());
}
