import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.css']
})
export class PaintingsComponent implements OnInit, OnDestroy {
  imgUrlsSubscription: Subscription;
  imgUrls: string[];
  mobile = false;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.mobile = window.screen.width <= 414 // 768px portrait
    this.imgUrlsSubscription = this.firebaseService.getArtImgFilesUrls('Paintings')
      .subscribe(res => Promise.all(res).then(urls => this.imgUrls = urls));
  }

  ngOnDestroy() {
    this.imgUrlsSubscription.unsubscribe();
  }

  imgLoaded(spinnerIndex: number) {
    document.getElementById(`${spinnerIndex}`).style.display = 'none';
  }

}
