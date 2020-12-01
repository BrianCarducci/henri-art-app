import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  afterLoadComplete = false;
  mobile = false;
  resumeUrl$: Observable<string | null>;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    if (window.screen.width <= 414) { // 768px portrait
      this.mobile = true;
    }
    this.resumeUrl$ = this.firebaseService.getSingleFile('resume.pdf');
  }

  pdfLoaded() {
    this.afterLoadComplete = true;
  }

}
