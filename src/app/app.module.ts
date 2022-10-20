import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module'; 
import { HttpClientModule } from '@angular/common/http';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AppRoutingModule } from './app-routing.module';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatchPasswordDirective } from './directives/match-fields.directive'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginRegisterComponent,
    RegisterFormComponent,
    ResetPasswordComponent,
    BannerComponent,
    MatchPasswordDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
