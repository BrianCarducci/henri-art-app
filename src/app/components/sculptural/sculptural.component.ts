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
  imgLoadCount = 0;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
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
