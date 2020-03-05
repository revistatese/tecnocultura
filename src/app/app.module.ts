import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { ConocemosComponent } from './conocemos/conocemos.component';
import { NAnterioresComponent } from './n-anteriores/n-anteriores.component';
import { EditorialComponent } from './editorial/editorial.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { LineamientosComponent } from './lineamientos/lineamientos.component';
import { AdminModule } from './admin/admin.module'

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { LoginComponent } from './admin/login/login.component';
import { Numero49Component } from './numero49/numero49.component';
import { Numero48Component } from './numero48/numero48.component';
import { Numero47Component } from './numero47/numero47.component';
import { Numero30Component } from './numero30/numero30.component';
import { Numero34Component } from './numero34/numero34.component';




var config = {
  apiKey: "AIzaSyDCgz-DoAcS2EY4m9kMT27n01goFuTEc_w",
  authDomain: "tecnocultura-df5ce.firebaseapp.com",
  databaseURL: "https://tecnocultura-df5ce.firebaseio.com",
  projectId: "tecnocultura-df5ce",
  storageBucket: "tecnocultura-df5ce.appspot.com",
  messagingSenderId: "189181717351",
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ConocemosComponent,
    NAnterioresComponent,
    EditorialComponent,
    ContactanosComponent,
    LineamientosComponent,
    LoginComponent,
    Numero49Component,
    Numero48Component,
    Numero47Component,
    Numero30Component,
    Numero34Component,
 


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
