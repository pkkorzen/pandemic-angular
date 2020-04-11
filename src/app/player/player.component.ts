import {Component, Input, OnInit} from '@angular/core';
import characters from '../../assets/characters.json';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input()
  name: string;
  @Input()
  playerCharacter: string;
  @Input()
  playerImage: string;
  @Input()
  playerId: string;
  @Input()
  charactersMap: Map<string, number>;
  characters = characters;

  constructor() {
  }

  ngOnInit() {
  }

  handleChangeEvent(e, character: string) {
    this.charactersMap.set(character, 0);
    this.charactersMap.set(e.target.value, 1);
    this.playerImage = '../../assets/img/characters/' + e.target.value.toLowerCase() + '.png';
    this.playerCharacter = e.target.value;
  }

  private clearName() {
    this.name = '';
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      document.getElementById(this.playerId).blur();
    }
  }

  handleInputEvent(e) {
    this.name = e.target.value;
  }
}
