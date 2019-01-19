import { Component, OnInit } from '@angular/core';

declare var soundcloud: any;

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
    console.log(soundcloud);
  }

}
