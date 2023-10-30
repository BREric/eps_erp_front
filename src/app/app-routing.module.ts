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
  { path: '**' , component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
