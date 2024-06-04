import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSubject = new Subject<string[]>();
  private messages: { message: string, timeoutId: any }[] = [];

  getAlert() {
    return this.alertSubject.asObservable();
  }

  showAlert(message: string) {
    if (this.messages.length >= 3) {
      const oldestMessage = this.messages.shift();
      if (oldestMessage) {
        clearTimeout(oldestMessage.timeoutId);
      }
    }

    const timeoutId = setTimeout(() => this.removeAlert(message), 2000);
    this.messages.push({ message, timeoutId });
    this.alertSubject.next(this.messages.map(m => m.message));
  }

  removeAlert(message: string) {
    const index = this.messages.findIndex(m => m.message === message);
    if (index !== -1) {
      clearTimeout(this.messages[index].timeoutId);
      this.messages.splice(index, 1);
      this.alertSubject.next(this.messages.map(m => m.message));
    }
  }
}
