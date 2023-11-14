import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'; // Importa el módulo Router

@Component({
  selector: 'app-nav-login',
  templateUrl: './nav-login.component.html',
  
  styleUrls: ['./nav-login.component.scss']
})
export class NavLoginComponent implements OnInit{
  showLogo: boolean;
  showLoginAdmin: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showLogo = this.router.url == '/home' || this.router.url == '/services'
        || this.router.url == '/people' || this.router.url == '/enterprises' 
        || this.router.url == '/contact' || this.router.url == '/aboutus' 
        || this.router.url == '/login' || this.router.url == '/signup' || this.router.url == '/forgotpassword' 
        || this.router.url == '/blog' ;

        this.showLoginAdmin = this.router.url == '/administrador' || this.router.url == '/administrador/pqrs'
        || this.router.url == '/administrador/gestion' || this.router.url == '/administrador/configuracion'
        || this.router.url == '/administrador/historial';
      }
    });
    
  }

}