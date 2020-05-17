import { Component, OnInit } from '@angular/core';
import locations from '../../assets/locations.json';
import connections from '../../assets/connections.json';
import {ColorConverterService} from '../color-converter.service';
import {CharacterService} from '../services/character.service';
import {Character} from '../character';
import {Player} from '../player';
import {PlayerService} from '../services/player.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  locations = locations;
  connections = connections;
  players: Player[];
  charactersMap: Map<string, Character>;

  constructor(private colorConverterService: ColorConverterService, private characterService: CharacterService,
              private playerService: PlayerService) {
    this.charactersMap = this.characterService.getCharactersMap();
  }

  ngOnInit() {
    this.playerService.findAll().subscribe(data => {
      this.players = data;
    });
  }

}
