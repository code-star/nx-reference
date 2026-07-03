import { Injectable, signal, Signal } from '@angular/core';
import { IMessageService, LogItem, Severity } from '@star/shared/types';

@Injectable({
  providedIn: 'root',
})
export class MessageService implements IMessageService {
  private readonly _logs = signal<LogItem[]>([]);

  /** Reactive, read-only view of the log. */
  readonly logs: Signal<LogItem[]> = this._logs.asReadonly();

  log(message: string, severity: Severity): void {
    this._logs.update((logs) => [...logs, { message, severity }]);
  }

  clear(): void {
    this._logs.set([]);
  }
}
