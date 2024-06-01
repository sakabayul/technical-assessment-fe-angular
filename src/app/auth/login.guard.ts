import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']); // Jika sudah login, arahkan ke dashboard
      return false; // Blok akses ke halaman login
    }
    return true; // Izinkan akses ke halaman login jika belum login
  }
}
