import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el módulo Router

@Component({
  selector: 'app-nav-login',
  templateUrl: './nav-login.component.html',
  styleUrls: ['./nav-login.component.scss']
})
export class NavLoginComponent {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }
}

