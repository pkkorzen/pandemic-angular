import { Component, OnInit } from '@angular/core';
import players from '../../assets/players.json';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css']
})
export class RightMenuComponent implements OnInit {
  hide: boolean;
  buttonText: string;
  players = players;
  constructor() {
    this.hide = true;
    this.buttonText = '<';
  }
  toggleRightMenu() {
    this.toggleMenu();
    this.toggleBackButton();
  }
  private toggleMenu() {
    this.hide = !this.hide;
  }
  private toggleBackButton() {
    // tslint:disable-next-line:no-bitwise
    const buttonCharCodeReversed = this.buttonText.charCodeAt(0) ^ 2;
    this.buttonText = String.fromCharCode(buttonCharCodeReversed);
  }
  ngOnInit() {
  }

}
