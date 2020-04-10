import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-right-menu-players',
  templateUrl: './right-menu-players.component.html',
  styleUrls: ['./right-menu-players.component.css']
})
export class RightMenuPlayersComponent implements OnInit {
  @Input()
  private city: string;
  @Input()
  private color: string;
  @Input()
  private role: string;
  @Input()
  private name: string;
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
