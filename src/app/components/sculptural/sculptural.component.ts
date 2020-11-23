import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-sculptural',
  templateUrl: './sculptural.component.html',
  styleUrls: ['./sculptural.component.css']
})
export class SculpturalComponent implements OnInit, AfterViewInit {
  @ViewChild('spinner') spinners;
  imgUrls: string[]
  imgLoadCount = 0
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getArtImgFilesUrlsObservables('Sculptural')
      .subscribe(res => Promise.all(res).then(urls => this.imgUrls = urls));
  }

  ngAfterViewInit() {
    console.log(this.spinners)
  }

  imgLoaded(spinnerIndex: number) {
    document.getElementById(`${spinnerIndex}`).style.display = 'none';
  }

}
