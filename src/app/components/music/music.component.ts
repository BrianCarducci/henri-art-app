import { Component } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent {
  playersLoaded = [];

  constructor() { }

  playerLoaded() {
    this.playersLoaded.push(true);
    if (this.playersLoaded.length === 4) {
      document.getElementById('spinner').style.display = 'none';
    }
  }

}
