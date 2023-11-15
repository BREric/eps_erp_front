import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/inicio/home/home.component';
import { PagenotfoundComponent } from './views/inicio/pagenotfound/pagenotfound.component';
import { AboutusComponent } from './views/inicio/aboutus/aboutus.component';
import { AffiliatesComponent } from './views/inicio/affiliates/affiliates.component';
import { BlogComponent } from './views/inicio/blog/blog.component';
import { EnterprisesComponent } from './views/inicio/enterprises/enterprises.component';
import { PeopleComponent } from './views/inicio/people/people.component';
import { ProvidersComponent } from './views/inicio/providers/providers.component';
import { ServicesComponent } from './views/inicio/services/services.component';
import { ForgotpasswordComponent } from './views/inicio/forgotpassword/forgotpassword.component';
import { SignupComponent } from './views/inicio/signup/signup.component';
import { LoginComponent } from './views/inicio/login/login.component';
import { ContactComponent } from './views/inicio/contact/contact.component';
import { MenuAdminComponent } from './views/administrador/menu-admin/menu-admin.component';
import { PqrsAdminComponent } from './views/administrador/pqrs-admin/pqrs-admin.component';
import { NavmenuComponent } from './views/inicio/navmenu/navmenu.component';
import { NavLoginComponent } from './views/inicio/nav-login/nav-login.component';
import { GestionAdminComponent } from './views/administrador/gestion-admin/gestion-admin.component';
import { HistorialAdminComponent } from './views/administrador/historial-admin/historial-admin.component';
import { ConfiguracionAdminComponent } from './views/administrador/configuracion-admin/configuracion-admin.component';
import { NavlogoAdminComponent } from './views/administrador/navlogo-admin/navlogo-admin.component';
import { NavmenuAdminComponent } from './views/administrador/navmenu-admin/navmenu-admin.component';
import { MenuPacienteComponent } from './views/paciente/menu-paciente/menu-paciente.component';
import { ConfiguracionPacienteComponent } from './views/paciente/configuracion-paciente/configuracion-paciente.component';
import { CitasPacienteComponent } from './views/paciente/citas-paciente/citas-paciente.component';
import { HistorialPacienteComponent } from './views/paciente/historial-paciente/historial-paciente.component';
import { PqrsPacienteComponent } from './views/paciente/pqrs-paciente/pqrs-paciente.component';

// Rutas de navegacion

const routes: Routes = [
  { path: '' , redirectTo: '/home' , pathMatch: 'full' },
  { path: 'home' , component: HomeComponent},
  { path: 'aboutus' , component: AboutusComponent},
  { path: 'affiliates' , component: AffiliatesComponent},
  { path: 'blog' , component: BlogComponent},
  { path: 'enterprises' , component: EnterprisesComponent},
  { path: 'people' , component: PeopleComponent},
  { path: 'providers' , component: ProvidersComponent},
  { path: 'services' , component: ServicesComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'signup' , component: SignupComponent},
  { path: 'forgotpassword' , component: ForgotpasswordComponent},
  { path: 'contact' , component: ContactComponent},
  { path: 'administrador' , component: MenuAdminComponent},
  { path: 'administrador/pqrs' , component: PqrsAdminComponent},
  { path: 'administrador/gestion' , component: GestionAdminComponent},
  { path: 'administrador/historial' , component: HistorialAdminComponent},
  { path: 'administrador/configuracion' , component: ConfiguracionAdminComponent},
  { path: 'paciente' , component: MenuPacienteComponent},
  { path: 'paciente/configuracion' , component: ConfiguracionPacienteComponent},
  { path: 'paciente/citas' , component: CitasPacienteComponent},
  { path: 'paciente/historial' , component: HistorialPacienteComponent},
  { path: 'paciente/pqrs' , component: PqrsPacienteComponent},
  { path: '**' , component: PagenotfoundComponent}
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
