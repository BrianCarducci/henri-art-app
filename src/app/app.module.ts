import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BioComponent } from './bio/bio.component';
import { FunctionalComponent } from './functional/functional.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { SculpturalComponent } from './sculptural/sculptural.component';
import { CvComponent } from './cv/cv.component';
import { MusicComponent } from './music/music.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaintingsComponent } from './paintings/paintings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BioComponent,
    FunctionalComponent,
    ContactComponent,
    SculpturalComponent,
    CvComponent,
    MusicComponent,
    PaintingsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    PdfViewerModule
  ],
  providers: [
    { provide: BUCKET, useValue: 'gs://henri-art.appspot.com/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
