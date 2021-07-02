import { Component, Input } from '@angular/core';

@Component({
  selector: 'star-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.scss'],
})
export class LoadingButtonComponent {
  private _label_orig: string;
  private _loading: boolean;

  /**
   * TODO loading documentation
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
