import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'star-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.scss'],
})
export class LoadingButtonComponent implements OnInit {
  private _label: string;
  private _label_orig: string;
  private _loading: boolean;
  public disabled: boolean;
  @Input() set loading(value: boolean) {
    this._loading = value;
    this._label = value ? 'Loading...' : this._label_orig;
    this.disabled = value;
  }
  get loading(): boolean {
    return this._loading;
  }
  /**
   * The label to display on the button
   */
  // @Input() label: string;
  @Input() set label(value: string) {
    this._label = value;
    this._label_orig = value;
  }
  get label(): string {
    return this._label;
  }
  constructor() {}

  ngOnInit(): void {}
}
