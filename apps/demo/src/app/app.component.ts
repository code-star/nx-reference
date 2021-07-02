import { Component } from '@angular/core';

/**
 * This is test documentation, part 1 TODO
 */
@Component({
  selector: 'star-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
/**
 * This is test documentation, part 2 TODO
 */
export class AppComponent {
  title = 'demo';
  loading = false;

  getRate(): void {
    console.log('yo');
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
