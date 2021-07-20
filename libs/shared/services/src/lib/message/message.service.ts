import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  // TODO allow setting severity and to list the messages somewhere
  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
