import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upper-menu',
  templateUrl: './upper-menu.component.html',
  styleUrls: ['./upper-menu.component.css']
})
export class UpperMenuComponent implements OnInit {
  hide: boolean;
  constructor() {
    this.hide = true;
  }
  ngOnInit() {
  }
  toggleUpperMenu(){
    this.hide = !this.hide;
  }
}
