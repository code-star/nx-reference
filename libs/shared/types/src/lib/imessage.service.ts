import { Injectable, Signal } from '@angular/core';

export type Severity = 'info' | 'warning' | 'error';

export interface LogItem {
  severity: string;
  message: string;
}

/**
 * Abstract DI token for a message/log sink. `MessageService` is the concrete
 * implementation, bound via `{ provide: IMessageService, useExisting: MessageService }`.
 * `logs` is exposed as a signal so zoneless, OnPush consumers react to new entries.
 */
@Injectable({
  providedIn: 'root',
})
export abstract class IMessageService {
  abstract readonly logs: Signal<LogItem[]>;
  abstract log(message: string, severity: Severity): void;
}
