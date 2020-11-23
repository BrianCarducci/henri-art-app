import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mobile = false;

  constructor() { }

  ngOnInit() {
    if (window.screen.width <= 414) { // 768px portrait
      this.mobile = true;
    }
  }

  openNav() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  closeNav() {
    document.getElementById("myDropdown").classList.remove("show");
  }


}
