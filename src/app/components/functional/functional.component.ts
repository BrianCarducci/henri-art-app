import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functional',
  templateUrl: './functional.component.html',
  styleUrls: ['./functional.component.css']
})
export class FunctionalComponent implements OnInit {
  img = '';
  modalCaption = '';

  constructor() { }

  ngOnInit() {
  }

  imgClick(event) {
    // let imgSrc = event.target.getAttribute('src');
    // // imgSrc = imgSrc.split('/');
    // // imgSrc[2] = 'fullsize';
    // // imgSrc = imgSrc.join('/');
    // this.img = imgSrc;
    // // switch(this.img) {
    // //   case 'assets/IMG_2855.JPG':
    // //     this.modalCaption = 'testyz';
    // //     break;
    // //   default:
    // //     this.modalCaption = 'idk';
    // // }
    // let modal = document.getElementById('myModal');
    // // let modalImg = document.getElementById('modal_image');
    // modal.style.display = 'block';
  }

  closeModal() {
    let modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
 
}