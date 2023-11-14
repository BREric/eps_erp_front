import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navmenu-admin',
  templateUrl: './navmenu-admin.component.html',
  styleUrls: ['./navmenu-admin.component.scss']
})
export class NavmenuAdminComponent implements OnInit{
  showMenuAdmin: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showMenuAdmin = this.router.url == '/administrador' || this.router.url == '/administrador/pqrs' 
      }
    });
    
  }

}