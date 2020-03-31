import { Component, OnInit } from '@angular/core';
import locations from '../../assets/locations.json';
import connections from '../../assets/connections.json';
import players from '../../assets/players.json';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  locations = locations;
  connections = connections;
  players = players;

  constructor() { }

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

  ngOnInit() {
  }

}
