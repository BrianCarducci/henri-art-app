import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { environment } from '../environments/environment'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { FunctionalComponent } from './functional/functional.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { SculpturalComponent } from './sculptural/sculptural.component';
import { CvComponent } from './cv/cv.component';
import { MusicComponent } from './music/music.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MaincontentComponent,
    FunctionalComponent,
    ContactComponent,
    SculpturalComponent,
    CvComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AppRoutingModule
  ],
  providers: [
    { provide: BUCKET, useValue: 'gs://henri-art.appspot.com/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
