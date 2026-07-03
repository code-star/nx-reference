import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  Alert,
  AppTemplate,
  BySeverity,
  LoadingButton,
  Paper,
  RatesTable,
} from '@star/ui';
import { MessageService } from '@star/shared/services';
import { BtcRateService } from '@star/shared/data-access';
import { Rate } from '@star/shared/types';

@Component({
  selector: 'star-root',
  imports: [
    RouterOutlet,
    AppTemplate,
    Paper,
    LoadingButton,
    RatesTable,
    Alert,
    BySeverity,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  protected readonly title = 'Nx Reference';
  protected readonly loading = signal(false);
  protected readonly rates = signal<[number, Rate][]>([]);

  protected readonly messageService = inject(MessageService);
  private readonly btcRateService = inject(BtcRateService);

  getRate(): void {
    this.loading.set(true);
    this.btcRateService.getRate().subscribe((item) => {
      if (item) {
        this.rates.update((rates) => [...rates, item]);
      }
      this.loading.set(false);
    });
  }

  ngOnInit(): void {
    this.getRate();
  }
}
