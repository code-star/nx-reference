import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideZonelessChangeDetection } from '@angular/core';
import { of } from 'rxjs';
import { BtcRateService } from '@star/shared/data-access';
import { Rate } from '@star/shared/types';
import { App } from './app';

class StubBtcRateService {
  getRate() {
    return of([1_700_000_000_000, 123] as [number, Rate]);
  }
}

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([]),
        { provide: BtcRateService, useClass: StubBtcRateService },
      ],
    }).compileComponents();
  });

  it('renders the app-template title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('header h1')?.textContent).toContain(
      'Nx Reference',
    );
  });

  it('fetches an initial rate on init and renders it in the table', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(1);
    expect(rows[0].textContent).toContain('123');
  });

  it('exposes a get-new-rate button', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const button = fixture.nativeElement.querySelector(
      'star-loading-button button',
    );
    expect(button?.textContent).toContain('get new exchange rate');
  });
});
