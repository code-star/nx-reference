import { Injectable } from '@angular/core';
import { IMessageService, LogItem, Severity } from '@star/shared/types';

@Injectable({
  providedIn: 'root',
})
export class MessageService implements IMessageService {
  logs: LogItem[] = [
    {
      message: 'test-info',
      severity: 'info',
    },
    {
      message: 'test-error',
      severity: 'error',
    },
  ];

  log(message: string, severity: Severity) {
    this.logs.push({
      message,
      severity,
    });
  }

  clear() {
    this.logs = [];
  }
}
