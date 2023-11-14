import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navlogo-admin',
  templateUrl: './navlogo-admin.component.html', 
  styleUrls: ['./navlogo-admin.component.scss']
})
export class NavlogoAdminComponent implements OnInit{
  showLoginAdmin: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showLoginAdmin = this.router.url == '/administrador' || this.router.url == '/administrador/pqrs' 
      }
    });

}
}
