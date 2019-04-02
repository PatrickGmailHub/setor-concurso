import { SetorGuard } from './guards/setor.guard';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './login/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SetorModule } from './setor/setor.module';

import { LoginService } from './login/login.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SetorModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    SetorGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
