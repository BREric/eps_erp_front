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
    NavLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
