import { Component } from '@angular/core';
import { BtcRateService } from './btc-rate.service';

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
  title = 'Rx Reference';
  loading = false;
  rates = [];

  constructor(private btcRateService: BtcRateService) {}

  getRate(): void {
    this.loading = true;
    this.btcRateService.getRate().subscribe((rate) => {
      this.rates.push(rate);
      this.loading = false;
    });
  }
}
