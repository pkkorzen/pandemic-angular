import { Component, OnInit } from '@angular/core';
import locations from '../../assets/locations.json';
import connections from '../../assets/connections.json';
import players from '../../assets/players.json';
import {ColorConverterService} from '../color-converter.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  locations = locations;
  connections = connections;
  players = players;

  constructor(private colorConverterService: ColorConverterService) { }

  ngOnInit() {
  }

}
