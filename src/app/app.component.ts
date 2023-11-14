import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Type } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AdministradorService } from './services/administrador/administrador.service';
import { AtencionService } from './services/atencion/atencion.service';
import { CitaService } from './services/cita/cita.service';
import { DiaLibreService } from './services/dia_libre/dia-libre.service';
import { HorarioService } from './services/horario/horario.service';
import { MedicamentoService } from './services/medicamento/medicamento.service';
import { MedicoService } from './services/medico/medico.service';
import { MensajeService } from './services/mensaje/mensaje.service';
import { PacienteService } from './services/paciente/paciente.service';
import { PqrsService } from './services/pqrs/pqrs.service';
import { NavmenuComponent } from './views/inicio/navmenu/navmenu.component';
import { MenuAdminComponent } from './views/administrador/menu-admin/menu-admin.component';
import { NavlogoAdminComponent } from './views/administrador/navlogo-admin/navlogo-admin.component';
import { NavLoginComponent } from './views/inicio/nav-login/nav-login.component';




@Component({
  selector: 'app-root',
  template: `
  <ng-container *ngComponentOutlet="menu"></ng-container>
  <ng-container *ngComponentOutlet="logo"></ng-container>
  <ng-container *ngComponentOutlet="menuAdmin"></ng-container>
<ng-container *ngComponentOutlet="logoAdmin"></ng-container>
  <button (click)="changeMenu()">Change Menu</button>
`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'eps_erp';
  menu: Type<any>;
  logo: Type<any>;
  menuAdmin: Type<any>
  logoAdmin: Type<any>
  // epsForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    public administradorService:AdministradorService,
    public atencionService:AtencionService,
    public citaService:CitaService,
    public ciaLibreService:DiaLibreService,
    public horarioService:HorarioService,
    public medicamentoService:MedicamentoService,
    public medicoService:MedicoService,
    public mensajeService:MensajeService,
    public pacienteService:PacienteService,
    public pqrsService:PqrsService
  ){

  }
  ngOnInit() {
    this.route.url.subscribe(url => {
      this.menu = url[0].path === 'administrador' ? MenuAdminComponent : NavmenuComponent;
      this.logo = url[0].path == 'administrador' ? NavlogoAdminComponent : NavLoginComponent;
     // this.logoAdmin = url[1].path == 'administrador' ? NavlogoAdminComponent : NavLoginComponent;
    });

  }

}
