// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAdmin = false;

  loginAsAdmin() {
    this.isAdmin = true;
  }

  logout() {
    this.isAdmin = false;
  }
}
