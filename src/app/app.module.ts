import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { IndexComponent } from './pages/index/index.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import {AppRoutingModule} from "./app-routing.module";
import { HeaderComponent } from './pages/layout/header/header.component';
import { AccountFormComponent } from './account-form/account-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "./services/api.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    InscriptionComponent,
    ConnexionComponent,
    HeaderComponent,
    AccountFormComponent,
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
  ],
  providers: [
      ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
