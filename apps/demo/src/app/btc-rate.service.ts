import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map, delay } from 'rxjs/operators';
import { Rate, BtcResponse } from '@star/shared/types';

type DateAndRate = [number, Rate];

@Injectable({
  providedIn: 'root',
})
export class BtcRateService {
  constructor(private http: HttpClient) {}

  private btcUrl = 'api/btc';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private log(message: string) {
    console.log(message);
  }

  getRate(): Observable<DateAndRate> {
    // TODO fix for production
    const url = `http://localhost:3333/${this.btcUrl}`;
    return this.http.get<BtcResponse>(url).pipe(
      tap(() => this.log(`fetched rate`)),
      delay(1000),
      map(({ btc }) => [Date.now(), btc] as DateAndRate),
      catchError(this.handleError<DateAndRate>(`getRate`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: Error): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
