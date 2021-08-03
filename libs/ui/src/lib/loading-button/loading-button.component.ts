import { Component, Input } from '@angular/core';

/**
 * Button with a loading state, to show when an an action is keeping this button disabled.
 */
@Component({
  selector: 'star-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.scss'],
})
export class LoadingButtonComponent {
  /**
   * When loading is true, the button is disabled and a loading animation is displayed.
   */
  @Input() loading: boolean;
}
