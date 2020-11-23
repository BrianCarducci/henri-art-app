import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FunctionalComponent } from './components/functional/functional.component';
import { BioComponent } from './components/bio/bio.component';
import { ContactComponent } from './components/contact/contact.component';
import { SculpturalComponent } from './components/sculptural/sculptural.component';
import { CvComponent } from './components/cv/cv.component';
import { MusicComponent } from './components/music/music.component';
import { PaintingsComponent } from './components/paintings/paintings.component';

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
