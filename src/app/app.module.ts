import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/inicio/home/home.component';
import { ServicesComponent } from './views/inicio/services/services.component';
import { AffiliatesComponent } from './views/inicio/affiliates/affiliates.component';
import { TransparencyComponent } from './views/inicio/transparency/transparency.component';
import { AboutusComponent } from './views/inicio/aboutus/aboutus.component';
import { BlogComponent } from './views/inicio/blog/blog.component';
import { PeopleComponent } from './views/inicio/people/people.component';
import { EnterprisesComponent } from './views/inicio/enterprises/enterprises.component';
import { ProvidersComponent } from './views/inicio/providers/providers.component';
import { NavmenuComponent } from './views/inicio/navmenu/navmenu.component';
import { PagenotfoundComponent } from './views/inicio/pagenotfound/pagenotfound.component';
import { LoginComponent } from './views/inicio/login/login.component';
import { SignupComponent } from './views/inicio/signup/signup.component';
import { ForgotpasswordComponent } from './views/inicio/forgotpassword/forgotpassword.component';
import { ContactComponent } from './views/inicio/contact/contact.component';
import { NavLoginComponent } from './views/inicio/nav-login/nav-login.component';
import { MenuAdminComponent } from './views/administrador/menu-admin/menu-admin.component';
import { PqrsAdminComponent } from './views/administrador/pqrs-admin/pqrs-admin.component';
import { NavmenuAdminComponent } from './views/administrador/navmenu-admin/navmenu-admin.component';
import { NavlogoAdminComponent } from './views/administrador/navlogo-admin/navlogo-admin.component';
import { AdminLayoutComponent } from './views/administrador/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './views/inicio/home-layout/home-layout.component';
import { GestionAdminComponent } from './views/administrador/gestion-admin/gestion-admin.component';
import { HistorialAdminComponent } from './views/administrador/historial-admin/historial-admin.component';
import { ConfiguracionAdminComponent } from './views/administrador/configuracion-admin/configuracion-admin.component';
import { MedicoService } from './services/medico/medico.service';
import { ModalComponent } from './modal/modal.component';
import { ConfiguracionPacienteComponent } from './views/paciente/configuracion-paciente/configuracion-paciente.component';
import { PqrsPacienteComponent } from './views/paciente/pqrs-paciente/pqrs-paciente.component';
import { MenuPacienteComponent } from './views/paciente/menu-paciente/menu-paciente.component';
import { CitasPacienteComponent } from './views/paciente/citas-paciente/citas-paciente.component';
import { HistorialPacienteComponent } from './views/paciente/historial-paciente/historial-paciente.component';
import { HistorialMedicoComponent } from './views/medico/historial-medico/historial-medico.component';
import { MenuMedicoComponent } from './views/medico/menu-medico/menu-medico.component';
import { DisponibilidadMedicoComponent } from './views/medico/disponibilidad-medico/disponibilidad-medico.component';
import { CitasMedicoComponent } from './views/medico/citas-medico/citas-medico.component';
import { ConfiguracionMedicoComponent } from './views/medico/configuracion-medico/configuracion-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    AffiliatesComponent,
    TransparencyComponent,
    AboutusComponent,
    BlogComponent,
    PeopleComponent,
    EnterprisesComponent,
    ProvidersComponent,
    NavmenuComponent,
    PagenotfoundComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    ContactComponent,
    NavLoginComponent,
    MenuAdminComponent,
    PqrsAdminComponent,
    NavmenuAdminComponent,
    NavlogoAdminComponent,
    AdminLayoutComponent,
    HomeLayoutComponent,
    GestionAdminComponent,
    HistorialAdminComponent,
    ConfiguracionAdminComponent,
    ModalComponent,
    ConfiguracionPacienteComponent,
    PqrsPacienteComponent,
    MenuPacienteComponent,
    CitasPacienteComponent,
    HistorialPacienteComponent,
    HistorialMedicoComponent,
    MenuMedicoComponent,
    DisponibilidadMedicoComponent,
    CitasMedicoComponent,
    ConfiguracionMedicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [MedicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
