import { Injectable } from '@angular/core';
import { IMessageService, LogItem, Severity } from '@star/shared/types';

@Injectable({
  providedIn: 'root',
})
export class MessageService implements IMessageService {
  logs: LogItem[] = [];

  log(message: string, severity: Severity) {
    // Do not mutate the array; create a new one so a pure pipe can detect changes.
    this.logs = [
      ...this.logs,
      {
        message,
        severity,
      },
    ];
  }

  clear() {
    this.logs = [];
  }
}
