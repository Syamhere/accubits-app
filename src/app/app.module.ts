import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { EmailComponent } from './components/login/email/email.component';
import { PasswordComponent } from './components/login/password/password.component';
import { LoginButtonComponent } from './components/login/login-button/login-button.component';
import { HomeComponent } from './components/home/home.component';
import { HomeBannerComponent } from './components/home/home-banner/home-banner.component';
import { KeyFeatureComponent } from './components/home/key-feature/key-feature.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    PasswordComponent,
    LoginButtonComponent,
    HomeComponent,
    HomeBannerComponent,
    KeyFeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
