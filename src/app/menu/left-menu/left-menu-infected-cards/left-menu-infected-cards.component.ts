import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-left-menu-infected-cards',
  templateUrl: './left-menu-infected-cards.component.html',
  styleUrls: ['./left-menu-infected-cards.component.css']
})
export class LeftMenuInfectedCardsComponent implements OnInit {
  @Input()
  private city: string;
  @Input()
  private color: string;
  constructor() { }

  ngOnInit() {
  }
  colorConverter(color: string): string {
    switch (color) {
      case 'blue': {
        return 'btn-primary';
      }
      case 'black': {
        return 'btn-dark';
      }
      case 'yellow': {
        return 'btn-warning';
      }
      default: {
        return 'btn-danger';
      }
    }
  }
}
