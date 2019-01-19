import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';

import { FunctionalComponent } from './functional/functional.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { ContactComponent } from './contact/contact.component';
import { SculpturalComponent } from './sculptural/sculptural.component';
import { CvComponent } from './cv/cv.component';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
  { path: '', component: MaincontentComponent },
  { path: 'functional', component: FunctionalComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sculptural', component: SculpturalComponent },
  { path: 'cv', component: CvComponent},
  { path: 'music', component: MusicComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
