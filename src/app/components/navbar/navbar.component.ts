import { Component } from '@angular/core';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthService) { }
  
  // Fungsi untuk logout
  logout(): void {
    this.authService.logout();
  }

  modalVisible: boolean = false;

  openModal() {
    this.modalVisible = true;
  }

  onClose() {
    this.modalVisible = false; // Menutup modal ketika tombol close diklik
  }
}
