import { Injectable } from '@angular/core';

export type Severity = 'info' | 'error';

export interface LogItem {
  severity: string;
  message: string;
}

/**
 * Abstract DI token for a message/log sink. `MessageService` is the concrete
 * implementation, bound via `{ provide: IMessageService, useExisting: MessageService }`.
 */
@Injectable({
  providedIn: 'root',
})
export abstract class IMessageService {
  abstract logs: LogItem[];
  abstract log: (msg: string, severity: Severity) => void;
}
