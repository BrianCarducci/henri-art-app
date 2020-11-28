import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-sculptural',
  templateUrl: './sculptural.component.html',
  styleUrls: ['./sculptural.component.css']
})
export class SculpturalComponent implements OnInit, OnDestroy {
  imgUrlsSubscription: Subscription;
  imgUrls: string[];
  mobile = false;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.mobile = window.screen.width <= 414 // 768px portrait
    this.imgUrlsSubscription = this.firebaseService.getArtImgFilesUrls('Sculptural')
      .subscribe(res => Promise.all(res).then(urls => this.imgUrls = urls));
  }

  ngOnDestroy() {
    this.imgUrlsSubscription.unsubscribe();
  }

  imgLoaded(spinnerIndex: number) {
    document.getElementById(`${spinnerIndex}`).style.display = 'none';
  }

}
