import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import {
  BtcResponse,
  IMessageService,
  Rate,
  Severity,
} from '@star/shared/types';

type DateAndRate = [number, Rate];

@Injectable({
  providedIn: 'root',
})
export class BtcRateService {
  private http = inject(HttpClient);
  private messageService = inject(IMessageService);

  private btcUrl = 'api/btc';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private log(message: string, severity: Severity) {
    this.messageService.log(`SHARED-BtcRateService: ${message}`, severity);
  }

  getRate(): Observable<DateAndRate> {
    const isLocal =
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1';

    if (!isLocal) {
      this.log(
        'The BTC rate API is only available when running locally. Start the server app to enable it.',
        'warning',
      );
      return of(undefined as unknown as DateAndRate);
    }

    return this.http.get<BtcResponse>(`http://localhost:3333/${this.btcUrl}`).pipe(
      delay(1000),
      tap(() => this.log(`fetched rate`, 'info')),
      map(({ btc }) => [Date.now(), btc] as DateAndRate),
      catchError(this.handleError<DateAndRate>(`getRate`)),
    );
  }

  /**
   * Handle an Http operation that failed and let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: Error): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`, 'error');
      return of(result as T);
    };
  }
}
