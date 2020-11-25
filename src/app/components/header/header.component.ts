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
    this.mobile = window.screen.width <= 414 // 768px portrait
  }

  openNav() {
    document.getElementById("myDropdown").classList.toggle("show");
    console.log('open called')
  }

  closeNav() {
    document.getElementById("myDropdown").classList.remove("show");
  }


}
