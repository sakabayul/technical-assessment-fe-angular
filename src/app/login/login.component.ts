import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onLogin() {
    const hardcodedUsername = 'user';
    const hardcodedPassword = 'password';

    if (this.username === hardcodedUsername && this.password === hardcodedPassword) {
      // Navigasi ke halaman lain setelah login berhasil
      this.router.navigate(['/dashboard']);
    } else {
      // Tampilkan pesan error jika login gagal
      this.errorMessage = 'Invalid username or password';
    }
  }
}
