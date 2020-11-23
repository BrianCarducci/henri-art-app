import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  imgLoaded = false;
  profilePicUrl$: Observable<string | null>;
  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
    const ref = this.storage.ref('profile_pic.jpg');
    this.profilePicUrl$ = ref.getDownloadURL();
  }

  loaded() {
    this.imgLoaded = true;
  }

}
