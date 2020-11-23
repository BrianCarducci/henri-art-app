import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  afterLoadComplete = false;
  mobile = false;
  resumeUrl$: Observable<string | null>;
  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
    if (window.screen.width <= 414) { // 768px portrait
      this.mobile = true;
    }
    const ref = this.storage.ref('resume.pdf');
    this.resumeUrl$ = ref.getDownloadURL();
  }

  pdfLoaded() {
    this.afterLoadComplete = true;
  }

}