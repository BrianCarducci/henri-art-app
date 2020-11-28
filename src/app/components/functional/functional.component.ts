import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-functional',
  templateUrl: './functional.component.html',
  styleUrls: ['./functional.component.css']
})
export class FunctionalComponent implements OnInit {
  imgUrlsSubscription: Subscription;
  imgUrls: string[];
  mobile = false;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.mobile = window.screen.width <= 414 // 768px portrait
    this.imgUrlsSubscription = this.firebaseService.getArtImgFilesUrls('Functional')
      .subscribe(res => Promise.all(res).then(urls => this.imgUrls = urls));
  }

  ngOnDestroy() {
    this.imgUrlsSubscription.unsubscribe();
  }

  imgLoaded(spinnerIndex: number) {
    document.getElementById(`${spinnerIndex}`).style.display = 'none';
  }

}
