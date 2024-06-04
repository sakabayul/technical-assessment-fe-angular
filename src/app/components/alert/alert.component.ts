import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/auth/service/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  alertMessages: string[] = [];

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.getAlert().subscribe(messages => {
      this.alertMessages = messages;
    });
  }

  closeAlert(message: string) {
    this.alertService.removeAlert(message);
  }
}
