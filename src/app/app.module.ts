import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/inicio/home/home.component';
import { ServicesComponent } from './components/inicio/services/services.component';
import { AffiliatesComponent } from './components/inicio/affiliates/affiliates.component';
import { TransparencyComponent } from './components/inicio/transparency/transparency.component';
import { AboutusComponent } from './components/inicio/aboutus/aboutus.component';
import { BlogComponent } from './components/inicio/blog/blog.component';
import { PeopleComponent } from './components/inicio/people/people.component';
import { EnterprisesComponent } from './components/inicio/enterprises/enterprises.component';
import { ProvidersComponent } from './components/inicio/providers/providers.component';
import { NavmenuComponent } from './components/inicio/navmenu/navmenu.component';
import { PagenotfoundComponent } from './components/inicio/pagenotfound/pagenotfound.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { SignupComponent } from './components/inicio/signup/signup.component';
import { ForgotpasswordComponent } from './components/inicio/forgotpassword/forgotpassword.component';
import { ContactComponent } from './components/inicio/contact/contact.component';

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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
