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
  rates = [];

  getRate(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.rates.push(Math.random())
    }, 1000);
  }
}
