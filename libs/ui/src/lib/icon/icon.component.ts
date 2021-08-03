import { Component, Input } from '@angular/core';

@Component({
  selector: 'star-icon[type]',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  /**
   * Name of the icon to display
   */
  @Input() type: 'loading' | 'home' | 'code' | 'star' = 'home';
}
