import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() isVisible: boolean = false;

  @Output() yes = new EventEmitter<void>();
  @Output() no = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>(); // Menambahkan event untuk menutup modal

  onClose() {
    this.close.emit(); // Tombol event penutupan modal
  }

  onYes() {
    this.yes.emit();
    this.onClose(); // Menutup modal setelah mengklik Yes
  }

  onNo() {
    this.no.emit();
    this.onClose(); // Menutup modal setelah mengklik No
  }
}
