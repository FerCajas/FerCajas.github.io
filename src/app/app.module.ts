import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MuertesCovidComponent } from './muertes-covid/muertes-covid.component';
import { FoundpagesComponent } from './foundpages/foundpages.component';
import { PresentacionComponent } from './presentacion/presentacion.component';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MuertesCovidComponent,
    FoundpagesComponent,
    PresentacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
