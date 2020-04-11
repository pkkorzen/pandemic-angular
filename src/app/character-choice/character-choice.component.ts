import {Component, OnInit} from '@angular/core';
import characters from '../../assets/characters.json';
import {PlayerComponent} from '../player/player.component';

@Component({
  selector: 'app-character-choice',
  templateUrl: './character-choice.component.html',
  styleUrls: ['./character-choice.component.css']
})
export class CharacterChoiceComponent implements OnInit {
  charactersMap: Map<string, number>;
  playerNumber: number;
  pandemicNumber: number;
  maxPandemicCards: number[];
  maxPlayers: number[];
  players: PlayerComponent[];

  constructor() {
    this.playerNumber = 2;
    this.pandemicNumber = 5;
    this.charactersMap = new Map<string, number>();
    for (const character of characters) {
      this.charactersMap.set(character.name, 0);
    }
    this.maxPlayers = this.fillInArray(2, 3)
    this.maxPandemicCards = this.fillInArray(4, 3)
    this.players = new Array(4)
    for (let i = 0; i < this.players.length; i++) {
      this.players[i] = new PlayerComponent();
      this.players[i].name = 'Click & type your name...';
      this.players[i].playerImage = '../../assets/img/character-choice.png';
      this.players[i].playerCharacter = 'Random';
      this.players[i].playerId = 'player' + (i + 1);
    }
  }

  ngOnInit() {
  }

  private fillInArray(minNumber: number, optionsToChoose: number): number[] {
    const array = new Array(optionsToChoose);
    for (let i = 0; i < array.length; i++) {
      array[i] = i + minNumber;
    }
    return array;
  }
}
