import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  hide: boolean;
  buttonText: string;
  button1Class: string;
  button2Class: string;
  button3Class: string;
  insideMenuText: string;

  constructor() {
    this.hide = true;
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
        this.insideMenuText = '1';
        break;
      case 2:
        this.button1Class = 'btn-secondary';
        this.button2Class = 'btn-dark';
        this.button3Class = 'btn-secondary';
        this.insideMenuText = '2';
        break;
      case 3:
        this.button1Class = 'btn-secondary';
        this.button2Class = 'btn-secondary';
        this.button3Class = 'btn-dark';
        this.insideMenuText = '3';
        break;
    }
  }
}
