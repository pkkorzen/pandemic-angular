import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-left-menu-play-cards',
  templateUrl: './left-menu-play-cards.component.html',
  styleUrls: ['./left-menu-play-cards.component.css']
})
export class LeftMenuPlayCardsComponent implements OnInit {
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
