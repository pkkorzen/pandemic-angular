import {Component, OnInit} from '@angular/core';
import players from '../../assets/players.json';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  hide: boolean;
  hide1: boolean;
  hide2: boolean;
  hide3: boolean;
  buttonText: string;
  button1Class: string;
  button2Class: string;
  button3Class: string;
  insideMenuText: string;
  players = players;

  constructor() {
    this.hide = true;
    this.hide1 = true;
    this.hide2 = false;
    this.hide3 = true;
    this.buttonText = '>';
    this.button1Class = 'btn-secondary';
    this.button2Class = 'btn-dark';
    this.button3Class = 'btn-secondary';
    this.insideMenuText = 'Jill';
  }

  ngOnInit() {
  }

  toggleLeftMenu() {
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
  toggleButton(menu: number) {
    switch (menu) {
      case 1:
        this.button1Class = 'btn-dark';
        this.button2Class = 'btn-secondary';
        this.button3Class = 'btn-secondary';
        this.hide1 = false;
        this.hide2 = true;
        this.hide3 = true;
        break;
      case 2:
        this.button1Class = 'btn-secondary';
        this.button2Class = 'btn-dark';
        this.button3Class = 'btn-secondary';
        this.hide1 = true;
        this.hide2 = false;
        this.hide3 = true;
        break;
      case 3:
        this.button1Class = 'btn-secondary';
        this.button2Class = 'btn-secondary';
        this.button3Class = 'btn-dark';
        this.hide1 = true;
        this.hide2 = true;
        this.hide3 = false;
        break;
    }
  }
}
