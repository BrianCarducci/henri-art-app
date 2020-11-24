import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  imgLoaded = false;
  profilePicUrl$: Observable<string | null>;
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.profilePicUrl$ = this.firebaseService.getSingleFile('profile_pic.jpg');
  }

  loaded() {
    this.imgLoaded = true;
  }
}
