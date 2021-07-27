import { Component, OnInit } from '@angular/core';
import { MessageService } from '@star/shared/services';
import { Rate } from '@star/shared/types';
import { BtcRateService } from '@star/shared/data-access';

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

  constructor(
    public messageService: MessageService,
    private btcRateService: BtcRateService
  ) {}

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
