import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface Alert {
  message: string;
  color: string;
  timeoutId: any;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSubject = new Subject<Alert[]>();
  private messages: Alert[] = [];

  getAlert() {
    return this.alertSubject.asObservable();
  }

  showAlert(message: string, color: string) {
    if (this.messages.length >= 3) {
      const oldestMessage = this.messages.shift();
      if (oldestMessage) {
        clearTimeout(oldestMessage.timeoutId);
      }
    }

    const timeoutId = setTimeout(() => this.removeAlert(message), 2000);
    this.messages.push({ message, color, timeoutId });
    this.alertSubject.next(this.messages);
  }

  removeAlert(message: string) {
    const index = this.messages.findIndex(m => m.message === message);
    if (index !== -1) {
      clearTimeout(this.messages[index].timeoutId);
      this.messages.splice(index, 1);
      this.alertSubject.next(this.messages);
    }
  }
}
