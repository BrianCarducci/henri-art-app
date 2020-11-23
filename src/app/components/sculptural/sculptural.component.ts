import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-sculptural',
  templateUrl: './sculptural.component.html',
  styleUrls: ['./sculptural.component.css']
})
export class SculpturalComponent implements OnInit {
  imgUrls: string[]
  imgLoadCount = 0
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getArtImgFilesUrls('Sculptural')
      .subscribe(res => Promise.all(res).then(urls => this.imgUrls = urls));
  }

  imgLoaded(spinnerIndex: number) {
    document.getElementById(`${spinnerIndex}`).style.display = 'none';
  }

}
