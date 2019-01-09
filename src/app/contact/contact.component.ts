import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  mobile = false;

  constructor() { }

  ngOnInit() {
    console.log(window.screen.width);
    if (window.screen.width <= 414) { // 768px portrait
      this.mobile = true;
    }
    console.log(this.mobile);
  }

}
