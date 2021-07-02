import { Component, Input, OnInit } from '@angular/core';

/**
 * Some primary button documentation. This is an atom, a UI component. Presentational, without state.
 */
@Component({
  selector: 'star-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent implements OnInit {
  /**
   * The label to display on the button
   */
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

}
