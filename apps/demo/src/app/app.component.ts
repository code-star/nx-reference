import { Component, OnInit } from '@angular/core';
import { Rate } from '@star/shared/types';
import { BtcRateService } from './btc-rate.service';

/**
 * AppComponent is not a library, but a direct component in apps/demo/src/app/app.component.*
 */
@Component({
  selector: 'star-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
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
