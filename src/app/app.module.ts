import { RevistaServiceService } from './services/revista-service.service';
import{ FormsModule} from '@angular/forms';
import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';
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


import { LoginComponent } from './admin/login/login.component';

import { Numero30Component } from './numero30/numero30.component';
import { Numero34Component } from './numero34/numero34.component';
import { Numero46Component } from './numero46/numero46.component';
import { Numero43Component } from './numero43/numero43.component';
import { Numero42Component } from './numero42/numero42.component';
import { Numero44Component } from './numero44/numero44.component';
import { Numero17Component } from './numero17/numero17.component';
import { Numero19Component } from './numero19/numero19.component';
import { Numero20Component } from './numero20/numero20.component';
import { Numero35Component } from './numero35/numero35.component';
import { Numero40Component } from './numero40/numero40.component';
import { Numero41Component } from './numero41/numero41.component';
import{AuthService} from './auth/auth.service.service';
import { AdministradorComponent } from './administrador/administrador.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ActualizaRevistaComponent } from './actualiza-revista/actualiza-revista.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NewPostComponent } from './upload-file/new-post/new-post.component';
import { ModalComponent } from './shared/modal/modal.component';
import { EditPostComponent } from './upload-file/edit-post/edit-post.component';
import { PostComponent } from './upload-file/post/post.component';


import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';






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
    AdministradorComponent,
    LoginComponent,
    Numero30Component,
    Numero34Component,
    Numero46Component,
    Numero43Component,
    Numero42Component,
    Numero44Component,
    Numero17Component,
    Numero19Component,
    Numero20Component,
    Numero35Component,
    Numero40Component,
    Numero41Component,
    UploadFileComponent,
    ActualizaRevistaComponent,
    NewPostComponent,
    ModalComponent,
    EditPostComponent,
    PostComponent,
    
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,

    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  entryComponents:[ModalComponent],
  providers: [
    {provide:StorageBucket,useValue: 'gs://revistatecnocultura-ef63f.appspot.com'},
    RevistaServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
