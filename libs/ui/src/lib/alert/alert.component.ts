import { Component, Input } from '@angular/core';
import { LogItem } from '@star/shared/types';

@Component({
  selector: 'star-alert[item]',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  /**
   * LogItem contains the message and severity to show in an alert block
   */
  @Input() item: LogItem = { message: '', severity: 'info' };

  getPrefix() {
    return this.item.severity.toUpperCase();
  }
}
