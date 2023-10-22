import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/inicio/home/home.component';
import { PagenotfoundComponent } from './components/inicio/pagenotfound/pagenotfound.component';
import { AboutusComponent } from './components/inicio/aboutus/aboutus.component';
import { AffiliatesComponent } from './components/inicio/affiliates/affiliates.component';
import { BlogComponent } from './components/inicio/blog/blog.component';
import { EnterprisesComponent } from './components/inicio/enterprises/enterprises.component';
import { PeopleComponent } from './components/inicio/people/people.component';
import { ProvidersComponent } from './components/inicio/providers/providers.component';
import { ServicesComponent } from './components/inicio/services/services.component';
import { ForgotpasswordComponent } from './components/inicio/forgotpassword/forgotpassword.component';
import { SignupComponent } from './components/inicio/signup/signup.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { ContactComponent } from './components/inicio/contact/contact.component';

// Rutas de navegacion

const routes: Routes = [
  { path: '' , redirectTo: '/home'},
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
  { path: '**' , component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
