import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  login(
    username: string, 
    password: string
  ): boolean {
    // Contoh login sederhana, seharusnya memeriksa kredensial pengguna
    if (username === 'user' && password === 'password') {
      localStorage.setItem('token', 'your-token');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
