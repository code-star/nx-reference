import { Component, OnInit } from '@angular/core';
import { Rate } from '@star/shared/types';
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
export class AppComponent implements OnInit {
  title = 'Rx Reference';
  loading = false;
  rates: [number, Rate][] = [];

  constructor(private btcRateService: BtcRateService) {}

  getRate(): void {
    this.loading = true;
    this.btcRateService.getRate().subscribe((item) => {
      this.rates.push(item);
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.getRate();
  }
}
