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
  private _label_orig: string;
  private _loading: boolean;

  /**
   * When loading is true, the button is disabled and a loading animation is displayed.
   */
  @Input() set loading(value: boolean) {
    this._loading = value;

    if (this.label !== 'Loading...') {
      this._label_orig = this.label;
    }

    this.label = value ? 'Loading...' : this._label_orig;
  }
  get loading(): boolean {
    return this._loading;
  }

  /**
   * The label to display on the button
   */
  @Input() label: string;
}
