import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {

  profileUrl: Observable<string | null>;
  constructor(private storage: AngularFireStorage) {
    const ref = this.storage.ref('self_portrait.jpg');
    this.profileUrl = ref.getDownloadURL();
  }

  ngOnInit() { }

}
