import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FunctionalComponent } from './functional/functional.component';
import { BioComponent } from './bio/bio.component';
import { ContactComponent } from './contact/contact.component';
import { SculpturalComponent } from './sculptural/sculptural.component';
import { CvComponent } from './cv/cv.component';
import { MusicComponent } from './music/music.component';
import { PaintingsComponent } from './paintings/paintings.component';

const routes: Routes = [
  { path: '', component: BioComponent },
  { path: 'sculptural', component: SculpturalComponent },
  { path: 'functional', component: FunctionalComponent },
  { path: 'paintings', component: PaintingsComponent },
  { path: 'music', component: MusicComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cv', component: CvComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })]
})
export class AppRoutingModule { }
