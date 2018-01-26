import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { IndexComponent } from './pages/index/index.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import {AppRoutingModule} from "./app-routing.module";
import { HeaderComponent } from './pages/layout/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    InscriptionComponent,
    ConnexionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
