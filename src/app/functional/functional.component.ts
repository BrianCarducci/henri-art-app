import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functional',
  templateUrl: './functional.component.html',
  styleUrls: ['./functional.component.css']
})
export class FunctionalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imgClick() {
    let modal = document.getElementById('myModal');
    modal.style.display = 'block';
  }

  closeModal() {
    let modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
 
}
