import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { CuentaService } from 'src/app/services/cuenta/cuenta.service';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  //template: `<div>Menu Component</div>`,
  styleUrls: ['./navmenu.component.scss']
})
export class NavmenuComponent implements OnInit{
  showMenu: boolean;
  showMenuAdmin: boolean;
  showMenuPaciente: boolean;
  showMenuMedico: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showMenu = this.router.url == '/home' || this.router.url == '/services'
        || this.router.url == '/people' || this.router.url == '/enterprises' 
        || this.router.url == '/contact' || this.router.url == '/aboutus' 
        || this.router.url == '/login' || this.router.url == '/signup' || this.router.url == '/forgotpassword' 
        || this.router.url == '/blog';
  
        this.showMenuAdmin = this.router.url == '/administrador' || this.router.url == '/administrador/pqrs'
        || this.router.url == '/administrador/gestion' || this.router.url == '/administrador/configuracion'
        || this.router.url == '/administrador/historial';

        this.showMenuPaciente = this.router.url == '/paciente' || this.router.url == '/paciente/pqrs'
        || this.router.url == '/paciente/citas' || this.router.url == '/paciente/configuracion'
        || this.router.url == '/paciente/historial';

        this.showMenuMedico = this.router.url == '/medico' || this.router.url == '/medico/disponibilidad'
        || this.router.url == '/medico/citas' || this.router.url == '/medico/configuracion'
        || this.router.url == '/medico/historial';
      }
    });
  }
  

}